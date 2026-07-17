import Image from "next/image";
import GearOverlay from "./GearOverlay";

/**
 * GearGallery — a full-bleed lime-green wall of product photography built to
 * match examples.pdf. Each of the three rows is a single pre-composed strip
 * image (Stripone / striptwo / stripthree) whose tile gaps are transparent, so
 * the lime `#D9FC3B` shows through as the gaps + outer border. The rows scroll
 * continuously to the left like the "Trusted by" logo marquee: each row renders
 * its strip twice and animates translateX 0 → -50% (the shared `marquee`
 * keyframe in globals.css) for a seamless infinite loop.
 */

const LIME = "#D9FC3B";

type Strip = { src: string; width: number; height: number };

// Intrinsic pixel dimensions of each strip PNG (aspect ratio ≈ 5.74 : 1).
const STRIP_ONE: Strip = { src: "/Stripone.png", width: 7783, height: 1355 };
const STRIP_TWO: Strip = { src: "/striptwo.png", width: 7782, height: 1356 };
const STRIP_THREE: Strip = { src: "/stripthree.png", width: 7783, height: 1356 };

function StripImage({ strip, hidden }: { strip: Strip; hidden?: boolean }) {
  return (
    <Image
      src={strip.src}
      alt=""
      width={strip.width}
      height={strip.height}
      aria-hidden={hidden || undefined}
      sizes="(max-width: 768px) 900px, (max-width: 1280px) 1600px, 2200px"
      className="h-full w-auto max-w-none shrink-0"
    />
  );
}

function MarqueeRow({ strip, duration }: { strip: Strip; duration: number }) {
  return (
    <div className="group/row relative overflow-hidden h-[clamp(150px,24vw,290px)]">
      <div
        className="flex h-full w-max animate-[marquee_linear_infinite] motion-reduce:animate-none group-hover/row:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        <StripImage strip={strip} />
        <StripImage strip={strip} hidden />
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
        <MarqueeRow strip={STRIP_ONE} duration={58} />
        <MarqueeRow strip={STRIP_TWO} duration={72} />
        <MarqueeRow strip={STRIP_THREE} duration={64} />
      </div>
      <GearOverlay />
    </section>
  );
}
