"use client";
import { useEffect, useRef, useState } from "react";

const WA_NUMBER = "+919494962048";
const WA_MSG = encodeURIComponent("Hi Saravan, I'd like to connect with you!");
const LINKEDIN_URL = "https://www.linkedin.com/in/saravana-krishna/";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [showWa, setShowWa] = useState(true);
  const modalRef = useRef(null);
  const btnRef = useRef(null);

  // Toggle icon every 3 s
  useEffect(() => {
    const id = setInterval(() => setShowWa((v) => !v), 3000);
    return () => clearInterval(id);
  }, []);

  // Focus modal when opened
  useEffect(() => {
    if (open) {
      modalRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    btnRef.current?.focus();
  }

  return (
    <>
      {/* Floating button */}
      <button
        ref={btnRef}
        className="cw-btn"
        aria-label="Connect with me"
        onClick={() => setOpen(true)}
        type="button"
        style={{ "--cw-bg": showWa ? "#25d366" : "#0a66c2" }}
      >
        <span className={`cw-icon${showWa ? "" : " cw-icon--hidden"}`}>
          {/* WhatsApp SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.737 5.48 2.027 7.789L0 32l8.437-2.01A15.938 15.938 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.771-1.853l-.486-.289-5.01 1.194 1.218-4.876-.317-.5A13.257 13.257 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.902c-.397-.199-2.35-1.16-2.715-1.292-.364-.132-.629-.199-.893.199-.265.397-1.027 1.292-1.259 1.558-.232.265-.464.298-.861.1-.397-.199-1.676-.618-3.193-1.97-1.18-1.053-1.977-2.353-2.208-2.75-.232-.398-.025-.614.174-.812.178-.178.397-.464.596-.696.199-.232.265-.398.398-.663.132-.265.066-.497-.033-.696-.1-.199-.893-2.153-1.224-2.948-.322-.773-.649-.668-.893-.68l-.762-.013c-.265 0-.696.1-1.06.497-.364.398-1.39 1.359-1.39 3.313s1.423 3.843 1.622 4.108c.199.265 2.8 4.274 6.784 5.993.948.41 1.688.654 2.265.837.952.303 1.819.26 2.504.158.764-.114 2.35-.96 2.681-1.888.332-.928.332-1.724.232-1.888-.099-.165-.364-.265-.762-.464z"/>
          </svg>
        </span>
        <span className={`cw-icon${showWa ? " cw-icon--hidden" : ""}`}>
          {/* LinkedIn SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="cw-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Connect with me"
          tabIndex={-1}
          ref={modalRef}
        >
          <div className="cw-overlay" onClick={close} />
          <div className="cw-box">
            <button className="cw-close" aria-label="Close" onClick={close} type="button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <p className="cw-title">LET&apos;S CONNECT</p>
            <div className="cw-options">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                className="cw-option"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cw-option-icon cw-option-icon--wa">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.737 5.48 2.027 7.789L0 32l8.437-2.01A15.938 15.938 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.771-1.853l-.486-.289-5.01 1.194 1.218-4.876-.317-.5A13.257 13.257 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.902c-.397-.199-2.35-1.16-2.715-1.292-.364-.132-.629-.199-.893.199-.265.397-1.027 1.292-1.259 1.558-.232.265-.464.298-.861.1-.397-.199-1.676-.618-3.193-1.97-1.18-1.053-1.977-2.353-2.208-2.75-.232-.398-.025-.614.174-.812.178-.178.397-.464.596-.696.199-.232.265-.398.398-.663.132-.265.066-.497-.033-.696-.1-.199-.893-2.153-1.224-2.948-.322-.773-.649-.668-.893-.68l-.762-.013c-.265 0-.696.1-1.06.497-.364.398-1.39 1.359-1.39 3.313s1.423 3.843 1.622 4.108c.199.265 2.8 4.274 6.784 5.993.948.41 1.688.654 2.265.837.952.303 1.819.26 2.504.158.764-.114 2.35-.96 2.681-1.888.332-.928.332-1.724.232-1.888-.099-.165-.364-.265-.762-.464z"/>
                  </svg>
                </span>
                <span className="cw-option-text">
                  <strong>WhatsApp</strong>
                  <small>Chat with me directly</small>
                </span>
              </a>
              <a
                href={LINKEDIN_URL}
                className="cw-option"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cw-option-icon cw-option-icon--li">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <span className="cw-option-text">
                  <strong>LinkedIn</strong>
                  <small>View my profile &amp; connect</small>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cw-btn {
          position: fixed;
          bottom: 30px;
          left: 20px;
          z-index: 9000;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--cw-bg, #25d366);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          transition: background 0.4s, transform 0.2s, box-shadow 0.2s;
          padding: 0;
          color: #fff;
        }
        .cw-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 24px rgba(0,0,0,0.35);
        }
        .cw-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          transition: opacity 0.4s, transform 0.4s;
          opacity: 1;
          transform: scale(1);
        }
        .cw-icon--hidden {
          opacity: 0;
          transform: scale(0.7);
          pointer-events: none;
        }

        /* Modal overlay */
        .cw-modal {
          position: fixed;
          inset: 0;
          z-index: 9100;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0 0 100px 20px;
          outline: none;
        }
        .cw-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(2px);
        }

        /* Modal box */
        .cw-box {
          position: relative;
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 24px 20px 20px;
          width: 280px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
          animation: cw-slide-up 0.22s ease;
        }
        @keyframes cw-slide-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cw-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
        }
        .cw-close:hover {
          color: #fff;
          background: rgba(255,255,255,0.1);
        }

        .cw-title {
          font-size: 11px;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45);
          margin: 0 0 16px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .cw-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cw-option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.18s;
          background: rgba(255,255,255,0.04);
        }
        .cw-option:hover {
          background: rgba(255,255,255,0.1);
        }

        .cw-option-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #fff;
        }
        .cw-option-icon--wa  { background: #25d366; }
        .cw-option-icon--li  { background: #0a66c2; }

        .cw-option-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .cw-option-text strong {
          font-size: 14px;
          color: #fff;
          font-weight: 600;
        }
        .cw-option-text small {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
        }

        @media (max-width: 767px) {
          .cw-btn {
            width: 48px;
            height: 48px;
            bottom: 20px;
            left: 12px;
          }
          .cw-modal {
            padding: 0 0 84px 12px;
          }
          .cw-box {
            width: 260px;
          }
        }
      `}</style>
    </>
  );
}
