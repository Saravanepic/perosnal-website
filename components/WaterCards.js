"use client";
import { useEffect, useRef } from "react";

// "Watery" project cards: drop this inside a .nicolas_sm_portfolio section.
// - Each screenshot gets its own SVG turbulence + displacement filter. It ripples once as the
//   card scrolls into view and keeps flowing gently while hovered, then settles. The filter is
//   only attached while animating, so idle cards cost nothing.
// - Cards rise into view in a staggered wave, tilt slightly toward the cursor, and a gold sheen
//   sweeps across the glass frame on hover (CSS in globals.css under "Watery cards").
export default function WaterCards() {
  const svgRef = useRef(null);

  useEffect(() => {
    const section = svgRef.current?.closest(".nicolas_sm_portfolio");
    const list = section?.querySelector(".portfolio_in");
    if (!list) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const svg = svgRef.current;
    const NS = "http://www.w3.org/2000/svg";
    const uid = Math.random().toString(36).slice(2, 7);
    const cleanups = [];

    list.classList.add("water-ready");
    const cards = [...list.querySelectorAll(":scope > ul > li")];

    cards.forEach((li, i) => {
      li.style.setProperty("--wave-delay", `${(i % 3) * 120}ms`);
      const frame = li.querySelector(".image");
      const img = frame?.querySelector("img");
      if (!frame || !img) return;

      // Per-card filter
      const id = `water-${uid}-${i}`;
      const filter = document.createElementNS(NS, "filter");
      filter.setAttribute("id", id);
      filter.setAttribute("x", "-5%");
      filter.setAttribute("y", "-5%");
      filter.setAttribute("width", "110%");
      filter.setAttribute("height", "110%");
      const turb = document.createElementNS(NS, "feTurbulence");
      turb.setAttribute("type", "fractalNoise");
      turb.setAttribute("numOctaves", "2");
      turb.setAttribute("seed", String(i + 3));
      turb.setAttribute("baseFrequency", "0.008 0.022");
      turb.setAttribute("result", "noise");
      const disp = document.createElementNS(NS, "feDisplacementMap");
      disp.setAttribute("in", "SourceGraphic");
      disp.setAttribute("in2", "noise");
      disp.setAttribute("xChannelSelector", "R");
      disp.setAttribute("yChannelSelector", "G");
      disp.setAttribute("scale", "0");
      filter.append(turb, disp);
      svg.appendChild(filter);

      let raf = 0;
      let hovering = false;
      let level = 0; // current displacement strength
      let burst = 0; // extra one-off ripple strength (entrance)
      let t0 = performance.now();

      function frameStep(now) {
        const t = (now - t0) / 1000;
        const target = hovering ? 9 : 0;
        level += (target - level) * 0.08;
        burst *= 0.955;
        const scale = level + burst + (hovering ? Math.sin(t * 2.4) * 2 : 0);
        // Drifting frequencies make the surface "flow" rather than just wobble
        turb.setAttribute("baseFrequency", `${0.008 + Math.sin(t * 0.7) * 0.002} ${0.022 + Math.sin(t * 1.1) * 0.006}`);
        disp.setAttribute("scale", scale.toFixed(2));
        if (!hovering && level < 0.05 && burst < 0.05) {
          img.style.filter = "";
          raf = 0;
          return;
        }
        raf = requestAnimationFrame(frameStep);
      }
      function animate() {
        img.style.filter = `url(#${id})`;
        if (!raf) {
          t0 = performance.now();
          raf = requestAnimationFrame(frameStep);
        }
      }

      if (!reduceMotion) {
        // One ripple as the card arrives
        const onArrive = () => {
          burst = 22;
          animate();
        };
        li.addEventListener("water:enter", onArrive);
        cleanups.push(() => li.removeEventListener("water:enter", onArrive));

        if (canHover) {
          const onEnter = () => {
            hovering = true;
            animate();
          };
          const onLeave = () => {
            hovering = false;
            frame.style.setProperty("--rx", "0deg");
            frame.style.setProperty("--ry", "0deg");
          };
          const onMove = (e) => {
            const r = frame.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            frame.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
            frame.style.setProperty("--ry", `${(px * 8).toFixed(2)}deg`);
          };
          frame.addEventListener("mouseenter", onEnter);
          frame.addEventListener("mouseleave", onLeave);
          frame.addEventListener("mousemove", onMove);
          cleanups.push(() => {
            frame.removeEventListener("mouseenter", onEnter);
            frame.removeEventListener("mouseleave", onLeave);
            frame.removeEventListener("mousemove", onMove);
          });
        }
      }
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        img.style.filter = "";
        filter.remove();
      });
    });

    // Staggered wave entrance (+ ripple) when cards scroll into view
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const li = entry.target;
          li.classList.add("water-in");
          const delay = parseInt(li.style.getPropertyValue("--wave-delay")) || 0;
          setTimeout(() => li.dispatchEvent(new Event("water:enter")), delay + 250);
          io.unobserve(li);
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((li) => io.observe(li));

    return () => {
      io.disconnect();
      cleanups.forEach((fn) => fn());
      list.classList.remove("water-ready");
      cards.forEach((li) => li.classList.remove("water-in"));
    };
  }, []);

  return (
    <svg ref={svgRef} width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }} />
  );
}
