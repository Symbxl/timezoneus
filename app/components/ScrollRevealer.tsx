"use client";

import { useEffect } from "react";

// Cycle through these so consecutive sections enter from different directions.
const VARIANTS = ["reveal-rise", "reveal-left", "reveal-right", "reveal-zoom"];

export default function ScrollRevealer() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section:not(.no-reveal)"),
    );

    sections.forEach((s, i) => {
      s.classList.add("reveal-section", VARIANTS[i % VARIANTS.length]);
    });

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-in");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return null;
}
