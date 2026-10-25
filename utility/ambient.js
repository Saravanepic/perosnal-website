// Generative ambient soundtrack for the homepage, built entirely with the Web Audio API
// (no audio file, no licensing). Slow warm chords through a breathing low-pass filter and
// a generated reverb, with occasional soft chimes. The filter opens a little as the
// visitor scrolls down the page. Loaded on demand from the dock's sound button.

const CHORDS = [
  [45, 52, 57, 61, 64, 68], // A maj7
  [42, 49, 54, 57, 61, 64], // F# m7
  [38, 45, 50, 54, 57, 61], // D maj7
  [40, 47, 52, 56, 59, 66], // E add9
];
const CHIMES = [81, 83, 85, 88, 90, 93]; // A major pentatonic, high register
const CHORD_SECONDS = 9;
const VOLUME = 0.16;

const midiToHz = (m) => 440 * Math.pow(2, (m - 69) / 12);

let ctx = null;
let master, filter, dry, wet;
let playing = false;
let chordIndex = 0;
let chordTimer = 0;
let chimeTimer = 0;
let activeVoices = [];

function reverbImpulse(seconds = 4.5) {
  const rate = ctx.sampleRate;
  const len = Math.floor(rate * seconds);
  const buf = ctx.createBuffer(2, len, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
  }
  return buf;
}

function build() {
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 800;
  filter.Q.value = 0.6;

  // Slow "breathing" on the filter cutoff
  const lfo = ctx.createOscillator();
  const lfoDepth = ctx.createGain();
  lfo.frequency.value = 0.05;
  lfoDepth.gain.value = 280;
  lfo.connect(lfoDepth).connect(filter.frequency);
  lfo.start();

  const reverb = ctx.createConvolver();
  reverb.buffer = reverbImpulse();
  dry = ctx.createGain();
  wet = ctx.createGain();
  dry.gain.value = 0.55;
  wet.gain.value = 0.75;
  filter.connect(dry).connect(master);
  filter.connect(reverb).connect(wet).connect(master);

  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("scroll", onScroll, { passive: true });
}

function playChord() {
  const now = ctx.currentTime;
  // Release the previous chord slowly while the next one swells in
  activeVoices.forEach(({ osc, gain }) => {
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.linearRampToValueAtTime(0, now + 5);
    osc.forEach((o) => o.stop(now + 5.2));
  });
  activeVoices = CHORDS[chordIndex].map((note, n) => {
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(n === 0 ? 0.11 : 0.06, now + 4);
    gain.connect(filter);
    const f = midiToHz(note);
    // Two slightly detuned oscillators per note for a soft, wide pad
    const osc = [
      ["sine", -4],
      ["triangle", 5],
    ].map(([type, cents]) => {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = f;
      o.detune.value = cents;
      o.connect(gain);
      o.start(now);
      return o;
    });
    return { osc, gain };
  });
  chordIndex = (chordIndex + 1) % CHORDS.length;
}

function playChime() {
  const now = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.value = midiToHz(CHIMES[Math.floor(Math.random() * CHIMES.length)]);
  g.gain.setValueAtTime(0, now);
  g.gain.linearRampToValueAtTime(0.025, now + 0.03);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);
  o.connect(g).connect(filter);
  o.start(now);
  o.stop(now + 3.6);
  chimeTimer = setTimeout(playChime, 2500 + Math.random() * 4000);
}

function onScroll() {
  if (!playing) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  filter.frequency.setTargetAtTime(800 + progress * 1400, ctx.currentTime, 0.6);
}

function onVisibility() {
  if (!playing) return;
  if (document.hidden) ctx.suspend();
  else ctx.resume();
}

export async function start() {
  if (playing) return;
  playing = true; // set before awaiting so overlapping calls can't start twice
  if (!ctx) build();
  await ctx.resume();
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(VOLUME, now + 2.5);
  onScroll();
  playChord();
  chordTimer = setInterval(playChord, CHORD_SECONDS * 1000);
  chimeTimer = setTimeout(playChime, 3000);
}

export function stop() {
  if (!playing) return;
  playing = false;
  clearInterval(chordTimer);
  clearTimeout(chimeTimer);
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(0, now + 1.5);
  setTimeout(() => {
    if (playing) return;
    activeVoices.forEach(({ osc }) => osc.forEach((o) => o.stop()));
    activeVoices = [];
    ctx.suspend();
  }, 1600);
}

export function isPlaying() {
  return playing;
}
