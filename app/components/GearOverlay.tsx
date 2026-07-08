"use client";

import { useEffect, useRef, useState } from "react";

/**
 * GearOverlay — three interlocking golden gears centered over the GearGallery,
 * built to match gears.png 1:1. Each gear is a cut-out ring (product images show
 * through the spokes), gold-metallic, with "GET IT YOUR WAY" engraved in blue
 * around the rim. The three gears counter-rotate like a real gear train and
 * scale-in the first time the section scrolls into view.
 */

const PHRASE = "GET IT YOUR WAY   •   ";
const TEXT_BLUE = "#15669e";

type GearSpec = {
  id: string;
  cx: number;
  cy: number;
  Rt: number; // tooth-tip radius
  teeth: number;
  dir: 1 | -1; // 1 = clockwise, -1 = counter-clockwise
  duration: number; // seconds per revolution
};

// Positions/sizes measured off gears.png (remapped into a 900×470 viewBox).
// Center gear is largest; the two neighbours mesh against it and counter-rotate.
const GEARS: GearSpec[] = [
  { id: "c", cx: 440, cy: 205, Rt: 190, teeth: 20, dir: 1, duration: 26 },
  { id: "l", cx: 185, cy: 275, Rt: 150, teeth: 16, dir: -1, duration: 20.8 },
  { id: "r", cx: 720, cy: 300, Rt: 140, teeth: 15, dir: -1, duration: 19.5 },
];

const pol = (cx: number, cy: number, r: number, a: number) =>
  `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;

/** Toothed outer ring as an even-odd annulus (teeth on the outside, hole in the middle). */
function ringPath(cx: number, cy: number, Rt: number, Rr: number, Rin: number, Z: number) {
  const step = (2 * Math.PI) / Z;
  let d = "";
  for (let i = 0; i < Z; i++) {
    const a = i * step - Math.PI / 2; // start at top
    const p1 = pol(cx, cy, Rr, a);
    const p2 = pol(cx, cy, Rt, a + step * 0.15);
    const p3 = pol(cx, cy, Rt, a + step * 0.35);
    const p4 = pol(cx, cy, Rr, a + step * 0.5);
    const p5 = pol(cx, cy, Rr, a + step); // root to next tooth
    d += `${i === 0 ? "M" : "L"}${p1} L${p2} L${p3} L${p4} L${p5} `;
  }
  d += "Z ";
  // inner circle (opposite winding) → cuts the middle out under even-odd
  d +=
    `M${(cx + Rin).toFixed(2)},${cy.toFixed(2)} ` +
    `A${Rin},${Rin} 0 1 0 ${(cx - Rin).toFixed(2)},${cy.toFixed(2)} ` +
    `A${Rin},${Rin} 0 1 0 ${(cx + Rin).toFixed(2)},${cy.toFixed(2)} Z`;
  return d;
}

/** Counter-clockwise circle so the engraved text reads upright along the bottom. */
function textCircle(cx: number, cy: number, r: number) {
  return (
    `M${cx.toFixed(2)},${(cy - r).toFixed(2)} ` +
    `A${r},${r} 0 1 0 ${cx.toFixed(2)},${(cy + r).toFixed(2)} ` +
    `A${r},${r} 0 1 0 ${cx.toFixed(2)},${(cy - r).toFixed(2)}`
  );
}

function Gear({ g }: { g: GearSpec }) {
  const { cx, cy, Rt, teeth, id } = g;
  const Rr = Rt * 0.86; // tooth root / ring outer
  const Rin = Rt * 0.64; // inner edge of gold ring
  const Rtext = Rt * 0.75;
  const hubR = Rt * 0.17;
  const holeR = Rt * 0.07;
  const spokeW = Rt * 0.085;
  const fs = Rt * 0.072;

  const circ = 2 * Math.PI * Rtext;
  const natural = PHRASE.length * fs * 0.52;
  const repeats = Math.max(2, Math.round(circ / natural));
  const label = PHRASE.repeat(repeats);

  const spokes = Array.from({ length: 6 }, (_, k) => (
    <rect
      key={k}
      x={cx - spokeW / 2}
      y={cy - Rin}
      width={spokeW}
      height={Rin - hubR + 2}
      rx={spokeW / 2}
      fill={`url(#gold-${id})`}
      stroke="#6b4d1c"
      strokeWidth={0.6}
      transform={`rotate(${k * 60} ${cx} ${cy})`}
    />
  ));

  return (
    <g
      style={{
        transformBox: "fill-box",
        transformOrigin: "center",
        animation: `spin-slow ${g.duration}s linear infinite`,
        animationDirection: g.dir === -1 ? "reverse" : "normal",
      }}
    >
      {/* toothed ring */}
      <path
        d={ringPath(cx, cy, Rt, Rr, Rin, teeth)}
        fillRule="evenodd"
        fill={`url(#gold-${id})`}
        stroke="#6b4d1c"
        strokeWidth={1.4}
      />
      {/* inner highlight bevel on the ring's inner edge */}
      <circle cx={cx} cy={cy} r={Rin} fill="none" stroke="#f7e7ad" strokeWidth={1.2} opacity={0.5} />
      {/* spokes */}
      {spokes}
      {/* hub */}
      <circle cx={cx} cy={cy} r={hubR} fill={`url(#gold-${id})`} stroke="#6b4d1c" strokeWidth={1.2} />
      <circle cx={cx} cy={cy} r={hubR * 0.62} fill="none" stroke="#f7e7ad" strokeWidth={1} opacity={0.5} />
      <circle cx={cx} cy={cy} r={holeR} fill="#4a3411" />
      {/* engraved rim text */}
      <defs>
        <path id={`tp-${id}`} d={textCircle(cx, cy, Rtext)} />
      </defs>
      <text
        fill={TEXT_BLUE}
        fontSize={fs}
        fontWeight={800}
        letterSpacing="0.02em"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        <textPath href={`#tp-${id}`} startOffset="0" textLength={circ} lengthAdjust="spacing">
          {label}
        </textPath>
      </text>
    </g>
  );
}

export default function GearOverlay() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
    >
      <div
        className="w-[min(74vw,1000px)] transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1) rotate(0deg)" : "scale(0.55) rotate(-35deg)",
        }}
      >
        <svg
          viewBox="0 0 900 470"
          className="w-full h-auto overflow-visible"
          style={{ filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.45))" }}
        >
          <defs>
            {GEARS.map((g) => (
              <linearGradient key={g.id} id={`gold-${g.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f6e6a6" />
                <stop offset="0.28" stopColor="#d8b45c" />
                <stop offset="0.52" stopColor="#a87d33" />
                <stop offset="0.74" stopColor="#e2c168" />
                <stop offset="1" stopColor="#8a6528" />
              </linearGradient>
            ))}
          </defs>
          {/* draw neighbours first, center gear on top (matches gears.png stacking) */}
          {[GEARS[1], GEARS[2], GEARS[0]].map((g) => (
            <Gear key={g.id} g={g} />
          ))}
        </svg>
      </div>
    </div>
  );
}
