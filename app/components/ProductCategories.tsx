type Card = {
  num?: string;
  icon: string;
  title: string;
  sub: string;
  href: string;
  wide?: boolean;
  tall?: boolean;
};

const cards: Card[] = [
  { num: "01", icon: "📱", title: "Phonewear", sub: "Wallets, mounts & more", href: "/products?category=tech" },
  { num: "02", icon: "💪", title: "Awareness", sub: "Bracelets, pins & lanyards", href: "/products?category=silicone" },
  { num: "03", icon: "🔑", title: "Emblematic Metals", sub: "Coins, pins, key tags", href: "/products?category=emblems" },
  { num: "04", icon: "💍", title: "Bauble Blink", sub: "Make your merch shine", href: "/products" },
  { wide: true, icon: "🍹", title: "The Margarita Clip", sub: "Make any drink a party", href: "/products?category=drinkware" },
  { num: "06", icon: "⌚", title: "Watches", sub: "The start of it all", href: "/products?category=watches" },
  { num: "07", icon: "🖼️", title: "Acrylic", sub: "Frames, mirrors & plaques", href: "/products?category=acrylic" },
  { num: "08", icon: "🕶️", title: "Sunglasses", sub: "Trendy shades & accessories", href: "/products?category=sunglasses" },
  { num: "09", icon: "🎨", title: "Pantone Matched", sub: "Hit the swatch — every time", href: "#custom-sourcing" },
  { num: "10", icon: "🧦", title: "Socks", sub: "Foot merch that doesn't stink", href: "#custom-sourcing" },
  { num: "11", icon: "📦", title: "Packaging", sub: "Bags, boxes, tubes & more", href: "/products?category=packaging" },
  { wide: true, icon: "🍺", title: "Boozie Hose", sub: "Everything you need to keep things flowing", href: "/products?category=drinkware" },
  { num: "12", icon: "📺", title: "Displays", sub: "LED signs, tin tackers & more", href: "/products" },
  { num: "13", icon: "🧊", title: "Ice Molds & Bar Mats", sub: "Drink better", href: "/products?category=drinkware" },
  { num: "14", icon: "🎁", title: "For Him", sub: "Gifts & gear", href: "/products" },
  { num: "16", tall: true, icon: "🌿", title: "Cannabis Packaging & Merch", sub: "Compliant, custom, and on-brand. Boxes, exit bags, pre-roll tubes, displays — built for dispensary shelves and grower marketing alike.", href: "/products?category=cannabis" },
  { num: "15", icon: "💝", title: "For Her", sub: "Curated picks for every occasion", href: "/products" },
];

function Tile({ card }: { card: Card }) {
  const spanCls = card.wide
    ? "sm:col-span-2"
    : card.tall
      ? "sm:row-span-2"
      : "";
  const isFeature = card.wide || card.tall;
  return (
    <a
      href={card.href}
      className={`tile group relative flex flex-col bg-[var(--color-bone)] border border-[var(--color-ink)]/15 hover:border-[var(--color-brass)]/60 transition-colors p-8 md:p-12 min-h-[320px] md:min-h-[420px] overflow-hidden ${spanCls}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className={`leading-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 ${
            isFeature ? "text-6xl md:text-8xl" : "text-5xl md:text-7xl"
          }`}
        >
          {card.icon}
        </span>
        {card.num && !isFeature ? (
          <span className="tag text-[var(--color-stone)]">
            {card.num} <span className="text-[var(--color-ink)]/30">/ 16</span>
          </span>
        ) : (
          <span className="tag text-[var(--color-brass)] uppercase tracking-[0.18em]">
            ✦ Featured
          </span>
        )}
      </div>

      <div className="mt-auto pt-10">
        <h3
          className={`display leading-[0.95] ${
            isFeature
              ? "text-4xl md:text-6xl lg:text-7xl"
              : "text-3xl md:text-4xl lg:text-[40px]"
          }`}
        >
          {card.title}
        </h3>
        <p
          className={`serif-italic mt-3 md:mt-4 text-[var(--color-stone)] leading-snug ${
            isFeature
              ? "text-lg md:text-xl max-w-[44ch]"
              : "text-base md:text-lg max-w-[34ch]"
          }`}
        >
          {card.sub}
        </p>
        <div className="mt-6 flex items-center gap-2 tag text-[var(--color-stone)] group-hover:text-[var(--color-brass)] transition-colors">
          <span>Browse</span>
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
    </a>
  );
}

export default function ProductCategories() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="tag text-[var(--color-stone)] mb-4">
              [003] Product categories
            </div>
            <h2 className="display text-5xl md:text-7xl lg:text-8xl leading-[0.86]">
              What we make.
            </h2>
          </div>
          <a
            href="/products"
            className="tag link-underline self-start md:self-end whitespace-nowrap"
          >
            See all products →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((c) => (
            <Tile key={c.title} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
