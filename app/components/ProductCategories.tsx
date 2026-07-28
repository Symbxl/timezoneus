import CategoryCard, { type Category } from "./CategoryCard";
import CategoryCursor from "./CategoryCursor";

const categories: Category[] = [
  {
    num: "01",
    title: "Phonewear",
    sub: "Wallets, mounts & more",
    href: "/products?category=tech",
    img: "/categories/01-phonewear.webp",
    cursor: "/cursors/1.png",
  },
  {
    num: "02",
    title: "Awareness",
    sub: "Bracelets, pins & lanyards",
    href: "/products?category=silicone",
    img: "/categories/02-awareness.webp",
    cursor: "/cursors/2.png",
  },
  {
    num: "03",
    title: "Emblematic Metals",
    sub: "Coins, pins, key tags",
    href: "/products?category=emblems",
    img: "/categories/03-emblematic-metals.webp",
    cursor: "/cursors/3.png",
  },
  {
    num: "04",
    title: "Bauble Blink",
    sub: "Make your merch shine",
    href: "/products",
    img: "/categories/04-baubles.webp",
    cursor: "/cursors/4.png",
  },
  {
    wide: true,
    title: "The Margarita Clip",
    sub: "Make any drink a party",
    href: "/products?category=drinkware",
    img: "/categories/05-margarita-clip.webp",
    cursor: "/cursors/5.png",
  },
  {
    num: "07",
    title: "Acrylic",
    sub: "Frames, mirrors & plaques",
    href: "/products?category=acrylic",
    img: "/categories/07-acrylic.webp",
    cursor: "/cursors/7.png",
  },
  {
    num: "08",
    title: "Sunglasses",
    sub: "Trendy shades & accessories",
    href: "/products?category=sunglasses",
    img: "/categories/08-sunglasses.webp",
    cursor: "/cursors/8.png",
  },
  {
    num: "09",
    title: "Pantone Matched",
    sub: "Hit the swatch — every time",
    href: "/products",
    img: "/categories/09-pantone.webp",
    cursor: "/cursors/9.png",
  },
  {
    num: "10",
    title: "Socks",
    sub: "Foot merch that doesn't stink",
    href: "/products",
    img: "/categories/10-socks.webp",
    cursor: "/cursors/10.png",
  },
  {
    num: "11",
    title: "Packaging",
    sub: "Bags, boxes, tubes & more",
    href: "/products?category=packaging",
    img: "/categories/11-packaging.webp",
    cursor: "/cursors/11.png",
  },
  {
    num: "12",
    title: "Displays",
    sub: "LED signs, tin tackers & more",
    href: "/products",
    img: "/categories/12-displays.webp",
    cursor: "/cursors/12.png",
  },
  {
    wide: true,
    title: "Watches",
    sub: "Custom-branded timepieces for every wrist",
    href: "/products?category=watches",
    img: "/categories/06-watches.webp",
    cursor: "/cursors/6.png",
  },
  {
    num: "13",
    title: "For Him",
    sub: "Gifts & gear",
    href: "/products",
    img: "/categories/14-for-him.webp",
    cursor: "/cursors/14.png",
  },
  {
    num: "14",
    title: "For Her",
    sub: "Curated picks for every occasion",
    href: "/products",
    img: "/categories/15-for-her.webp",
    cursor: "/cursors/15.png",
  },
  {
    num: "15",
    title: "Ice Molds & Bar Mats",
    sub: "Drink better",
    href: "/products?category=drinkware",
    img: "/categories/13-ice-molds.webp",
    cursor: "/cursors/13.png",
  },
  {
    num: "16",
    wide: true,
    title: "Cannabis Packaging & Merch",
    sub: "Compliant, custom, and on-brand. Boxes, exit bags, pre-roll tubes, displays — built for dispensary shelves and grower marketing alike.",
    href: "/products?category=cannabis",
    img: "/categories/16-cannabis.webp",
    cursor: "/cursors/16.png",
  },
];

export default function ProductCategories() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <h2 className="display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.86] tracking-[0.01em]">
            Product Categories
          </h2>
          <a
            href="/products"
            className="tag link-underline self-start md:self-end whitespace-nowrap uppercase"
          >
            See all products →
          </a>
        </div>

        <CategoryCursor>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
            {categories.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </CategoryCursor>
      </div>
    </section>
  );
}
