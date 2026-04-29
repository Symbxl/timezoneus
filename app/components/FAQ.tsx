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
              <span className="serif-italic lowercase">always ask.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group border-b border-[var(--color-ink)]/20 py-6"
              >
                <summary className="flex items-baseline justify-between gap-6">
                  <span className="display text-2xl md:text-3xl group-open:text-[var(--color-rust)] transition-colors">
                    {f.q}
                  </span>
                  <span className="faq-plus tag text-[var(--color-stone)] text-2xl shrink-0" />
                </summary>
                <p className="serif-italic text-xl md:text-2xl mt-5 max-w-[60ch] text-[var(--color-ink-soft)]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
