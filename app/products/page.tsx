import { Suspense } from "react";
import Nav from "../components/Nav";
import ProductsBrowser from "./ProductsBrowser";
import { PRODUCTS } from "./products-data";

export const metadata = {
  title: "Products — Time Zone US",
  description:
    "Browse our full catalog: PPE, smartphone & tech accessories, acrylic products, silicone awareness, watches, lanyards & hairties, and more.",
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="relative px-6 md:px-10 pt-32 md:pt-40 pb-10 md:pb-14 max-w-[1600px] mx-auto">
        <div className="tag text-[var(--color-brass)] mb-5 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-[var(--color-brass)]" />
          Catalog · {PRODUCTS.length} items
        </div>
        <h1
          className="display leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3.5rem, 11vw, 12rem)" }}
        >
          Products
        </h1>
      </section>

      <Suspense
        fallback={
          <section className="px-6 md:px-10 pb-24 max-w-[1600px] mx-auto">
            <div className="tag text-[var(--color-stone)]">
              Loading catalog…
            </div>
          </section>
        }
      >
        <ProductsBrowser />
      </Suspense>
    </main>
  );
}
