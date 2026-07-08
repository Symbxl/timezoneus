import Image from "next/image";
import GearOverlay from "./GearOverlay";

/**
 * GearGallery — a full-bleed lime-green wall of product photography built to
 * match gear.png. The three rows now scroll continuously to the left like the
 * "Trusted by" logo marquee: each row renders its tile set twice and animates
 * translateX 0 → -50% (the shared `marquee` keyframe in globals.css), giving a
 * seamless infinite loop. Tile widths keep the reference masonry rhythm
 * (narrow ≈ 120, medium ≈ 141, wide ≈ 215, relative to a row height of 137),
 * and the lime `#D9FC3B` shows through as the gaps + outer border.
 */

const LIME = "#D9FC3B";

type Tile = { src: string; grow: number };

const row1: Tile[] = [
  { src: "/categories/06-watches.webp", grow: 120 },
  { src: "/categories/13-ice-molds.webp", grow: 215 },
  { src: "/categories/04-baubles.webp", grow: 120 },
  { src: "/categories/01-phonewear.webp", grow: 215 },
  { src: "/categories/09-pantone.webp", grow: 120 },
  { src: "/categories/08-sunglasses.webp", grow: 141 },
];

const row2: Tile[] = [
  { src: "/categories/05-margarita-clip.webp", grow: 141 },
  { src: "/categories/12-displays.webp", grow: 216 },
  { src: "/categories/10-socks.webp", grow: 146 },
  { src: "/categories/14-for-him.webp", grow: 141 },
  { src: "/categories/02-awareness.webp", grow: 120 },
  { src: "/categories/15-for-her.webp", grow: 146 },
];

const row3: Tile[] = [
  { src: "/categories/11-packaging.webp", grow: 216 },
  { src: "/categories/07-acrylic.webp", grow: 119 },
  { src: "/categories/16-cannabis.webp", grow: 120 },
  { src: "/categories/03-emblematic-metals.webp", grow: 216 },
  { src: "/categories/09-pantone.webp", grow: 120 },
  { src: "/categories/13-ice-molds.webp", grow: 215 },
];

function Group({ tiles, hidden }: { tiles: Tile[]; hidden?: boolean }) {
  return (
    <div className="flex h-full shrink-0" aria-hidden={hidden || undefined}>
      {tiles.map((t, i) => (
        <a
          key={i}
          href="/products"
          tabIndex={hidden ? -1 : undefined}
          className="group relative block h-full shrink-0 overflow-hidden mr-[10px] sm:mr-[13px] md:mr-[16px]"
          style={{ aspectRatio: `${t.grow} / 137` }}
        >
          <Image
            src={t.src}
            alt=""
            fill
            sizes="(max-width: 768px) 45vw, 26vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </a>
      ))}
    </div>
  );
}

function MarqueeRow({ tiles, duration }: { tiles: Tile[]; duration: number }) {
  return (
    <div className="group/row relative overflow-hidden h-[clamp(150px,24vw,290px)]">
      <div
        className="flex h-full w-max animate-[marquee_linear_infinite] motion-reduce:animate-none group-hover/row:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        <Group tiles={tiles} />
        <Group tiles={tiles} hidden />
      </div>
    </div>
  );
}

export default function GearGallery() {
  return (
    <section
      id="gear"
      aria-label="Featured gear"
      className="relative w-full overflow-hidden"
      style={{ background: LIME }}
    >
      <div className="flex flex-col gap-[10px] py-[10px] sm:gap-[13px] sm:py-[13px] md:gap-[16px] md:py-[16px]">
        <MarqueeRow tiles={row1} duration={58} />
        <MarqueeRow tiles={row2} duration={72} />
        <MarqueeRow tiles={row3} duration={64} />
      </div>
      <GearOverlay />
    </section>
  );
}
