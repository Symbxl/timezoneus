import Nav from "../components/Nav";
import OrderForm from "./OrderForm";

export const metadata = {
  title: "Order Catalog — Time Zone US",
  description:
    "Distributor catalog request form. Submit your order details, industry IDs (ASI / PPAI / SAGE / UPIC), and shipping preferences and we'll come back within 48 hours.",
};

export default function OrderCatalogPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16 max-w-[1600px] mx-auto">
        <div className="tag text-[var(--color-brass)] mb-5 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-[var(--color-brass)]" />
          [008] Distributor tools · Catalog request
        </div>
        <h1
          className="display leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3.5rem, 11vw, 12rem)" }}
        >
          Order catalog.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[var(--color-stone)] max-w-2xl leading-snug">
          Drop your details and shipping preferences below. We&rsquo;ll come
          back within 48 hours with the catalog and a sample kit. Industry IDs
          (ASI, PPAI, SAGE, UPIC) are optional.
        </p>
      </section>

      <OrderForm />
    </main>
  );
}
