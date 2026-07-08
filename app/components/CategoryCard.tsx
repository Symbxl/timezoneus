import Image from "next/image";

export type Category = {
  num?: string;
  title: string;
  sub: string;
  href: string;
  img: string;
  wide?: boolean;
  tall?: boolean;
  /** Illustrated icon shown as the mouse cursor while hovering this card. */
  cursor?: string;
};

export default function CategoryCard({ category }: { category: Category }) {
  const { num, title, sub, href, img, wide, tall, cursor } = category;
  const isFeature = wide || tall;

  const spanClass = wide ? "sm:col-span-2" : tall ? "sm:row-span-2" : "";
  const aspectClass = tall
    ? "aspect-[5/8] md:aspect-auto md:min-h-[640px]"
    : wide
      ? "aspect-[16/9]"
      : "aspect-[5/4]";

  return (
    <a href={href} data-cursor={cursor} className={`group block ${spanClass}`}>
      <div
        className={`relative overflow-hidden rounded-3xl bg-[var(--color-bone)] border border-[var(--color-ink)]/15 group-hover:border-[var(--color-brass)]/60 transition-colors ${aspectClass}`}
      >
        {/* Category photo fills the box edge-to-edge. Served straight from
            /public (unoptimized) — the files are already small WebPs, and this
            sidesteps the on-the-fly image optimizer so they load instantly. */}
        <Image
          src={img}
          alt={title}
          fill
          unoptimized
          sizes={
            isFeature
              ? "100vw"
              : "(max-width: 640px) 100vw, (max-width: 1600px) 50vw, 780px"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {/* Scrim keeps the corner tag legible against bright photos */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent pointer-events-none"
        />

        {/* Corner tag: number, or a "Featured" flag for the wide/tall cards */}
        <div className="absolute top-5 left-5 right-5 md:top-7 md:left-7 md:right-7 flex items-start justify-between gap-3">
          {num ? (
            <span className="tag text-white/90">
              {num} <span className="text-white/50">/ 16</span>
            </span>
          ) : (
            <span className="tag text-[var(--color-brass)] uppercase tracking-[0.18em] drop-shadow">
              ✦ Featured
            </span>
          )}
        </div>

        {/* Brass accent bar — slides down the left edge on hover */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-brass)] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Title + blurb live outside the box */}
      <div className="mt-5 md:mt-6">
        <h3
          className={`display uppercase leading-[1.05] tracking-[0.01em] group-hover:text-[var(--color-brass)] transition-colors ${
            isFeature
              ? "text-2xl md:text-4xl lg:text-5xl"
              : "text-xl md:text-2xl lg:text-[28px]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`serif-italic mt-2 text-[var(--color-stone)] leading-snug ${
            isFeature
              ? "text-base md:text-lg max-w-[44ch]"
              : "text-sm md:text-base max-w-[34ch]"
          }`}
        >
          {sub}
        </p>
      </div>
    </a>
  );
}
