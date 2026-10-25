"use client";
import { useEffect, useState } from "react";
const Preloader = () => {
  // "loading" -> "preloaded" (fade out) -> "done" (unmounted by React, not DOM .remove())
  const [stage, setStage] = useState("loading");
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    );
    const timers = [];
    if (isMobile) {
      setStage("done");
    } else {
      timers.push(setTimeout(() => setStage("preloaded"), 800));
      timers.push(setTimeout(() => setStage("done"), 2000));
    }
    timers.push(
      setTimeout(() => document.body.classList.add("opened"), 3000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);
  if (stage === "done") return null;
  return (
    <div id="preloader" className={stage === "preloaded" ? "preloaded" : ""}>
      <div className="loader_line" />
    </div>
  );
};
export default Preloader;
