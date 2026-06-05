"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <button
        className={`btt-btn${visible ? " btt-btn--visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        type="button"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <style>{`
        .btt-btn {
          position: fixed;
          bottom: 30px;
          right: 20px;
          z-index: 8999;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
          transition: opacity 0.25s, transform 0.25s, background 0.2s, color 0.2s, border-color 0.2s;
        }
        .btt-btn--visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .btt-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }
        @media (max-width: 767px) {
          .btt-btn {
            bottom: 20px;
            right: 12px;
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </>
  );
}
