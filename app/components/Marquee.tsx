export default function Marquee() {
  const items = [
    "Custom Dials",
    "Swiss & Japanese Movements",
    "Co-branded Editions",
    "Sapphire Crystal",
    "Made for Brands",
    "Sub-second Lead Times",
    "MOQ from 100",
    "Box, Booklet, Bracelet",
  ];
  const all = [...items, ...items, ...items];
  return (
    <section
      aria-hidden="true"
      className="border-y border-[var(--color-ink)]/15 bg-[var(--color-bone-deep)] py-5 overflow-hidden"
    >
      <div className="marquee tag text-[var(--color-ink)]">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span>{t}</span>
            <span className="text-[var(--color-brass)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
