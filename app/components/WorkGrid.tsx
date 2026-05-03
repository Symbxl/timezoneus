import Image from "next/image";

type Series = {
  name: string;
  blurb: string;
  href: string;
  image: string;
};

const series: Series[] = [
  {
    name: "Executive Series",
    blurb: "Boardroom-grade cases with leather bands. The flagship line.",
    href: "https://www.timezoneus.com/category/executive-series",
    image: "/series/Executive-Series.jpg",
  },
  {
    name: "Digi Clips",
    blurb: "Carabiner-clipped digitals built for the field.",
    href: "https://www.timezoneus.com/category/digi-clipz",
    image: "/series/Digi-Clipz.jpg",
  },
  {
    name: "Rectangle Series",
    blurb: "Tank-style rectangular cases with a vintage edge.",
    href: "https://www.timezoneus.com/category/rectangle-series",
    image: "/series/Rectangle-Series.jpg",
  },
  {
    name: "Sapphire Series",
    blurb: "Scratch-resistant sapphire crystals on signature movements.",
    href: "https://www.timezoneus.com/category/sapphire-series",
    image: "/series/Sapphire-Series.jpg",
  },
  {
    name: "Swiss Series",
    blurb: "Precision Swiss-style movements in a classic round profile.",
    href: "https://www.timezoneus.com/category/swiss-series",
    image: "/series/Swiss-Series.jpg",
  },
  {
    name: "Tahoe Series",
    blurb: "Sport-rugged bezels and outdoor reliability.",
    href: "https://www.timezoneus.com/category/tahoe-series",
    image: "/series/Tahoe-Series.jpg",
  },
  {
    name: "Union Made Watches",
    blurb: "Made in the USA. Union-shop assembled.",
    href: "https://www.timezoneus.com/category/union-made-watches",
    image: "/series/Union-Made-Watches.jpg",
  },
  {
    name: "Value & Sport Watches",
    blurb: "Everyday silicone-strap sport pieces, priced for promotion.",
    href: "https://www.timezoneus.com/category/value-sport-watches",
    image: "/series/Value-Sport-Watches.jpg",
  },
];

function Tile({ s, index }: { s: Series; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noreferrer"
      className="tile group relative block overflow-hidden bg-[#0a0a0a] text-white border border-white/10 hover:border-[#d4a44a]/70 transition-all duration-500"
    >
      <div className="flex flex-row items-stretch h-full min-h-[220px] md:min-h-[280px]">
        {/* Image column — photo fills the box edge-to-edge */}
        <div className="relative w-[42%] sm:w-[40%] shrink-0 overflow-hidden">
          <Image
            src={s.image}
            alt={s.name}
            fill
            sizes="(max-width: 1024px) 40vw, 22vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </div>

        {/* Content column — black with editorial typography */}
        <div className="relative flex-1 flex flex-col justify-between p-6 md:p-8 overflow-hidden">
          <div className="flex items-start justify-between gap-3">
            <span className="display text-3xl md:text-4xl leading-none text-white/35 group-hover:text-[#d4a44a] transition-colors">
              {num}
            </span>
            <span className="tag text-white/45 uppercase tracking-[0.18em]">
              Watch series
            </span>
          </div>

          <div className="mt-auto pt-6">
            <h3 className="display text-2xl md:text-[28px] lg:text-[32px] leading-[0.95] text-white">
              {s.name}
            </h3>
            <p className="serif-italic mt-2 text-[15px] md:text-base text-white/55 max-w-[36ch] leading-snug">
              {s.blurb}
            </p>

            <div className="mt-5 md:mt-6 flex items-center gap-3 tag text-white/60 group-hover:text-[#d4a44a] transition-colors">
              <span>View series</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>

          {/* Brass accent bar — slides down the right edge of the text panel on hover */}
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#d4a44a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
          />
          {/* Faint number watermark in the bottom-right on hover */}
          <span
            aria-hidden="true"
            className="absolute -right-3 -bottom-12 display text-[12rem] leading-none text-[#d4a44a]/0 group-hover:text-[#d4a44a]/[0.06] transition-colors duration-700 select-none pointer-events-none"
          >
            {num}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function WorkGrid() {
  return (
    <section id="work" className="px-6 md:px-10 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="tag text-[var(--color-stone)] mb-4">
              [001] Watch series · 08 collections
            </div>
            <h2 className="display text-6xl md:text-8xl lg:text-9xl leading-[0.86]">
              Built for brands
            </h2>
          </div>
          <a
            href="/products?category=watches"
            className="tag link-underline self-start md:self-end whitespace-nowrap"
          >
            Browse all watches →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {series.map((s, i) => (
            <Tile key={s.name} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
