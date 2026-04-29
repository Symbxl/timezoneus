const services = [
  {
    n: "01",
    title: "Custom Design",
    body:
      "Original dials, hands, cases, crowns, casebacks. We design watches from the inside out — your brand, your story, your timepiece.",
    items: ["Dial illustration", "Engraved casebacks", "Brand-color resin", "Custom indices"],
  },
  {
    n: "02",
    title: "Movement Sourcing",
    body:
      "Swiss, Japanese, and German movements selected for the price-to-performance reality of your program. From quartz to automatic.",
    items: ["Sellita SW", "Miyota 9015", "Seiko NH35", "Ronda Quartz"],
  },
  {
    n: "03",
    title: "Production",
    body:
      "Manufacturing partners across Switzerland, China, and Hong Kong. We ride the line from sample to ship — QC at every stage.",
    items: ["Prototype in 21d", "MOQ from 100", "Full QC pass", "DDP shipping"],
  },
  {
    n: "04",
    title: "Packaging",
    body:
      "The unboxing matters. Custom boxes, booklets, certificates, microfiber, warranty cards — every touchpoint, designed.",
    items: ["Box & sleeve", "Hangtags", "Booklets", "Travel rolls"],
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="px-6 md:px-10 py-20 md:py-32 bg-[var(--color-ink)] text-[var(--color-bone)]"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="tag text-[var(--color-brass)] mb-6">
          [002] Capabilities
        </div>
        <h2 className="display text-6xl md:text-8xl lg:text-[140px] leading-[0.86] max-w-[14ch]">
          Soup to nuts.
          <br />
          <span className="serif-italic lowercase text-[var(--color-brass-bright)]">
            crown to caseback.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mt-20 md:mt-28">
          {services.map((s) => (
            <div key={s.n} className="border-t border-[var(--color-bone)]/30 pt-6">
              <div className="flex items-baseline justify-between mb-4">
                <span className="tag text-[var(--color-brass-bright)]">
                  /{s.n}
                </span>
                <span className="tag text-[var(--color-bone)]/50">
                  {s.items.length} services
                </span>
              </div>
              <h3 className="display text-5xl md:text-6xl mb-5">{s.title}</h3>
              <p className="serif-italic text-xl md:text-2xl text-[var(--color-bone)]/85 max-w-[44ch] mb-6">
                {s.body}
              </p>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="tag border border-[var(--color-bone)]/40 px-3 py-1.5"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
