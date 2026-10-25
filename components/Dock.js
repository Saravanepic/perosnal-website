"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

// Same five links as the header menu
const items = [
  {
    title: "Home",
    href: "/",
    icon: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
      </>
    ),
  },
  {
    title: "About",
    href: "/about",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
      </>
    ),
  },
  {
    title: "Service",
    href: "/service",
    icon: (
      <>
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </>
    ),
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        <line x1="3" y1="13" x2="21" y2="13" />
      </>
    ),
  },
  {
    title: "Agencies",
    href: "/agencies",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M16.5 14.2c2.9.3 5 2.4 5 5.3" />
      </>
    ),
  },
];

const BASE = 48; // icon size in px at rest
const MAX_SCALE = 1.6; // size of the icon right under the cursor
const RANGE = 140; // px from the cursor where icons still grow

export default function Dock() {
  const pathName = usePathname();
  const [mouseX, setMouseX] = useState(null);
  const itemRefs = useRef([]);

  function sizeFor(i) {
    const el = itemRefs.current[i];
    if (mouseX === null || !el) return BASE;
    const rect = el.getBoundingClientRect();
    const dist = Math.abs(mouseX - (rect.left + rect.width / 2));
    const t = Math.max(0, 1 - dist / RANGE);
    return BASE * (1 + (MAX_SCALE - 1) * t * t);
  }

  return (
    <>
      <nav
        className="dock"
        aria-label="Site navigation"
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => setMouseX(null)}
      >
        <ul>
          {items.map((item, i) => {
            const active =
              item.href === "/" ? pathName === "/" : pathName.startsWith(item.href);
            const size = sizeFor(i);
            return (
              <li key={item.href} ref={(el) => (itemRefs.current[i] = el)}>
                <Link
                  href={item.href}
                  className="dock-item"
                  aria-label={item.title}
                  aria-current={active ? "page" : undefined}
                  style={{ width: size, height: size }}
                >
                  <span className="dock-label">{item.title}</span>
                  <span className="dock-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </svg>
                  </span>
                </Link>
                <span className={`dock-dot${active ? " dock-dot--active" : ""}`} />
              </li>
            );
          })}
        </ul>
      </nav>

      <style>{`
        .dock {
          position: fixed;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 8998;
          padding: 8px 10px 6px;
          border-radius: 24px;
          background: rgba(23, 24, 24, 0.85);
          border: 1px solid #343434;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
        }
        .dock ul {
          display: flex;
          align-items: flex-end;
          /* Fixed shelf height (icon + dot) so magnified icons rise above the tray like macOS */
          height: ${BASE + 8}px;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .dock li {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .dock-item {
          position: relative;
          display: block;
          transition: width 0.12s ease-out, height 0.12s ease-out;
        }
        .dock-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 30%;
          background: #1f2020;
          border: 1px solid #343434;
          color: #fff;
          transition: color 0.2s, border-color 0.2s, background-color 0.2s;
        }
        .dock-icon svg {
          width: 50%;
          height: 50%;
        }
        .dock-item:hover .dock-icon {
          color: #ffbd4a;
          border-color: #ffbd4a;
        }
        .dock-item[aria-current="page"] .dock-icon {
          color: #ffbd4a;
        }
        .dock-item:active .dock-icon {
          background: #171818;
        }
        .dock-label {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          padding: 5px 12px;
          border-radius: 8px;
          background: #171818;
          border: 1px solid #343434;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s, transform 0.15s;
        }
        .dock-label::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #343434;
        }
        .dock-item:hover .dock-label,
        .dock-item:focus-visible .dock-label {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .dock-item:focus-visible {
          outline: none;
        }
        .dock-item:focus-visible .dock-icon {
          border-color: #ffbd4a;
        }
        .dock-dot {
          width: 4px;
          height: 4px;
          margin-top: 4px;
          border-radius: 50%;
          background: transparent;
        }
        .dock-dot--active {
          background: #ffbd4a;
        }
        /* Keep the footer's last row clear of the dock */
        .nicolas_sm_wrapper_all {
          padding-bottom: 90px;
        }
        @media (prefers-reduced-motion: reduce) {
          .dock-item {
            transition: none;
          }
        }
        @media (max-width: 767px) {
          .dock {
            bottom: 12px;
            padding: 6px 8px 4px;
            border-radius: 18px;
          }
          .dock ul {
            height: 46px;
            gap: 6px;
          }
          .dock-item {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </>
  );
}
