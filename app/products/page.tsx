import { Suspense } from "react";
import Nav from "../components/Nav";
import ProductsBrowser from "./ProductsBrowser";
import { PRODUCTS } from "./products-data";

export const metadata = {
  title: "Our Products — Time Zone US",
  description:
    "Browse our full catalog: PPE, smartphone & tech accessories, acrylic products, silicone awareness, watches, lanyards & hairties, and more.",
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16 max-w-[1600px] mx-auto overflow-x-clip">
        <div
          aria-hidden="true"
          className="absolute -top-2 right-0 md:right-10 w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-50 pointer-events-none"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full spin-slow">
            <circle cx="100" cy="100" r="98" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="86" fill="none" stroke="var(--color-ink)" strokeWidth="0.4" strokeDasharray="1 4" />
            {Array.from({ length: 60 }).map((_, i) => {
              const a = (i * 6 * Math.PI) / 180;
              const r1 = 92;
              const r2 = i % 5 === 0 ? 80 : 86;
              const x1 = 100 + r1 * Math.sin(a);
              const y1 = 100 - r1 * Math.cos(a);
              const x2 = 100 + r2 * Math.sin(a);
              const y2 = 100 - r2 * Math.cos(a);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--color-ink)"
                  strokeWidth={i % 5 === 0 ? 1 : 0.4}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>

        <div className="relative">
          <div className="tag text-[var(--color-brass)] mb-5 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-[var(--color-brass)]" />
            Catalog · {PRODUCTS.length} items
          </div>
          <h1
            className="display leading-[0.86] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 11vw, 12rem)" }}
          >
            The catalog.
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-stone)] mt-6 max-w-2xl">
            Search, filter, and find what you need. Click any product to view it
            on timezoneus.com.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <section className="px-6 md:px-10 pb-24 max-w-[1600px] mx-auto">
            <div className="tag text-[var(--color-stone)]">Loading catalog…</div>
          </section>
        }
      >
        <ProductsBrowser />
      </Suspense>
    </main>
  );
}
