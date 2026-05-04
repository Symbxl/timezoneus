"use client";

import { useEffect, useState } from "react";

const SPECIALS = ["wave", "spin", "stretch", "jitter"] as const;
type Special = (typeof SPECIALS)[number];

export default function Hero() {
  const [active, setActive] = useState<Special | null>(null);

  useEffect(() => {
    let cancelled = false;
    let clearActive: ReturnType<typeof setTimeout> | undefined;

    const schedule = () => {
      // Wait 7–14s between specials so they feel like a surprise, not a tic.
      const wait = 7000 + Math.random() * 7000;
      const t = setTimeout(() => {
        if (cancelled) return;
        const next = SPECIALS[Math.floor(Math.random() * SPECIALS.length)];
        setActive(next);
        // Clear the class after the animation finishes (~1.5–2s + max stagger).
        clearActive = setTimeout(() => {
          if (cancelled) return;
          setActive(null);
          schedule();
        }, 2400);
      }, wait);
      // Allow cancellation
      clearActive = t;
    };

    // First special fires ~5s after page load (after merge animation settles).
    const first = setTimeout(schedule, 5000);

    return () => {
      cancelled = true;
      clearTimeout(first);
      if (clearActive) clearTimeout(clearActive);
    };
  }, []);

  return (
    <section
      className="no-reveal relative min-h-[78vh] md:min-h-[88vh] flex items-end pt-32 md:pt-44 pb-0 px-6 md:px-10 overflow-x-clip"
    >
      {/* Sprinkled white accents — absolute over the full section, behind everything */}
      <HeroAccents />

      <div className="mx-auto max-w-[1600px] relative w-full">
        <h1
          className="display leading-[0.84] tracking-[-0.04em] select-none whitespace-nowrap translate-y-10 md:translate-y-20"
          style={{ fontSize: "clamp(4.5rem, 18vw, 22rem)" }}
        >
          <span className="hero-merge-left">
            {"TIME".split("").map((ch, i) => (
              <span
                key={`t-${i}`}
                className={`hero-letter ${active ? `special-${active}` : ""}`}
                style={
                  {
                    "--float-delay": `${1600 + i * 180}ms`,
                    "--special-delay": `${i * 90}ms`,
                  } as React.CSSProperties
                }
              >
                {ch}
              </span>
            ))}
          </span>
          <span className="hero-merge-right">
            {"ZONE".split("").map((ch, i) => (
              <span
                key={`z-${i}`}
                className={`hero-letter ${active ? `special-${active}` : ""}`}
                style={
                  {
                    "--float-delay": `${1600 + (i + 4) * 180}ms`,
                    "--special-delay": `${(i + 4) * 90}ms`,
                  } as React.CSSProperties
                }
              >
                {ch}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </section>
  );
}

function HeroAccents() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none"
    >
      {/* Big soft glow — top-left, blurred radial */}
      <div
        className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Soft glow — top-center mid */}
      <div
        className="absolute top-2 left-1/3 w-[360px] h-[360px] rounded-full hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Soft glow — top-right */}
      <div
        className="absolute -top-10 right-0 w-[320px] h-[320px] rounded-full hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Filled white circles — synced 7.5s cycle (2.5s active, 5s gone) */}
      <div className="hero-circle-blink absolute top-1/3 left-2 md:left-4 w-52 h-52 md:w-[22rem] md:h-[22rem] rounded-full bg-white hidden md:block" />
      <div className="hero-circle-pop absolute -bottom-48 right-4 w-64 h-64 md:w-[28rem] md:h-[28rem] hidden md:block">
        <ClockDial />
      </div>

      {/* Cross / plus marks — concentrated up top */}
      <PlusMark className="absolute top-4 left-1/4 hidden md:block" />
      <PlusMark className="absolute top-20 right-1/4 hidden md:block" />
      <PlusMark className="absolute top-40 left-12 hidden md:block" />
      <PlusMark className="absolute top-1/3 right-1/3 hidden lg:block" />

      {/* Dotted grid — upper-right corner */}
      <div
        className="absolute top-6 right-1/2 w-32 h-20 hidden md:block"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
          opacity: 0.6,
        }}
      />

      {/* Vertical thin line — runs through the upper area */}
      <span className="absolute top-12 left-1 h-1/3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

    </div>
  );
}

function ClockDial() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full spin-slow">
      <circle
        cx="100"
        cy="100"
        r="98"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="0.6"
      />
      <circle
        cx="100"
        cy="100"
        r="86"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="0.4"
        strokeDasharray="1 4"
      />
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i * 6 * Math.PI) / 180;
        const r1 = 92;
        const r2 = i % 5 === 0 ? 80 : 86;
        const x1 = 100 + r1 * Math.sin(a);
        const y1 = 100 - r1 * Math.cos(a);
        const x2 = 100 + r2 * Math.sin(a);
        const y2 = 100 - r2 * Math.cos(a);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-ink)"
            strokeWidth={i % 5 === 0 ? 1.2 : 0.5}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function PlusMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative w-3 h-3 inline-block ${className}`}
      aria-hidden="true"
    >
      <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/30" />
      <span className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/30" />
    </span>
  );
}
