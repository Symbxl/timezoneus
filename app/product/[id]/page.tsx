import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Nav from "../../components/Nav";
import {
  CATEGORY_LABEL,
  PRODUCTS,
  findProductById,
  generatedBlurb,
  productId,
  productImageUrl,
  productSpecs,
  similarProducts,
} from "../../products/products-data";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  // Pre-render every product page at build time.
  return PRODUCTS.map((p) => ({ id: productId(p) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = findProductById(id);
  if (!p) return { title: "Product not found — Time Zone US" };
  return {
    title: `${p.name} (${p.sku}) — Time Zone US`,
    description: generatedBlurb(p),
    openGraph: {
      title: `${p.name} — Time Zone US`,
      description: generatedBlurb(p),
      images: [{ url: productImageUrl(p, "Large") }],
      type: "website",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const product = findProductById(id);
  if (!product) notFound();

  const cat = CATEGORY_LABEL[product.category];
  const blurb = generatedBlurb(product);
  const similar = similarProducts(product, 4);
  const specs = productSpecs(product);

  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-20 max-w-[1600px] mx-auto">
        <div className="tag text-[var(--color-stone)] mb-8 flex items-center gap-2">
          <Link href="/products" className="link-underline">
            / Products
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href={`/products?category=${product.category}`}
            className="link-underline"
          >
            {cat}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image column */}
          <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-[#f6f0e3] via-[#e9dfc8] to-[#cdbf9f] border border-[var(--color-ink)]/15">
            <Image
              src={productImageUrl(product, "Large")}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={92}
              className="object-contain p-6 md:p-10"
            />
          </div>

          {/* Detail column */}
          <div>
            <div className="tag text-[var(--color-stone)] uppercase tracking-[0.16em] mb-3">
              {cat}
            </div>
            <h1 className="display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              {product.name}
            </h1>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 max-w-[520px] border-y border-[var(--color-ink)]/15 py-5">
              <div>
                <div className="tag text-[var(--color-stone)] mb-1">SKU</div>
                <div className="font-mono text-base">{product.sku}</div>
              </div>
              <div>
                <div className="tag text-[var(--color-stone)] mb-1">
                  Category
                </div>
                <div className="text-base">{cat}</div>
              </div>
              <div className="col-span-2">
                <div className="tag text-[var(--color-stone)] mb-1">Pricing</div>
                <div className="text-base">
                  Custom — request a quote with your run size, branding, and
                  target landing date.
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg md:text-xl leading-snug text-[var(--color-ink-soft)] max-w-[60ch]">
              {blurb}
            </p>

            <p className="mt-4 text-sm text-[var(--color-stone)] max-w-[60ch] leading-relaxed">
              Imprint, color matching, packaging, and quantity all flexible.
              Most programs run 12–18 weeks brief-to-doorstep; rush options
              available.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:hello@timezoneus.com?subject=Quote%20request%20for%20%23${encodeURIComponent(product.sku)}`}
                className="tag inline-flex items-center gap-2 bg-[var(--color-brass)] text-black px-5 py-3 hover:bg-[var(--color-brass-bright)] transition-colors"
              >
                Request a quote
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href={`/products?category=${product.category}`}
                className="tag inline-flex items-center gap-2 border border-white/30 px-5 py-3 hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
              >
                Browse {cat.toLowerCase()}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Specs / variants / packaging ──────────────────────── */}
      <section className="px-6 md:px-10 pb-16 md:pb-20 max-w-[1600px] mx-auto">
        <div className="border-t border-[var(--color-ink)]/15 pt-12 md:pt-16">
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
            <div>
              <div className="tag text-[var(--color-stone)] mb-2">
                Spec sheet
              </div>
              <h2 className="display text-3xl md:text-5xl leading-[0.95]">
                Make it yours.
              </h2>
            </div>
            <p className="hidden md:block tag text-[var(--color-stone)] max-w-[28ch] text-right">
              Standard options for {cat.toLowerCase()}. Custom anything is on the
              table — ask.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[var(--color-ink)]/15 border border-[var(--color-ink)]/15">
            {/* Available colors */}
            <div className="lg:col-span-7 bg-[var(--color-bone)] p-7 md:p-9">
              <div className="tag text-[var(--color-brass)] mb-4">
                Available colors
              </div>
              <div className="flex flex-wrap gap-3">
                {specs.colors.map((c) => (
                  <div key={c.name} className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="inline-block w-6 h-6 rounded-full border border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
                      style={{ background: c.hex }}
                    />
                    <span className="text-sm text-[var(--color-ink-soft)]">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-[var(--color-stone)]">
                Custom Pantone matching available — we hit the swatch every time.
              </p>
            </div>

            {/* MOQ + lead time */}
            <div className="lg:col-span-5 bg-[var(--color-bone)] p-7 md:p-9">
              <div className="tag text-[var(--color-brass)] mb-4">Run details</div>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="tag text-[var(--color-stone)] mb-1">MOQ</dt>
                  <dd className="display text-2xl md:text-3xl text-[var(--color-ink)]">
                    {specs.moq}
                  </dd>
                </div>
                <div>
                  <dt className="tag text-[var(--color-stone)] mb-1">
                    Lead time
                  </dt>
                  <dd className="text-[var(--color-ink-soft)]">
                    {specs.leadTime}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-xs text-[var(--color-stone)]">
                Rush production possible. Ask us about the timeline you need.
              </p>
            </div>

            {/* Packaging */}
            <div className="lg:col-span-5 bg-[var(--color-bone)] p-7 md:p-9">
              <div className="tag text-[var(--color-brass)] mb-4 flex items-center gap-2">
                <PackagingIcon />
                Packaging
              </div>
              <ul className="space-y-2">
                {specs.packaging.map((opt) => (
                  <li
                    key={opt}
                    className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]"
                  >
                    <span className="text-[var(--color-brass)] leading-none mt-1">
                      ›
                    </span>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="lg:col-span-3 bg-[var(--color-bone)] p-7 md:p-9">
              <div className="tag text-[var(--color-brass)] mb-4 flex items-center gap-2">
                <MaterialsIcon />
                Materials
              </div>
              <ul className="space-y-2">
                {specs.materials.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]"
                  >
                    <span className="text-[var(--color-brass)] leading-none mt-1">
                      ›
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imprint */}
            <div className="lg:col-span-4 bg-[var(--color-bone)] p-7 md:p-9">
              <div className="tag text-[var(--color-brass)] mb-4 flex items-center gap-2">
                <ImprintIcon />
                Imprint methods
              </div>
              <ul className="space-y-2">
                {specs.imprintMethods.map((m) => (
                  <li
                    key={m}
                    className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]"
                  >
                    <span className="text-[var(--color-brass)] leading-none mt-1">
                      ›
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs text-[var(--color-stone)] max-w-[60ch]">
            Specs above are typical defaults for the {cat.toLowerCase()}{" "}
            category. Per-product options vary — email{" "}
            <a
              href="mailto:hello@timezoneus.com"
              className="link-underline text-[var(--color-brass)]"
            >
              hello@timezoneus.com
            </a>{" "}
            to confirm exact options for your run.
          </p>
        </div>
      </section>

      {/* Similar products */}
      {similar.length > 0 && (
        <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-8 md:mb-10 border-t border-[var(--color-ink)]/15 pt-10">
            <div>
              <div className="tag text-[var(--color-stone)] mb-2">
                More from {cat.toLowerCase()}
              </div>
              <h2 className="display text-3xl md:text-5xl leading-[0.95]">
                Similar pieces.
              </h2>
            </div>
            <Link
              href={`/products?category=${product.category}`}
              className="tag link-underline whitespace-nowrap"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {similar.map((sp) => (
              <Link
                key={sp.sku}
                href={`/product/${productId(sp)}`}
                className="tile group relative block bg-white text-black border border-[var(--color-ink)]/15 hover:border-[var(--color-brass)] transition-colors overflow-hidden"
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#f6f0e3] via-[#e9dfc8] to-[#cdbf9f] overflow-hidden">
                  <Image
                    src={productImageUrl(sp, "Medium")}
                    alt={sp.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                </div>
                <div className="p-4">
                  <div className="tag text-[#6b655a] mb-1">{sp.sku}</div>
                  <div className="font-medium text-sm leading-snug line-clamp-2 text-black group-hover:text-[var(--color-brass)] transition-colors">
                    {sp.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function PackagingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" strokeLinejoin="round" />
      <path d="M3 8l9 5 9-5" strokeLinejoin="round" />
      <path d="M12 13v8" />
    </svg>
  );
}

function MaterialsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function ImprintIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 21l1-5 12-12a2 2 0 1 1 3 3L8 19l-5 1z" strokeLinejoin="round" />
      <path d="M14 6l4 4" />
    </svg>
  );
}
