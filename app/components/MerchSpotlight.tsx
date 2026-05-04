"use client";

import { useEffect, useRef, useState } from "react";

const HEADLINE_WORDS = ["We", "make", "the", "merch", "you", "want."];

export default function MerchSpotlight() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="display text-7xl md:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.86] tracking-[-0.02em] mb-10 md:mb-14 max-w-[18ch]">
          {HEADLINE_WORDS.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="inline-block overflow-hidden align-bottom pb-[0.18em] mr-[0.18em]"
            >
              <span
                className={`inline-block transition-all ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  inView
                    ? "translate-y-0 scale-100 opacity-100 blur-0"
                    : "translate-y-[110%] scale-[1.12] opacity-0 blur-[10px]"
                }`}
                style={{
                  transitionDuration: "1500ms",
                  transitionDelay: inView ? `${200 + i * 220}ms` : "0ms",
                }}
              >
                {w}
              </span>
            </span>
          ))}
        </h2>

        <a
          href="#custom-sourcing"
          aria-label="Custom Sourcing — get merch your way"
          className={`group relative block overflow-hidden rounded-2xl md:rounded-3xl border border-[var(--color-ink)]/15 aspect-[5/3] md:aspect-[21/9] bg-[var(--color-bone-deep)] transition-all ease-[cubic-bezier(0.19,1,0.22,1)] ${
            inView
              ? "opacity-100 translate-y-0 scale-100 blur-0"
              : "opacity-0 translate-y-20 scale-[0.94] blur-[10px]"
          }`}
          style={{
            transitionDuration: "1600ms",
            transitionDelay: inView ? "1500ms" : "0ms",
            clipPath: inView
              ? "inset(0% 0% 0% 0% round var(--banner-radius, 1rem))"
              : "inset(0% 0% 100% 0% round var(--banner-radius, 1rem))",
            transitionProperty: "opacity, transform, filter, clip-path",
            cursor:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><defs><radialGradient id='l' cx='32%25' cy='32%25' r='78%25'><stop offset='0%25' stop-color='%23ecfccb'/><stop offset='40%25' stop-color='%23a3e635'/><stop offset='82%25' stop-color='%2365a30d'/><stop offset='100%25' stop-color='%233f6212'/></radialGradient><radialGradient id='leaf' cx='30%25' cy='30%25' r='80%25'><stop offset='0%25' stop-color='%2384cc16'/><stop offset='100%25' stop-color='%233f6212'/></radialGradient></defs><ellipse cx='20' cy='34' rx='11' ry='2' fill='%23000' opacity='0.18'/><ellipse cx='20' cy='22' rx='14.5' ry='13.5' fill='url(%23l)'/><ellipse cx='13.5' cy='14.5' rx='4' ry='2.4' fill='%23ffffff' opacity='0.55'/><ellipse cx='12' cy='13.5' rx='1.4' ry='0.9' fill='%23ffffff' opacity='0.85'/><path d='M22 9 Q27 3 32 5 Q29 11 23 11 Z' fill='url(%23leaf)' stroke='%233f6212' stroke-width='0.4'/><line x1='20' y1='10' x2='22.5' y2='8.5' stroke='%233f6212' stroke-width='1.6' stroke-linecap='round'/></svg>\") 20 22, pointer",
          }}
        >
          {/* Backdrop — drop a JPG/PNG at /public/merch-hero.jpg to use as the background.
             A dark gradient sits behind so the section still reads if the image is missing. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#1a1815] via-[#0e0d0b] to-[#3a3a2a]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/custom-sourcing.png')" }}
          />
          {/* Soft vignette over the photo so the white circle stays the focal point */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.55) 100%)",
            }}
          />

          {/* Centered circle — scales in after the banner reveals */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`relative aspect-square w-[58%] sm:w-[44%] md:w-[34%] lg:w-[28%] max-w-[420px] min-w-[220px] rounded-full bg-white/35 backdrop-blur-md border border-[#0e0d0b]/30 group-hover:border-[#0e0d0b] flex items-center justify-center text-center px-6 transition-all ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{
                transitionDuration: "900ms",
                transitionDelay: inView ? "1100ms" : "0ms",
              }}
            >
              <div
                className={`transition-opacity duration-700 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: inView ? "1700ms" : "0ms" }}
              >
                <div className="display text-3xl md:text-4xl lg:text-5xl leading-[0.92] text-[#0e0d0b] font-black tracking-tight">
                  Custom Sourcing
                </div>
                <div className="mt-2 md:mt-3 text-sm md:text-base lg:text-lg font-semibold text-[#0e0d0b]/85 group-hover:text-[var(--color-brass)] transition-colors">
                  Get merch your way
                </div>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center gap-2 mt-5 md:mt-6 px-5 py-2.5 md:px-6 md:py-3 border-2 border-[#0e0d0b] text-[#0e0d0b] font-semibold tracking-wide text-sm md:text-base group-hover:bg-[#0e0d0b] group-hover:text-white transition-all duration-300"
                >
                  Start a project
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
              {/* Soft outer glow ring on hover */}
              <span
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-[#0e0d0b]/0 group-hover:border-[#0e0d0b]/40 transition-colors"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
