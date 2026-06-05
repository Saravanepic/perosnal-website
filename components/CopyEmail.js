"use client";
import { useState } from "react";

const EMAIL = "saravan1996.krishna@gmail.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="copy-email-wrap">
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <button
        className={`copy-email-btn${copied ? " copied" : ""}`}
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy email"}
        type="button"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
      {copied && <span className="copy-email-feedback">Copied!</span>}

      <style>{`
        .copy-email-wrap {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .copy-email-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 5px;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          padding: 3px 5px;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
          vertical-align: middle;
          flex-shrink: 0;
        }
        .copy-email-btn:hover {
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          background: rgba(255,255,255,0.06);
        }
        .copy-email-btn.copied {
          border-color: #4ade80;
          color: #4ade80;
        }
        .copy-email-feedback {
          font-size: 11px;
          color: #4ade80;
          font-weight: 600;
          letter-spacing: 0.04em;
          animation: ce-pop 0.15s ease;
        }
        @keyframes ce-pop {
          from { opacity: 0; transform: translateY(-3px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </span>
  );
}
