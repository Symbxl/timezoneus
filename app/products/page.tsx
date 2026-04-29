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

      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16 max-w-[1600px] mx-auto">
        <div className="tag text-[var(--color-stone)] mb-6">
          / Our Products · {PRODUCTS.length} items
        </div>
        <h1 className="display text-[14vw] md:text-[8vw] leading-none">
          The catalog.
        </h1>
        <p className="serif-italic text-xl md:text-2xl text-[var(--color-stone)] mt-6 max-w-2xl">
          Search, filter, and find what you need. Click any product to view it
          on timezoneus.com.
        </p>
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
