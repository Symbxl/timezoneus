const partners = [
  "PepsiCo",
  "Marriott",
  "Goldman Sachs",
  "Boeing",
  "Lockheed Martin",
  "Anheuser-Busch",
  "Caterpillar",
  "John Deere",
  "Harley-Davidson",
  "Nestlé",
  "Lexus",
  "Estée Lauder",
  "AmEx",
  "FedEx",
  "Coca-Cola",
  "Wells Fargo",
];

export default function Partners() {
  return (
    <section id="partners" className="px-6 md:px-10 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="tag text-[var(--color-stone)] mb-6">
          [003] Partners
        </div>
        <h2 className="display text-6xl md:text-8xl lg:text-[120px] leading-[0.86] max-w-[20ch]">
          We&rsquo;ve made watches for
          <br />
          <span className="serif-italic lowercase">
            brands you actually know.
          </span>
        </h2>

        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-2 md:gap-y-4 border-t border-[var(--color-ink)]/15">
          {partners.map((p, i) => (
            <div
              key={p}
              className={`group relative h-20 md:h-28 flex items-center justify-center border-b border-[var(--color-ink)]/15 ${
                (i + 1) % 4 !== 0 ? "md:border-r md:border-[var(--color-ink)]/15" : ""
              } ${i % 2 === 0 ? "border-r border-[var(--color-ink)]/15 md:border-r-0" : ""}`}
            >
              <span className="display text-2xl md:text-3xl transition-all duration-300 group-hover:text-[var(--color-brass)] group-hover:tracking-wide">
                {p}
              </span>
              <span className="absolute bottom-2 right-2 tag text-[var(--color-stone)] opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </span>
            </div>
          ))}
        </div>

        <p className="serif-italic text-2xl md:text-3xl mt-16 max-w-[36ch]">
          + a few hundred more we&rsquo;re not allowed to talk about.
        </p>
      </div>
    </section>
  );
}
