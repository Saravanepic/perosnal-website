"use client";
import { useEffect } from "react";
import { playClick } from "@/utility/clickSound";

// Header menu, "Let's talk", mobile menu and dock icons (the dock's sound toggle fades on its own)
const TARGETS =
  ".nicolas_sm_header .menu a, .nicolas_sm_header .button a, .nicolas_sa_mobile_menu a, .dock .dock-item:not(.dock-sound)";

// Plays a soft tick on menu clicks, only when the visitor has turned sound on in the dock
export default function ClickSounds() {
  useEffect(() => {
    const onPointerDown = (e) => {
      if (!e.target.closest?.(TARGETS)) return;
      let on = false;
      try {
        on = localStorage.getItem("ambient-sound") === "on";
      } catch {}
      if (on) playClick();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);
  return null;
}
