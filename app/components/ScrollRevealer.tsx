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

    const reveal = (el: HTMLElement) => el.classList.add("reveal-in");

    // No IntersectionObserver support → just show everything.
    if (typeof IntersectionObserver === "undefined") {
      sections.forEach(reveal);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            obs.unobserve(e.target);
          }
        }
      },
      // threshold 0 = reveal the moment ANY pixel of the section enters the
      // viewport. Using a fractional threshold (e.g. 0.12) breaks on sections
      // taller than the viewport: their max intersection ratio is
      // viewportHeight / sectionHeight, which for a tall grid never reaches
      // the threshold — so the section stays opacity:0 over the black page.
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((s) => obs.observe(s));

    // Safety net: never let a section stay hidden. If anything went wrong with
    // the observer, force-reveal everything shortly after mount.
    const fallback = window.setTimeout(() => sections.forEach(reveal), 3000);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
