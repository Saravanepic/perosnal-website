// A short, soft "tick" for menu clicks, synthesised with the Web Audio API (no audio file).
// A quick downward pitch sweep with a fast decay, plus a faint higher overtone.

let ctx = null;

export function playClick() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  const now = ctx.currentTime;

  const out = ctx.createGain();
  out.gain.setValueAtTime(0, now);
  out.gain.linearRampToValueAtTime(0.09, now + 0.004);
  out.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
  out.connect(ctx.destination);

  const tone = ctx.createOscillator();
  tone.type = "sine";
  tone.frequency.setValueAtTime(1500, now);
  tone.frequency.exponentialRampToValueAtTime(620, now + 0.06);
  tone.connect(out);

  const shine = ctx.createOscillator();
  const shineGain = ctx.createGain();
  shine.type = "triangle";
  shine.frequency.setValueAtTime(3000, now);
  shineGain.gain.value = 0.18;
  shine.connect(shineGain).connect(out);

  tone.start(now);
  shine.start(now);
  tone.stop(now + 0.1);
  shine.stop(now + 0.1);
}
