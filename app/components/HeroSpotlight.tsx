"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide =
  | { type: "video"; src: string; duration: number }
  | { type: "image"; src: string; duration: number };

const SLIDES: Slide[] = [
  { type: "image", src: "/1tz.png", duration: 4500 },
  { type: "image", src: "/2tz.png", duration: 4500 },
  { type: "image", src: "/3tz.png", duration: 4500 },
  { type: "image", src: "/4tz.png", duration: 4500 },
];

export default function HeroSpotlight() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(0);

  // Reveal on scroll
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

  // Auto-advance using each slide's own duration so video gets longer airtime
  useEffect(() => {
    const id = setTimeout(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      SLIDES[current].duration,
    );
    return () => clearTimeout(id);
  }, [current]);

  // Restart the video each time it becomes the active slide
  useEffect(() => {
    const slide = SLIDES[current];
    const video = videoRef.current;
    if (!video || slide.type !== "video") return;
    video.currentTime = 0;
    video.play().catch(() => {
      /* autoplay may be blocked — silent fail is fine */
    });
  }, [current]);

  return (
    <section
      ref={ref}
      className="px-0 md:px-6 pt-28 md:pt-32 pb-16 md:pb-20 flex items-center justify-center"
    >
      <div className="w-full max-w-[1800px]">
        <div
          className={`relative block overflow-hidden rounded-none md:rounded-3xl border-y md:border border-[var(--color-ink)]/15 aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] bg-[var(--color-bone-deep)] transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-[0.98]"
          }`}
          style={{
            transitionDuration: "1100ms",
            transitionDelay: inView ? "100ms" : "0ms",
          }}
        >
          {/* Dark fallback if any media is missing */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#1a1815] via-[#0e0d0b] to-[#3a3a2a]"
          />

          {/* Stacked slides — only the active one is opaque */}
          {SLIDES.map((slide, i) => {
            const visible = i === current;
            const opacityCls = visible ? "opacity-100" : "opacity-0";
            const baseCls = `absolute inset-0 transition-opacity duration-1000 ease-out ${opacityCls}`;
            if (slide.type === "video") {
              return (
                <video
                  key={slide.src}
                  ref={videoRef}
                  src={slide.src}
                  className={`${baseCls} w-full h-full object-cover`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/hero-poster.webp"
                />
              );
            }
            return (
              <Image
                key={slide.src}
                src={slide.src}
                alt=""
                fill
                sizes="(max-width: 1800px) 100vw, 1800px"
                quality={72}
                priority={i === 0}
                className={`${baseCls} object-cover`}
              />
            );
          })}

          {/* Dot indicators */}
          <div className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === current}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
