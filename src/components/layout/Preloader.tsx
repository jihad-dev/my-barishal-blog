"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setFading(true);
    }, 350);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 650);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-zinc-950 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-11 w-11 animate-spin rounded-full border-4 border-teal-500/20 border-t-teal-600" />
        <p className="text-sm font-semibold tracking-wide text-teal-800 dark:text-teal-300">
          মাই বরিশাল
        </p>
      </div>
    </div>
  );
}