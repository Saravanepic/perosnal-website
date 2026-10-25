"use client";
import { useEffect, useRef, useState } from "react";

// Gold lights travelling along the header's lines: three along the full bottom edge
// (rounded corners included) and one on each divider. The SVG traces the real geometry,
// measured from the header, and the motion is a CSS stroke-dashoffset animation.
export default function HeaderLights() {
  const svgRef = useRef(null);
  const [g, setG] = useState(null);

  useEffect(() => {
    const content = svgRef.current?.parentElement;
    const header = content?.closest(".nicolas_sm_header");
    if (!content || !header) return;
    const measure = () => {
      const c = content.getBoundingClientRect();
      const logo = content.querySelector(".logo");
      const button = content.querySelector(".button");
      setG({
        w: c.width,
        h: c.height,
        r: parseFloat(getComputedStyle(content).borderBottomLeftRadius) || 0,
        left: logo ? logo.getBoundingClientRect().right - c.left : null,
        right: button ? button.getBoundingClientRect().left - c.left : null,
      });
    };
    measure();
    // Height and corner radius change when the header turns sticky ("opened") on scroll
    const ro = new ResizeObserver(measure);
    ro.observe(content);
    const mo = new MutationObserver(() => setTimeout(measure, 350));
    mo.observe(header, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  let edge = "";
  if (g) {
    const y = g.h - 0.5;
    const r = Math.min(g.r, g.h);
    edge = `M 0 ${y - r} A ${r} ${r} 0 0 0 ${r} ${y} L ${g.w - r} ${y} A ${r} ${r} 0 0 0 ${g.w} ${y - r}`;
  }

  return (
    <svg
      ref={svgRef}
      className="header-lights"
      width={g?.w || 0}
      height={g?.h || 0}
      aria-hidden="true"
    >
      {g && (
        <>
          <path className="hl hl-edge" d={edge} pathLength="300" />
          {g.left !== null && <path className="hl hl-down" d={`M ${g.left} 0 V ${g.h}`} pathLength="100" />}
          {g.right !== null && <path className="hl hl-up" d={`M ${g.right} ${g.h} V 0`} pathLength="100" />}
        </>
      )}
      <style>{`
        .header-lights {
          position: absolute;
          top: 0;
          left: 0;
          overflow: visible;
          pointer-events: none;
          z-index: 3;
          filter: drop-shadow(0 0 4px rgba(255, 189, 74, 0.9));
        }
        .header-lights .hl {
          fill: none;
          stroke: #ffbd4a;
          stroke-width: 1.6;
          stroke-linecap: round;
        }
        /* 3 lights per loop on the bottom edge (pattern repeats every 100 of 300 units) */
        .header-lights .hl-edge {
          stroke-dasharray: 22 78;
          animation: headerLightRun 9s linear infinite;
        }
        .header-lights .hl-down,
        .header-lights .hl-up {
          stroke-dasharray: 28 72;
          animation: headerLightRun 3.2s linear infinite;
        }
        .header-lights .hl-up {
          animation-delay: -1.6s;
        }
        @keyframes headerLightRun {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }
        @media (prefers-reduced-motion: reduce) {
          .header-lights {
            display: none;
          }
        }
      `}</style>
    </svg>
  );
}
