"use client";
import { useEffect, useRef } from "react";

// A glassy, gold-tinted liquid bubble rendered with a raymarching WebGL shader.
// It sits on a fixed canvas behind the page (z-index -1) and glides between
// "stops" as the visitor scrolls. Each stop is tied to a section selector:
//   x, y  -> position in -1..1 of the viewport's half-width / half-height
//   scale -> radius in units of half the viewport's shorter side
//   alpha -> overall opacity
//   mobile -> optional { x, y, scale, alpha } overrides for screens up to 768px
// `reveal` is an optional selector: matching elements get the class `bubble-behind`
// while the bubble is passing behind them (e.g. to un-dim a photo).

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPos;
uniform float uRadius;
uniform vec2 uMouse;
uniform float uAlpha;
uniform float uSteps;

const vec3 GOLD = vec3(1.0, 0.741, 0.290);   // #ffbd4a
const vec3 WARM = vec3(1.0, 0.93, 0.82);

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float map(vec3 p) {
  float t = uTime;
  p.xz *= rot(uMouse.x * 0.5 + t * 0.07);
  p.yz *= rot(-uMouse.y * 0.35);
  float d = length(p) - 1.0;
  d += 0.11 * sin(2.1 * p.x + t * 0.9) * sin(1.7 * p.y + t * 1.1) * sin(1.9 * p.z + t * 0.7);
  d += 0.05 * sin(3.7 * p.y - t * 1.3 + sin(2.3 * p.x + t * 0.6));
  return d * 0.75;
}

vec3 calcNormal(vec3 p) {
  const vec2 k = vec2(1.0, -1.0);
  const float h = 0.002;
  return normalize(k.xyy * map(p + k.xyy * h) + k.yyx * map(p + k.yyx * h) +
                   k.yxy * map(p + k.yxy * h) + k.xxx * map(p + k.xxx * h));
}

vec4 shade(vec3 p, vec3 rd) {
  vec3 n = calcNormal(p);
  vec3 v = -rd;
  float ndv = max(dot(n, v), 0.0);
  float fres = pow(1.0 - ndv, 3.0);

  // Thin-film sheen kept warm (gold -> rose -> amber) and mostly pulled toward the brand gold
  vec3 film = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.12, 0.28) + fres * 0.9 + n.y * 0.3 + uTime * 0.04));
  vec3 sheen = mix(GOLD, film, 0.22);

  // Studio lights reflected on the surface
  vec3 r = reflect(rd, n);
  float key = pow(max(dot(r, normalize(vec3(-0.5, 0.95, 0.45))), 0.0), 28.0) * 1.1;
  float fill = pow(max(dot(r, normalize(vec3(0.85, -0.25, 0.45))), 0.0), 8.0) * 0.5;
  float rim = pow(max(dot(r, normalize(vec3(0.1, -0.9, 0.4))), 0.0), 5.0) * 0.35;

  // Dark glass body with a warm inner glow
  vec3 body = GOLD * 0.10 * (1.0 - fres) + vec3(0.04);
  vec3 col = body + sheen * fres * 1.25 + WARM * (key + fill) + GOLD * rim;
  float alpha = clamp(0.32 + fres * 0.95 + key + fill * 0.6, 0.0, 1.0);
  return vec4(col, alpha);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  vec2 q = (uv - uPos) / uRadius;          // bubble space: radius ~1

  vec3 ro = vec3(q, 3.0);
  vec3 rd = normalize(vec3(q * 0.12, -1.0));

  // Soft gold halo from the ray's closest approach to the centre (cheap, no marching)
  float b = dot(ro, rd);
  float closest = length(ro - rd * b);
  float halo = exp(-max(closest - 1.0, 0.0) * 3.2) * 0.22;
  vec3 col = GOLD * halo;
  float alpha = halo * 0.85;

  // Only march rays that enter the bounding sphere
  float c = dot(ro, ro) - 1.69;
  float h = b * b - c;
  if (h > 0.0) {
    float t = -b - sqrt(h);
    float tFar = -b + sqrt(h);
    float minD = 1e9;
    float minT = t;
    bool hit = false;
    for (int i = 0; i < 64; i++) {
      if (float(i) >= uSteps) break;
      float d = map(ro + rd * t);
      if (d < minD) { minD = d; minT = t; }
      if (d < 0.002) { hit = true; break; }
      t += d;
      if (t > tFar) break;
    }
    // Rays that just graze the surface get partial coverage: a soft ~1.5px anti-aliased edge
    float edgeW = 1.5 / (uRes.y * uRadius);
    float cover = hit ? 1.0 : 1.0 - smoothstep(0.0, edgeW, minD);
    if (cover > 0.0) {
      vec4 s = shade(ro + rd * (hit ? t : minT), rd);
      col = mix(col, s.rgb, cover);
      alpha = mix(alpha, s.a, cover);
    }
  }

  alpha *= uAlpha;
  gl_FragColor = vec4(col * uAlpha, alpha);   // premultiplied
}
`;

const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export default function LiquidBubble({ stops, reveal }) {
  const canvasRef = useRef(null);
  const fallbackRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Lets CSS turn opaque panels into frosted glass only while the bubble is on the page
    document.documentElement.classList.add("has-liquid-bubble");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Start only once the page has loaded and the browser is idle, so the bubble never
    // competes with the initial render (keeps FCP/LCP/TBT clean)
    let teardown = null;
    let cancelled = false;
    let idleId = 0;
    let timer = 0;
    const begin = () => {
      if (!cancelled) teardown = setup();
    };
    const schedule = () => {
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(begin, { timeout: 2000 });
      else timer = setTimeout(begin, 300);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (idleId) window.cancelIdleCallback(idleId);
      clearTimeout(timer);
      teardown?.();
      document.documentElement.classList.remove("has-liquid-bubble");
    };

    function showFallback() {
      canvas.style.display = "none";
      fallbackRef.current.style.display = "block";
      return null;
    }

    function setup() {
      // Refuse software rendering (no GPU, e.g. PageSpeed's test machines or very old devices):
      // a raymarching shader there blocks the main thread for seconds, so show the CSS glow instead
      const gl = canvas.getContext("webgl", {
        premultipliedAlpha: true,
        antialias: false,
        alpha: true,
        failIfMajorPerformanceCaveat: true,
      });
      if (!gl) return showFallback();
      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      const renderer = dbg ? String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : "";
      if (/swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer)) return showFallback();
      const vs = compile(gl, gl.VERTEX_SHADER, VERT);
      const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
      if (!vs || !fs) return showFallback();
      const prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const aPos = gl.getAttribLocation(prog, "aPos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      const U = {};
      ["uRes", "uTime", "uPos", "uRadius", "uMouse", "uAlpha", "uSteps"].forEach(
        (n) => (U[n] = gl.getUniformLocation(prog, n))
      );
      gl.uniform1f(U.uSteps, isMobile ? 36 : 56);

      // Render below native resolution: the bubble is soft, so this is invisible but saves a lot of GPU
      const dprCap = isMobile ? 1 : 1.25;
      const resScale = isMobile ? 0.6 : 0.8;
      let width = 0, height = 0;
      function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, dprCap) * resScale;
        width = Math.round(window.innerWidth * dpr);
        height = Math.round(window.innerHeight * dpr);
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform2f(U.uRes, width, height);
        measure();
      }

      // Scroll anchors: where each stop's section sits in the page
      let anchors = [];
      function measure() {
        anchors = stops
          .map((s) => {
            const el = document.querySelector(s.selector);
            if (!el) return null;
            const top = el.getBoundingClientRect().top + window.scrollY;
            return { ...s, ...(isMobile && s.mobile), at: Math.max(0, top - window.innerHeight * 0.35) };
          })
          .filter(Boolean)
          .sort((a, b) => a.at - b.at);
      }

      function target() {
        if (!anchors.length) return { x: 0, y: 0, scale: 0, alpha: 0 };
        const y = window.scrollY;
        if (y <= anchors[0].at) return anchors[0];
        for (let i = 0; i < anchors.length - 1; i++) {
          const a = anchors[i], b = anchors[i + 1];
          if (y < b.at) {
            const t = smooth((y - a.at) / Math.max(1, b.at - a.at));
            return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), scale: lerp(a.scale, b.scale, t), alpha: lerp(a.alpha, b.alpha, t) };
          }
        }
        return anchors[anchors.length - 1];
      }

      const state = { ...target() };
      const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
      const onMouse = (e) => {
        mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
      };

      let raf = 0;
      let running = false;
      const start = performance.now();
      function draw(time) {
        const goal = target();
        const k = staticMode ? 1 : 0.08;
        state.x = lerp(state.x, goal.x, k);
        state.y = lerp(state.y, goal.y, k);
        state.scale = lerp(state.scale, goal.scale, k);
        state.alpha = lerp(state.alpha, goal.alpha, k);
        mouse.x = lerp(mouse.x, mouse.tx, 0.05);
        mouse.y = lerp(mouse.y, mouse.ty, 0.05);

        const aspect = width / height;
        const half = 0.5 * Math.min(aspect, 1);
        gl.uniform2f(U.uPos, state.x * 0.5 * aspect, -state.y * 0.5);
        gl.uniform1f(U.uRadius, Math.max(0.001, state.scale * half));
        gl.uniform2f(U.uMouse, mouse.x, mouse.y);
        gl.uniform1f(U.uAlpha, state.alpha);
        gl.uniform1f(U.uTime, reduceMotion ? 12.0 : (time - start) / 1000);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        if (state.alpha > 0.005) gl.drawArrays(gl.TRIANGLES, 0, 3);
        if (reveal) updateReveal(aspect, half);
      }

      // Bubble circle in CSS pixels vs. each reveal element's box
      function updateReveal(aspect, half) {
        const vw = window.innerWidth, vh = window.innerHeight;
        const cx = vw / 2 + (state.x * vw) / 2;
        const cy = vh / 2 + (state.y * vh) / 2;
        const r = state.scale * half * vh * 0.9;
        document.querySelectorAll(reveal).forEach((el) => {
          const b = el.getBoundingClientRect();
          const dx = cx - Math.max(b.left, Math.min(cx, b.right));
          const dy = cy - Math.max(b.top, Math.min(cy, b.bottom));
          const behind = state.alpha > 0.3 && dx * dx + dy * dy < r * r;
          if (el.classList.contains("bubble-behind") !== behind) el.classList.toggle("bubble-behind", behind);
        });
      }

      // If the device can't keep up (most of the first ~60 frames slower than 20fps),
      // stop animating and keep a still bubble that only follows the scroll
      let staticMode = reduceMotion;
      let last = 0, frames = 0, slow = 0;
      function loop(time) {
        draw(time);
        if (last) {
          frames++;
          if (time - last > 50) slow++;
          if (frames === 60 && slow > 30) {
            staticMode = true;
            pause();
            return;
          }
        }
        last = time;
        raf = requestAnimationFrame(loop);
      }
      function play() {
        if (running || staticMode) return;
        running = true;
        last = 0;
        raf = requestAnimationFrame(loop);
      }
      function pause() {
        running = false;
        cancelAnimationFrame(raf);
      }
      const onVisibility = () => (document.hidden ? pause() : play());
      // Without the animation loop (reduced motion / slow device): redraw the still bubble on scroll
      const onScroll = () => staticMode && requestAnimationFrame(draw);

      const ro = new ResizeObserver(measure);
      ro.observe(document.body);
      window.addEventListener("resize", resize);
      window.addEventListener("scroll", onScroll, { passive: true });
      if (!isMobile) window.addEventListener("mousemove", onMouse, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);

      resize();
      Object.assign(state, target());
      state.alpha = 0; // fade in rather than pop in
      draw(start);
      play();

      return () => {
        pause();
        ro.disconnect();
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("mousemove", onMouse);
        document.removeEventListener("visibilitychange", onVisibility);
        // Free GPU objects but keep the context: the canvas can be re-mounted (React dev
        // double-mount) and getContext() would hand back a lost context otherwise
        gl.deleteBuffer(buf);
        gl.deleteProgram(prog);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      };
    }
  }, [stops, reveal]);

  return (
    <>
      <canvas ref={canvasRef} className="liquid-bubble" aria-hidden="true" />
      <div ref={fallbackRef} className="liquid-bubble-fallback" aria-hidden="true" />
      <style>{`
        .liquid-bubble,
        .liquid-bubble-fallback {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          pointer-events: none;
        }
        .liquid-bubble-fallback {
          display: none;
          background: radial-gradient(circle at 50% 45%, rgba(255, 189, 74, 0.18) 0, rgba(255, 189, 74, 0.06) 22%, transparent 42%);
        }
      `}</style>
    </>
  );
}
