import Image from "next/image";

type Card = {
  num?: string;
  title: string;
  sub: string;
  href: string;
  img: string;
  wide?: boolean;
  tall?: boolean;
};

const cards: Card[] = [
  {
    num: "01",
    title: "Phonewear",
    sub: "Wallets, mounts & more",
    href: "/products?category=tech",
    img: "/categories/01-phonewear.webp",
  },
  {
    num: "02",
    title: "Awareness",
    sub: "Bracelets, pins & lanyards",
    href: "/products?category=silicone",
    img: "/categories/02-awareness.webp",
  },
  {
    num: "03",
    title: "Emblematic Metals",
    sub: "Coins, pins, key tags",
    href: "/products?category=emblems",
    img: "/categories/03-emblematic-metals.webp",
  },
  {
    num: "04",
    title: "Bauble Blink",
    sub: "Make your merch shine",
    href: "/products",
    img: "/categories/04-baubles.webp",
  },
  {
    wide: true,
    title: "The Margarita Clip",
    sub: "Make any drink a party",
    href: "/products?category=drinkware",
    img: "/categories/05-margarita-clip.webp",
  },
  {
    num: "07",
    title: "Acrylic",
    sub: "Frames, mirrors & plaques",
    href: "/products?category=acrylic",
    img: "/categories/07-acrylic.webp",
  },
  {
    num: "08",
    title: "Sunglasses",
    sub: "Trendy shades & accessories",
    href: "/products?category=sunglasses",
    img: "/categories/08-sunglasses.webp",
  },
  {
    num: "09",
    title: "Pantone Matched",
    sub: "Hit the swatch — every time",
    href: "#custom-sourcing",
    img: "/categories/09-pantone.webp",
  },
  {
    num: "10",
    title: "Socks",
    sub: "Foot merch that doesn't stink",
    href: "#custom-sourcing",
    img: "/categories/10-socks.webp",
  },
  {
    num: "11",
    title: "Packaging",
    sub: "Bags, boxes, tubes & more",
    href: "/products?category=packaging",
    img: "/categories/11-packaging.webp",
  },
  {
    wide: true,
    title: "Watches",
    sub: "Custom-branded timepieces for every wrist",
    href: "/products?category=watches",
    img: "/categories/06-watches.webp",
  },
  {
    num: "12",
    title: "Displays",
    sub: "LED signs, tin tackers & more",
    href: "/products",
    img: "/categories/12-displays.webp",
  },
  {
    num: "13",
    title: "Ice Molds & Bar Mats",
    sub: "Drink better",
    href: "/products?category=drinkware",
    img: "/categories/13-ice-molds.webp",
  },
  {
    num: "14",
    title: "For Him",
    sub: "Gifts & gear",
    href: "/products",
    img: "/categories/14-for-him.webp",
  },
  {
    num: "16",
    tall: true,
    title: "Cannabis Packaging & Merch",
    sub: "Compliant, custom, and on-brand. Boxes, exit bags, pre-roll tubes, displays — built for dispensary shelves and grower marketing alike.",
    href: "/products?category=cannabis",
    img: "/categories/16-cannabis.webp",
  },
  {
    num: "15",
    title: "For Her",
    sub: "Curated picks for every occasion",
    href: "/products",
    img: "/categories/15-for-her.webp",
  },
];

function Tile({ card }: { card: Card }) {
  const spanCls = card.wide
    ? "sm:col-span-2"
    : card.tall
      ? "sm:row-span-2"
      : "";
  const isFeature = card.wide || card.tall;
  const boxAspect = card.tall
    ? "aspect-[5/8] md:aspect-auto md:min-h-[640px]"
    : card.wide
      ? "aspect-[16/9]"
      : "aspect-[5/4]";
  return (
    <a
      href={card.href}
      className={`group block ${spanCls}`}
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-[var(--color-bone)] border border-[var(--color-ink)]/15 group-hover:border-[var(--color-brass)]/60 transition-colors ${boxAspect}`}
      >
        {/* Category photo fills the box edge-to-edge. Served straight from
           /public (unoptimized) — the files are already small WebPs, and this
           sidesteps the on-the-fly image optimizer so they load instantly and
           reliably as you scroll. */}
        <Image
          src={card.img}
          alt={card.title}
          fill
          unoptimized
          sizes={
            isFeature
              ? "(max-width: 640px) 100vw, 100vw"
              : "(max-width: 640px) 100vw, (max-width: 1600px) 50vw, 780px"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {/* Scrim at the top keeps the corner tag legible against bright photos */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent pointer-events-none"
        />

        {/* Top row: number + featured tag */}
        <div className="absolute top-5 left-5 right-5 md:top-7 md:left-7 md:right-7 flex items-start justify-between gap-3">
          {card.num ? (
            <span className="tag text-white/90">
              {card.num} <span className="text-white/50">/ 16</span>
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

      {/* Title + blurb live OUTSIDE the box, all-caps title styled like a
         page-link label — closer to Zero's product-card pattern. */}
      <div className="mt-5 md:mt-6">
        <h3
          className={`display uppercase leading-[1.05] tracking-[0.01em] group-hover:text-[var(--color-brass)] transition-colors ${
            isFeature
              ? "text-2xl md:text-4xl lg:text-5xl"
              : "text-xl md:text-2xl lg:text-[28px]"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`serif-italic mt-2 text-[var(--color-stone)] leading-snug ${
            isFeature
              ? "text-base md:text-lg max-w-[44ch]"
              : "text-sm md:text-base max-w-[34ch]"
          }`}
        >
          {card.sub}
        </p>
      </div>
    </a>
  );
}

export default function ProductCategories() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <h2 className="display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.86] tracking-[0.01em]">
              Product Categories
            </h2>
          </div>
          <a
            href="/products"
            className="tag link-underline self-start md:self-end whitespace-nowrap uppercase"
          >
            See all products →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
          {cards.map((c) => (
            <Tile key={c.title} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
