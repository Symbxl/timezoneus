"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  PRODUCTS,
  WATCH_SERIES,
  isWatchSeries,
  productId,
  productImageUrl,
  productSeries,
  type Product,
  type ProductCategory,
  type WatchSeries,
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
  const initialSeries: WatchSeries | null = isWatchSeries(
    searchParams.get("series"),
  )
    ? (searchParams.get("series") as WatchSeries)
    : null;
  const initialQuery = searchParams.get("q") ?? "";

  const [filter, setFilter] = useState<Filter>(initialCategory);
  const [series, setSeries] = useState<WatchSeries | null>(initialSeries);
  const [query, setQuery] = useState(initialQuery);

  // Sync URL → state when user navigates with browser back/forward or clicks a nav link.
  useEffect(() => {
    const c = searchParams.get("category");
    setFilter(isCategory(c) ? (c as ProductCategory) : "all");
    const s = searchParams.get("series");
    setSeries(isWatchSeries(s) ? (s as WatchSeries) : null);
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  // Sync state → URL (replace, no history spam).
  useEffect(() => {
    const params = new URLSearchParams();
    if (filter !== "all") params.set("category", filter);
    if (series) params.set("series", series);
    if (query.trim()) params.set("q", query.trim());
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : "/products", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, series, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: PRODUCTS.length };
    for (const p of PRODUCTS) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const seriesCounts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const p of PRODUCTS) {
      const s = productSeries(p);
      if (s) c[s] = (c[s] || 0) + 1;
    }
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (filter !== "all" && p.category !== filter) return false;
      if (series && productSeries(p) !== series) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.slug.includes(q)
      );
    });
  }, [filter, series, query]);

  const filterLabel = series
    ? (WATCH_SERIES.find((s) => s.key === series)?.label ?? "Collection")
    : filter === "all"
      ? "All products"
      : CATEGORY_LABEL[filter];
  const isFiltered =
    filter !== "all" || series !== null || query.trim().length > 0;

  return (
    <>
      <section className="px-6 md:px-10 pb-8 md:pb-10 max-w-[1600px] mx-auto">
        {/* Toolbar: search input + result counter */}
        <div className="border-t border-[var(--color-ink)]/15 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-stone)] pointer-events-none">
                <SearchIcon />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or SKU"
                className="w-full bg-[var(--color-bone-deep)] border border-[var(--color-ink)]/15 focus:border-[var(--color-brass)] focus:bg-[var(--color-bone)] outline-none rounded-md pl-11 pr-12 py-3 text-sm md:text-base placeholder:text-[var(--color-stone)] transition-colors"
                aria-label="Search products"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-7 h-7 rounded-full text-[var(--color-stone)] hover:text-[var(--color-ink)] hover:bg-[var(--color-ink)]/10 transition-colors"
                  aria-label="Clear search"
                >
                  <span aria-hidden="true">×</span>
                </button>
              )}
            </div>
            <div className="flex items-center gap-3 tag text-[var(--color-stone)]">
              <span className="display text-2xl md:text-3xl text-[var(--color-ink)] leading-none">
                {visible.length}
              </span>
              <span>
                of {PRODUCTS.length} {visible.length === 1 ? "result" : "results"}
              </span>
              {isFiltered && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setFilter("all");
                    setSeries(null);
                  }}
                  className="ml-2 tag uppercase tracking-[0.16em] text-[var(--color-brass)] hover:text-[var(--color-brass-bright)] transition-colors"
                >
                  Reset ↻
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category filter row */}
        <div className="mt-6 pt-6 border-t border-[var(--color-ink)]/10">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="tag text-[var(--color-stone)] uppercase tracking-[0.18em]">
              Filter by category
            </div>
            <div className="hidden md:block tag text-[var(--color-stone)]">
              Active: <span className="text-[var(--color-ink)]">{filterLabel}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip
              active={filter === "all" && !series}
              onClick={() => {
                setFilter("all");
                setSeries(null);
              }}
              label="All"
              count={counts.all}
            />
            {CATEGORIES.map((c) => (
              <Chip
                key={c.key}
                active={filter === c.key && !series}
                onClick={() => {
                  setFilter(c.key);
                  setSeries(null);
                }}
                label={c.label}
                count={counts[c.key] || 0}
                accent={c.inNav}
              />
            ))}
          </div>
        </div>

        {/* Watch collections (series) filter row */}
        <div className="mt-5 pt-5 border-t border-[var(--color-ink)]/10">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="tag text-[var(--color-brass)] uppercase tracking-[0.18em]">
              Watch collections
            </div>
            <div className="hidden md:block tag text-[var(--color-stone)]">
              {series ? "Filtering by series" : "Drill into a watch line"}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {WATCH_SERIES.map((s) => {
              const c = seriesCounts[s.key] || 0;
              const disabled = c === 0;
              return (
                <Chip
                  key={s.key}
                  active={series === s.key}
                  onClick={() => {
                    if (disabled) return;
                    setSeries(s.key);
                    setFilter("all");
                  }}
                  label={s.label}
                  count={c}
                  accent
                  disabled={disabled}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[1600px] mx-auto">
        {visible.length === 0 ? (
          <div className="border border-[var(--color-ink)]/15 p-12 text-center">
            <div className="text-3xl mb-2">No matches.</div>
            <div className="text-[var(--color-stone)] text-sm mb-6">
              Try a different search term or pick another category.
            </div>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setFilter("all");
                setSeries(null);
              }}
              className="tag border border-[var(--color-ink)]/30 px-4 py-2 hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
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
  disabled = false,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  accent?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={`tag relative inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
        disabled
          ? "border-[var(--color-ink)]/10 text-[var(--color-ink)]/30 cursor-not-allowed"
          : active
            ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
            : accent
              ? "border-[var(--color-brass)]/40 text-[var(--color-ink)] hover:border-[var(--color-brass)] hover:text-[var(--color-brass)]"
              : "border-[var(--color-ink)]/20 text-[var(--color-ink-soft)] hover:border-[var(--color-ink)]/50 hover:text-[var(--color-ink)]"
      }`}
    >
      <span>{label}</span>
      <span
        className={`text-[10px] tabular-nums ${
          disabled
            ? "text-[var(--color-ink)]/20"
            : active
              ? "text-[var(--color-bone)]/60"
              : accent
                ? "text-[var(--color-brass)]/70"
                : "text-[var(--color-stone)]"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${productId(product)}`}
      className="tile group relative flex flex-col bg-[var(--color-bone)] border border-[var(--color-ink)]/15 hover:border-[var(--color-brass)]/60 hover:bg-[var(--color-bone-deep)] transition-colors overflow-hidden"
    >
      <div className="flex items-center justify-between gap-3 px-5 md:px-6 py-3 border-b border-[var(--color-ink)]/10">
        <span className="tag text-[var(--color-stone)] truncate">
          {CATEGORY_LABEL[product.category]}
        </span>
        <span
          aria-hidden="true"
          className="tag text-[var(--color-stone)] shrink-0 transition-all duration-300 group-hover:text-[var(--color-brass)] group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>

      <div className="relative aspect-square overflow-hidden">
        <Image
          src={productImageUrl(product, "Medium")}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>

      <div className="px-5 md:px-6 pt-4 pb-5 border-t border-[var(--color-ink)]/10">
        <h3 className="font-medium text-base md:text-lg leading-tight mb-3 line-clamp-2 text-[var(--color-ink)] group-hover:text-[var(--color-brass)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="tag text-[var(--color-stone)]">{product.sku}</span>
          <span className="flex-1 h-px bg-[var(--color-ink)]/10" />
          <span className="tag text-[var(--color-stone)]/60 group-hover:text-[var(--color-brass)] transition-colors">
            view
          </span>
        </div>
      </div>
    </Link>
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
