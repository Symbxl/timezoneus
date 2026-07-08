type FAQ = {
  category: string;
  q: string;
  a: string;
};

const faqs: FAQ[] = [
  {
    category: "Minimum order",
    q: "What's the minimum order?",
    a: "MOQ starts at 100 units for most programs. For fully bespoke movements or rare cases, MOQ can climb. We're happy to scope smaller pilot runs to test reception before a full launch.",
  },
  {
    category: "Timeline",
    q: "How long does a typical project take?",
    a: "From signed brief to delivered units, expect 12–18 weeks for a quartz program and 18–26 weeks for automatic. Prototypes typically land in 21 days. Rush is possible — ask.",
  },
  {
    category: "Color & finish",
    q: "Can you match an exact Pantone or brand color?",
    a: "Yes. We dye dials, pad-print, and lacquer to spec. We'll send physical color proofs before pulling the trigger on production runs.",
  },
  {
    category: "Warranty",
    q: "Do you handle warranties and post-sale service?",
    a: "Every watch ships with a 2-year warranty serviced through our in-house workshop. White-label warranty cards available — your brand, our hands.",
  },
  {
    category: "Movements",
    q: "Swiss-made or Japanese-made?",
    a: "Both. We'll recommend a movement based on your price target, run size, complication needs, and the story you want to tell. There is no universally 'best' answer.",
  },
  {
    category: "Pricing",
    q: "What's the price range?",
    a: "Programs range from ~$45/unit (private-label quartz, simple dial) to $1,200+/unit (Swiss automatic, sapphire, custom case). Most corporate programs land between $90 and $260 per unit landed.",
  },
  {
    category: "Shipping",
    q: "Can you deliver internationally?",
    a: "Yes. We ship DDP to the US, Canada, EU, UK, and most APAC. Customs and duties handled by us — your team gets clean delivery.",
  },
  {
    category: "Onboarding",
    q: "When can we start?",
    a: "Today. Send a quick brief — brand, intended use, budget range, target launch date — and we'll come back within 48 hours with a first-pass quote and timeline.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      {/* Faint background watermark */}
      <div
        aria-hidden
        className="absolute -bottom-12 -left-8 display text-[18vw] md:text-[14vw] leading-none text-white/[0.035] whitespace-nowrap pointer-events-none select-none tracking-[-0.02em]"
      >
        FAQ.FAQ.FAQ.
      </div>

      <div className="mx-auto max-w-[1600px] relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* LEFT — sticky headline column */}
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <div className="inline-flex items-center gap-2.5 bg-black text-white border border-white/20 px-4 py-2 tag uppercase tracking-[0.18em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)]" />
              FAQ
            </div>
            <h2 className="display text-6xl md:text-7xl lg:text-8xl leading-[0.86]">
              Things
              <br />
              people
              <br />
              ask.
            </h2>
            <p className="mt-8 text-base md:text-lg text-[var(--color-stone)] max-w-[34ch] leading-snug">
              The questions we field every week. Click any to expand. If
              yours isn&apos;t here, write us — humans reply in under 48 hours.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 tag bg-[var(--color-brass)] text-black px-5 py-3 hover:bg-[var(--color-brass-bright)] transition-colors"
            >
              Ask a question
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* RIGHT — questions */}
          <div className="md:col-span-8">
            <div className="border-t border-[var(--color-ink)]/20">
              {faqs.map((f, i) => {
                const num = String(i + 1).padStart(2, "0");
                return (
                  <details
                    key={i}
                    className="group relative border-b border-[var(--color-ink)]/20 transition-colors open:bg-[var(--color-bone-deep)]/50 hover:bg-[var(--color-bone-deep)]/30"
                  >
                    <summary className="flex items-start gap-5 md:gap-7 py-6 md:py-8 px-3 md:px-5 cursor-pointer list-none">
                      {/* Index */}
                      <span className="display text-2xl md:text-3xl text-[var(--color-stone)] group-open:text-[var(--color-brass)] transition-colors w-10 shrink-0 leading-none mt-1">
                        {num}
                      </span>

                      {/* Stack: category + question */}
                      <div className="flex-1 min-w-0">
                        <div className="tag text-[var(--color-brass)] uppercase tracking-[0.18em] mb-2">
                          {f.category}
                        </div>
                        <span className="display block text-2xl md:text-3xl lg:text-[36px] leading-[1.05] text-[var(--color-ink)] group-open:text-[var(--color-brass)] transition-colors">
                          {f.q}
                        </span>
                      </div>

                      {/* +/× icon */}
                      <span
                        aria-hidden="true"
                        className="relative w-9 h-9 shrink-0 rounded-full border border-[var(--color-ink)]/25 group-open:border-[var(--color-brass)] flex items-center justify-center mt-1 transition-colors"
                      >
                        <span className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--color-stone)] group-open:bg-[var(--color-brass)] transition-colors" />
                        <span className="absolute inset-y-2.5 left-1/2 -translate-x-1/2 w-[2px] bg-[var(--color-stone)] group-open:bg-[var(--color-brass)] group-open:rotate-90 transition-all duration-300 origin-center" />
                      </span>
                    </summary>

                    {/* Answer */}
                    <div className="px-3 md:px-5 pb-7 md:pb-9 -mt-1">
                      <div className="ml-15 md:ml-[60px] max-w-[60ch] border-l border-[var(--color-brass)] pl-5 md:pl-6">
                        <p className="text-base md:text-lg leading-relaxed text-[var(--color-stone)]">
                          {f.a}
                        </p>
                      </div>
                    </div>

                    {/* Brass accent bar slides down on open */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-brass)] origin-top scale-y-0 group-open:scale-y-100 transition-transform duration-500 ease-out"
                    />
                  </details>
                );
              })}
            </div>

            {/* Footer cta strip */}
            <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-5">
              <div className="bg-[var(--color-bone-deep)]/60 border border-white/10 p-6 md:p-7">
                <div className="display text-3xl md:text-4xl leading-none text-[var(--color-brass)] mb-3">
                  &lt; 48h
                </div>
                <div className="tag text-[var(--color-stone)] uppercase tracking-[0.16em]">
                  Avg. reply time
                </div>
              </div>
              <div className="bg-[var(--color-bone-deep)]/60 border border-white/10 p-6 md:p-7">
                <div className="display text-3xl md:text-4xl leading-none text-[var(--color-brass)] mb-3">
                  34 yrs
                </div>
                <div className="tag text-[var(--color-stone)] uppercase tracking-[0.16em]">
                  In the workshop
                </div>
              </div>
              <div className="bg-[var(--color-bone-deep)]/60 border border-white/10 p-6 md:p-7">
                <div className="display text-3xl md:text-4xl leading-none text-[var(--color-brass)] mb-3">
                  505
                </div>
                <div className="tag text-[var(--color-stone)] uppercase tracking-[0.16em]">
                  SKUs in catalog
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
