"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  PRODUCTS,
  productUrl,
  type Product,
  type ProductCategory,
} from "./products-data";

type Filter = ProductCategory | "all";

const CATEGORY_KEYS = new Set<ProductCategory>(
  CATEGORIES.map((c) => c.key),
);

function isCategory(v: string | null): v is ProductCategory {
  return !!v && CATEGORY_KEYS.has(v as ProductCategory);
}

export default function ProductsBrowser() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory: Filter = isCategory(searchParams.get("category"))
    ? (searchParams.get("category") as ProductCategory)
    : "all";
  const initialQuery = searchParams.get("q") ?? "";

  const [filter, setFilter] = useState<Filter>(initialCategory);
  const [query, setQuery] = useState(initialQuery);

  // Sync URL → state when user navigates with browser back/forward or clicks a nav link.
  useEffect(() => {
    const c = searchParams.get("category");
    setFilter(isCategory(c) ? (c as ProductCategory) : "all");
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  // Sync state → URL (replace, no history spam).
  useEffect(() => {
    const params = new URLSearchParams();
    if (filter !== "all") params.set("category", filter);
    if (query.trim()) params.set("q", query.trim());
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : "/products", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: PRODUCTS.length };
    for (const p of PRODUCTS) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (filter !== "all" && p.category !== filter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.slug.includes(q)
      );
    });
  }, [filter, query]);

  return (
    <>
      <section className="px-6 md:px-10 pb-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-[var(--color-ink)]/15 pb-6">
          <div className="flex items-center gap-3 w-full lg:max-w-md">
            <SearchIcon />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 505 products by name or SKU…"
              className="flex-1 bg-transparent border-b border-[var(--color-ink)]/30 focus:border-[var(--color-brass)] outline-none py-2 text-base placeholder:text-[var(--color-stone)] transition-colors"
              aria-label="Search products"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="tag text-[var(--color-stone)] hover:text-[var(--color-brass)]"
                aria-label="Clear search"
              >
                clear
              </button>
            )}
          </div>
          <div className="tag text-[var(--color-stone)]">
            {visible.length === PRODUCTS.length
              ? `${PRODUCTS.length} products`
              : `${visible.length} of ${PRODUCTS.length}`}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-8 max-w-[1600px] mx-auto">
        <div className="flex flex-wrap gap-2">
          <Chip
            active={filter === "all"}
            onClick={() => setFilter("all")}
            label="All"
            count={counts.all}
          />
          {CATEGORIES.map((c) => (
            <Chip
              key={c.key}
              active={filter === c.key}
              onClick={() => setFilter(c.key)}
              label={c.label}
              count={counts[c.key] || 0}
              accent={c.inNav}
            />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[1600px] mx-auto">
        {visible.length === 0 ? (
          <div className="border border-[var(--color-ink)]/15 p-12 text-center">
            <div className="serif-italic text-2xl mb-2">No matches.</div>
            <div className="text-[var(--color-stone)] text-sm">
              Try a different search term or pick another category.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[var(--color-ink)]/15">
            {visible.map((p) => (
              <ProductCard key={`${p.slug}-${p.sku}`} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function Chip({
  active,
  onClick,
  label,
  count,
  accent = false,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  accent?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`tag px-3 py-1.5 border transition-colors ${
        active
          ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
          : accent
            ? "border-[var(--color-brass)]/60 text-[var(--color-brass)] hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)]"
            : "border-[var(--color-ink)]/25 text-[var(--color-ink)] hover:bg-[var(--color-bone-deep)]"
      }`}
    >
      {label}
      <span
        className={`ml-2 ${
          active ? "opacity-70" : "text-[var(--color-stone)]"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={productUrl(product)}
      target="_blank"
      rel="noreferrer"
      className="tile group bg-[var(--color-bone)] p-5 md:p-6 flex flex-col justify-between min-h-[180px] hover:bg-[var(--color-bone-deep)] transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="tag text-[var(--color-stone)] truncate">
          {CATEGORY_LABEL[product.category]}
        </span>
        <span
          aria-hidden="true"
          className="tag text-[var(--color-stone)] group-hover:text-[var(--color-brass)] shrink-0 transition-colors"
        >
          ↗
        </span>
      </div>
      <div className="mt-6">
        <h3 className="font-serif text-lg md:text-xl leading-tight mb-2 group-hover:text-[var(--color-brass)] transition-colors">
          {product.name}
        </h3>
        <div className="tag text-[var(--color-stone)]">{product.sku}</div>
      </div>
    </a>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 text-[var(--color-stone)] shrink-0"
      aria-hidden="true"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="15"
        y1="15"
        x2="20"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
