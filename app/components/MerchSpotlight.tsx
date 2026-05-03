"use client";

import { useEffect, useRef, useState } from "react";

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
        <div
          className={`tag text-[var(--color-stone)] mb-10 md:mb-14 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          [002] What we make
        </div>

        <a
          href="#custom-sourcing"
          aria-label="Custom Sourcing — get merch your way"
          className={`group relative block overflow-hidden border border-[var(--color-ink)]/15 aspect-[5/3] md:aspect-[21/9] bg-[var(--color-bone-deep)] transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-[0.98]"
          }`}
          style={{
            transitionDuration: "1100ms",
            transitionDelay: inView ? "700ms" : "0ms",
          }}
        >
          {/* Backdrop — light blue gradient placeholder. Swap with bg-[url('/path.jpg')] bg-cover bg-center when you have art. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#7dd3fc] to-[#38bdf8]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60 mix-blend-screen"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.55), transparent 55%), radial-gradient(circle at 80% 70%, rgba(186,230,253,0.6), transparent 55%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(14,165,233,0.18) 100%)",
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
                <div className="display text-2xl md:text-4xl lg:text-5xl leading-[0.95] text-[#0e0d0b]">
                  Custom Sourcing
                </div>
                <div className="serif-italic mt-2 md:mt-3 text-sm md:text-base lg:text-lg text-[#0e0d0b]/80 group-hover:text-[var(--color-brass)] transition-colors">
                  Get merch your way
                </div>
                <span
                  aria-hidden="true"
                  className="inline-block mt-3 md:mt-4 tag text-[#0e0d0b]/70 group-hover:text-[var(--color-brass)] group-hover:translate-x-1 transition-all duration-300"
                >
                  Start a project →
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
