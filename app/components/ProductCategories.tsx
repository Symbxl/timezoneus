import Image from "next/image";

type Card = {
  num?: string;
  title: string;
  sub: string;
  href: string;
  cursor: string;
  img: string;
  wide?: boolean;
  tall?: boolean;
};

// Build a CSS `cursor:` value from an SVG body. Stroke is dark ink so the
// cursor reads against the bone background. These are placeholders — swap in
// brand-final line-art when ready.
function cur(body: string): string {
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none' stroke='%230e0d0b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>" +
    body +
    "</svg>";
  return `url("data:image/svg+xml;utf8,${svg}") 20 20, pointer`;
}

const CURSORS = {
  phone: cur(
    "<rect x='12' y='5' width='16' height='30' rx='3'/><line x1='17' y1='30' x2='23' y2='30'/>",
  ),
  bracelet: cur(
    "<circle cx='20' cy='20' r='12'/><line x1='8' y1='20' x2='32' y2='20'/>",
  ),
  coin: cur(
    "<circle cx='20' cy='20' r='13'/><path d='M20 12 L22 17 L27 17 L23 21 L24 26 L20 23 L16 26 L17 21 L13 17 L18 17 Z'/>",
  ),
  gem: cur(
    "<path d='M20 7 L30 17 L20 34 L10 17 Z'/><line x1='10' y1='17' x2='30' y2='17'/><line x1='15' y1='17' x2='20' y2='7'/><line x1='25' y1='17' x2='20' y2='7'/>",
  ),
  martini: cur(
    "<path d='M9 9 L31 9 L20 22 Z'/><line x1='20' y1='22' x2='20' y2='32'/><line x1='14' y1='32' x2='26' y2='32'/>",
  ),
  frame: cur(
    "<rect x='7' y='9' width='26' height='22' rx='1'/><rect x='12' y='14' width='16' height='12'/>",
  ),
  sunglasses: cur(
    "<circle cx='13' cy='22' r='6'/><circle cx='27' cy='22' r='6'/><path d='M19 22 Q20 20 21 22'/><line x1='7' y1='18' x2='4' y2='15'/><line x1='33' y1='18' x2='36' y2='15'/>",
  ),
  swatch: cur(
    "<rect x='10' y='7' width='14' height='26' rx='1'/><line x1='10' y1='20' x2='24' y2='20'/>",
  ),
  sock: cur(
    "<path d='M14 5 L14 22 L7 30 Q7 35 13 35 L20 35 Q25 35 27 30 L27 5 Z'/><line x1='14' y1='10' x2='27' y2='10'/>",
  ),
  box: cur(
    "<path d='M20 5 L34 12 L34 28 L20 35 L6 28 L6 12 Z'/><path d='M6 12 L20 19 L34 12'/><line x1='20' y1='19' x2='20' y2='35'/>",
  ),
  beer: cur(
    "<path d='M10 9 L10 32 Q10 35 13 35 L23 35 Q26 35 26 32 L26 9 Z'/><path d='M26 14 L32 14 Q35 14 35 17 L35 25 Q35 28 32 28 L26 28'/>",
  ),
  display: cur(
    "<rect x='5' y='9' width='30' height='20' rx='2'/><line x1='14' y1='34' x2='26' y2='34'/><line x1='20' y1='29' x2='20' y2='34'/>",
  ),
  ice: cur(
    "<rect x='9' y='12' width='20' height='20'/><line x1='9' y1='12' x2='14' y2='7'/><line x1='29' y1='12' x2='34' y2='7'/><line x1='14' y1='7' x2='34' y2='7'/><line x1='34' y1='7' x2='34' y2='27'/><line x1='29' y1='32' x2='34' y2='27'/>",
  ),
  tie: cur(
    "<path d='M16 6 L24 6 L26 13 L22 33 L18 33 L14 13 Z'/><line x1='16' y1='13' x2='24' y2='13'/>",
  ),
  heart: cur(
    "<path d='M20 33 C8 23 6 13 13 9 C17 7 20 11 20 14 C20 11 23 7 27 9 C34 13 32 23 20 33 Z'/>",
  ),
  cannabis: cur(
    "<path d='M20 6 L23 13 L20 20 L17 13 Z'/><path d='M20 13 L26 17 L23 24 L17 24 L14 17 Z'/><path d='M14 17 L8 23 L14 25'/><path d='M26 17 L32 23 L26 25'/><line x1='20' y1='20' x2='20' y2='34'/>",
  ),
  watch: cur(
    "<circle cx='20' cy='20' r='9'/><path d='M16 11 L15 5 L25 5 L24 11'/><path d='M16 29 L15 35 L25 35 L24 29'/><line x1='20' y1='20' x2='20' y2='15'/><line x1='20' y1='20' x2='24' y2='20'/>",
  ),
};

const cards: Card[] = [
  {
    num: "01",
    title: "Phonewear",
    sub: "Wallets, mounts & more",
    href: "/products?category=tech",
    cursor: CURSORS.phone,
    img: "/categories/01-phonewear.png",
  },
  {
    num: "02",
    title: "Awareness",
    sub: "Bracelets, pins & lanyards",
    href: "/products?category=silicone",
    cursor: CURSORS.bracelet,
    img: "/categories/02-awareness.png",
  },
  {
    num: "03",
    title: "Emblematic Metals",
    sub: "Coins, pins, key tags",
    href: "/products?category=emblems",
    cursor: CURSORS.coin,
    img: "/categories/03-emblematic-metals.png",
  },
  {
    num: "04",
    title: "Bauble Blink",
    sub: "Make your merch shine",
    href: "/products",
    cursor: CURSORS.gem,
    img: "/categories/04-baubles.png",
  },
  {
    wide: true,
    title: "The Margarita Clip",
    sub: "Make any drink a party",
    href: "/products?category=drinkware",
    cursor: CURSORS.martini,
    img: "/categories/05-margarita-clip.png",
  },
  {
    num: "07",
    title: "Acrylic",
    sub: "Frames, mirrors & plaques",
    href: "/products?category=acrylic",
    cursor: CURSORS.frame,
    img: "/categories/07-acrylic.png",
  },
  {
    num: "08",
    title: "Sunglasses",
    sub: "Trendy shades & accessories",
    href: "/products?category=sunglasses",
    cursor: CURSORS.sunglasses,
    img: "/categories/08-sunglasses.png",
  },
  {
    num: "09",
    title: "Pantone Matched",
    sub: "Hit the swatch — every time",
    href: "#custom-sourcing",
    cursor: CURSORS.swatch,
    img: "/categories/09-pantone.png",
  },
  {
    num: "10",
    title: "Socks",
    sub: "Foot merch that doesn't stink",
    href: "#custom-sourcing",
    cursor: CURSORS.sock,
    img: "/categories/10-socks.png",
  },
  {
    num: "11",
    title: "Packaging",
    sub: "Bags, boxes, tubes & more",
    href: "/products?category=packaging",
    cursor: CURSORS.box,
    img: "/categories/11-packaging.png",
  },
  {
    wide: true,
    title: "Watches",
    sub: "Custom-branded timepieces for every wrist",
    href: "/products?category=watches",
    cursor: CURSORS.watch,
    img: "/categories/06-watches.png",
  },
  {
    num: "12",
    title: "Displays",
    sub: "LED signs, tin tackers & more",
    href: "/products",
    cursor: CURSORS.display,
    img: "/categories/12-displays.png",
  },
  {
    num: "13",
    title: "Ice Molds & Bar Mats",
    sub: "Drink better",
    href: "/products?category=drinkware",
    cursor: CURSORS.ice,
    img: "/categories/13-ice-molds.png",
  },
  {
    num: "14",
    title: "For Him",
    sub: "Gifts & gear",
    href: "/products",
    cursor: CURSORS.tie,
    img: "/categories/14-for-him.png",
  },
  {
    num: "16",
    tall: true,
    title: "Cannabis Packaging & Merch",
    sub: "Compliant, custom, and on-brand. Boxes, exit bags, pre-roll tubes, displays — built for dispensary shelves and grower marketing alike.",
    href: "/products?category=cannabis",
    cursor: CURSORS.cannabis,
    img: "/categories/16-cannabis.png",
  },
  {
    num: "15",
    title: "For Her",
    sub: "Curated picks for every occasion",
    href: "/products",
    cursor: CURSORS.heart,
    img: "/categories/15-for-her.png",
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
      style={{ cursor: card.cursor }}
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-[var(--color-bone)] border border-[var(--color-ink)]/15 group-hover:border-[var(--color-brass)]/60 transition-colors ${boxAspect}`}
      >
        {/* Category photo fills the box edge-to-edge */}
        <Image
          src={card.img}
          alt={card.title}
          fill
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
