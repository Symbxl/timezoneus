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

function Tile({ s }: { s: Series }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noreferrer"
      className="tile group relative block overflow-hidden bg-[#f3eee4] text-[#0e0d0b] aspect-[3/4]"
    >
      <div className="flex flex-col h-full">
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-b from-[#f3eee4] to-[#ebe3d3] overflow-hidden">
          <Image
            src={s.image}
            alt={s.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-4 md:p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="px-5 md:px-6 pt-4 pb-5 md:pb-6 border-t border-[#0e0d0b]/10">
          <div className="flex items-center justify-between gap-3">
            <div
              className="display text-xl md:text-2xl leading-tight"
              style={{ color: "#0e0d0b" }}
            >
              {s.name}
            </div>
            <span
              aria-hidden="true"
              className="tag text-[#6b655a] group-hover:text-[#b8893a] transition-colors shrink-0"
            >
              ↗
            </span>
          </div>
          <div className="serif-italic mt-1.5 text-sm md:text-[15px] text-[#6b655a] max-w-[34ch]">
            {s.blurb}
          </div>
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
              [001] Watch series
            </div>
            <h2 className="display text-6xl md:text-8xl lg:text-9xl leading-[0.86]">
              Built for brands
              <br />
              <span className="serif-italic lowercase">
                that take time seriously.
              </span>
            </h2>
          </div>
          <a
            href="/products?category=watches"
            className="tag link-underline self-start md:self-end whitespace-nowrap"
          >
            Browse all watches →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {series.map((s) => (
            <Tile key={s.name} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
