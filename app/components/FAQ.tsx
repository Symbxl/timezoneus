const faqs = [
  {
    q: "What's the minimum order?",
    a: "MOQ starts at 100 units for most programs. For fully bespoke movements or rare cases, MOQ can climb. We're happy to scope smaller pilot runs to test reception before a full launch.",
  },
  {
    q: "How long does a typical project take?",
    a: "From signed brief to delivered units, expect 12–18 weeks for a quartz program and 18–26 weeks for automatic. Prototypes typically land in 21 days. Rush is possible — ask.",
  },
  {
    q: "Can you match an exact Pantone or brand color?",
    a: "Yes. We dye dials, pad-print, and lacquer to spec. We'll send physical color proofs before pulling the trigger on production runs.",
  },
  {
    q: "Do you handle warranties and post-sale service?",
    a: "Every watch ships with a 2-year warranty serviced through our Edison, NJ workshop. White-label warranty cards available — your brand, our hands.",
  },
  {
    q: "Swiss-made or Japanese-made?",
    a: "Both. We'll recommend a movement based on your price target, run size, complication needs, and the story you want to tell. There is no universally 'best' answer.",
  },
  {
    q: "What's the price range?",
    a: "Programs range from ~$45/unit (private-label quartz, simple dial) to $1,200+/unit (Swiss automatic, sapphire, custom case). Most corporate programs land between $90 and $260 per unit landed.",
  },
  {
    q: "Can you deliver internationally?",
    a: "Yes. We ship DDP to the US, Canada, EU, UK, and most APAC. Customs and duties handled by us — your team gets clean delivery.",
  },
  {
    q: "When can we start?",
    a: "Today. Send a quick brief — brand, intended use, budget range, target launch date — and we'll come back within 48 hours with a first-pass quote and timeline.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 md:px-10 py-20 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="tag text-[var(--color-stone)] mb-4">[005] FAQ</div>
            <h2 className="display text-6xl md:text-8xl leading-[0.86]">
              Things
              <br />
              people
              <br />
              ask.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[var(--color-stone)] max-w-[34ch] leading-snug">
              Couldn&apos;t find your answer? Drop us a line — real humans
              reply within 48 hours.
            </p>
          </div>

          <div className="md:col-span-8">
            {faqs.map((f, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <details
                  key={i}
                  className="group relative border-t border-[var(--color-ink)]/15 last:border-b py-6 md:py-7 transition-colors hover:bg-[var(--color-bone-deep)]/40 open:bg-[var(--color-bone-deep)]/40"
                >
                  <summary className="flex items-center gap-4 md:gap-6">
                    <span className="tag text-[var(--color-stone)] w-8 shrink-0 hidden sm:inline">
                      {num}
                    </span>
                    <span className="display text-2xl md:text-[28px] lg:text-[32px] leading-tight flex-1 text-[var(--color-ink)] group-open:text-[var(--color-brass)] transition-colors">
                      {f.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative w-6 h-6 shrink-0 ml-auto"
                    >
                      <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--color-stone)] group-open:bg-[var(--color-brass)] transition-colors" />
                      <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-[var(--color-stone)] group-open:bg-[var(--color-brass)] group-open:rotate-90 transition-all duration-300 origin-center" />
                    </span>
                  </summary>
                  <div className="mt-5 ml-0 sm:ml-12 max-w-[60ch]">
                    <p className="text-lg md:text-xl leading-snug text-[var(--color-ink-soft)]">
                      {f.a}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-brass)] origin-top scale-y-0 group-open:scale-y-100 transition-transform duration-500 ease-out"
                  />
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
