"use client";

import { useEffect, useRef, useState } from "react";

type Service = {
  title: string;
  blurb: string;
  href: string;
  Icon: () => React.ReactElement;
};

function PantoneIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
      <rect
        x="6"
        y="14"
        width="22"
        height="36"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="6"
        y1="34"
        x2="28"
        y2="34"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="36"
        y="22"
        width="22"
        height="20"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="17"
        y="29"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="6"
        fill="currentColor"
        opacity="0.7"
      >
        286C
      </text>
      <text
        x="17"
        y="45"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="6"
        fill="currentColor"
        opacity="0.7"
      >
        1797C
      </text>
    </svg>
  );
}

function PackagingIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
      <path
        d="M32 8 L56 20 L56 44 L32 56 L8 44 L8 20 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 20 L32 32 L56 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line
        x1="32"
        y1="32"
        x2="32"
        y2="56"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="20"
        y1="14"
        x2="44"
        y2="26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        opacity="0.7"
      />
    </svg>
  );
}

function EmblematicsIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
      <circle
        cx="32"
        cy="28"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="32"
        cy="28"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M14 44 L20 60 L26 52 L32 58 L38 52 L44 60 L50 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text
        x="32"
        y="32"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="14"
        fill="currentColor"
      >
        TZ
      </text>
    </svg>
  );
}

function SocksIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
      <path
        d="M22 8 L22 30 L12 44 L12 54 Q12 58 16 58 L30 58 Q34 58 36 54 L42 42 L42 8 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line
        x1="22"
        y1="14"
        x2="42"
        y2="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="22"
        y1="20"
        x2="42"
        y2="20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <line
        x1="22"
        y1="26"
        x2="42"
        y2="26"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

const services: Service[] = [
  {
    title: "Pantone Matching",
    blurb:
      "Match your brand's exact color across every piece. We hit the swatch — every time.",
    href: "#custom-sourcing",
    Icon: PantoneIcon,
  },
  {
    title: "Custom Packaging",
    blurb:
      "Boxes, sleeves, slipcases, gift sets — engineered to fit the product and tell the story.",
    href: "#custom-packaging",
    Icon: PackagingIcon,
  },
  {
    title: "Custom Emblematics",
    blurb:
      "Lapel pins, medallions, coins, plaques. Cast, struck, and finished in-house.",
    href: "/products?category=emblems",
    Icon: EmblematicsIcon,
  },
  {
    title: "Socks",
    blurb:
      "Knit-in graphics, custom yarn, full-cuff patterns. Crew, ankle, no-show — we do them all.",
    href: "#custom-sourcing",
    Icon: SocksIcon,
  },
];

function Card({
  s,
  index,
  inView,
}: {
  s: Service;
  index: number;
  inView: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");
  // Stagger left → right on enter, right → left on exit so the wave reverses.
  const enterDelay = 250 + index * 220;
  const exitDelay = (services.length - 1 - index) * 120;
  return (
    <a
      href={s.href}
      style={{
        transitionDelay: `${inView ? enterDelay : exitDelay}ms`,
        transitionDuration: inView ? "1400ms" : "900ms",
      }}
      className={`tile group relative flex flex-col h-full bg-white text-black border border-black/10 hover:border-[var(--color-brass)] p-7 md:p-9 min-h-[400px] md:min-h-[460px] overflow-hidden transition-all ease-[cubic-bezier(0.19,1,0.22,1)] ${
        inView
          ? "opacity-100 translate-y-0 scale-100 rotate-0 blur-0"
          : "opacity-0 translate-y-32 scale-[0.85] -rotate-2 blur-md"
      }`}
    >
      {/* Top row: big number + service tag */}
      <div className="flex items-start justify-between gap-4">
        <span className="display text-6xl md:text-7xl leading-none text-[var(--color-stone)] group-hover:text-[var(--color-brass)] transition-colors">
          {num}
        </span>
        <span className="tag text-[var(--color-stone)] uppercase tracking-[0.16em] mt-2">
          Service
        </span>
      </div>

      {/* Icon — fades up & in slightly on hover */}
      <div className="flex-1 flex items-center justify-center my-6 md:my-8">
        <div className="w-20 h-20 md:w-24 md:h-24 text-[var(--color-stone)] group-hover:text-[var(--color-brass)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ease-out">
          <s.Icon />
        </div>
      </div>

      {/* Title + blurb */}
      <div>
        <h3 className="display text-2xl md:text-[28px] leading-[0.95]">
          {s.title}
        </h3>
        <p className="serif-italic mt-3 text-[15px] md:text-base text-[var(--color-stone)] max-w-[34ch] leading-snug">
          {s.blurb}
        </p>
        <div className="mt-5 flex items-center gap-2 tag text-[var(--color-stone)] group-hover:text-[var(--color-brass)] transition-colors">
          <span>Learn more</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>

      {/* Brass accent bar — slides down the left edge on hover */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-brass)] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
      />
      {/* Faint number-watermark in background — only on hover */}
      <span
        aria-hidden="true"
        className="absolute -right-4 -bottom-12 display text-[14rem] leading-none text-[var(--color-brass)]/0 group-hover:text-[var(--color-brass)]/[0.07] transition-colors duration-700 select-none pointer-events-none"
      >
        {num}
      </span>
    </a>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="no-reveal px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-none">
            <h2
              className={`display leading-[0.86] whitespace-nowrap transition-all ease-[cubic-bezier(0.19,1,0.22,1)] ${
                inView
                  ? "opacity-100 translate-x-0 scale-100 blur-0"
                  : "opacity-0 -translate-x-40 scale-95 blur-[14px]"
              }`}
              style={{
                fontSize: "clamp(2rem, 11vw, 13rem)",
                transitionDuration: inView ? "1700ms" : "1100ms",
              }}
            >
              Done in-house.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <Card key={s.title} s={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
