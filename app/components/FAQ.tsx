type FAQ = {
  category: string;
  q: string;
  a: string[];
};

const faqs: FAQ[] = [
  {
    category: "Minimum order",
    q: "What's the minimum order?",
    a: [
      "Our core items have item numbers and a minimum quantity shown in the price sheet. We can offer a less than minimum cost on many of these items — please contact us for pricing.",
      "Our custom made items have varying minimum order quantities that we'll expand on an item by item basis or in your quote.",
    ],
  },
  {
    category: "Timeline",
    q: "How long does a typical order take?",
    a: [
      "Our core items show production time after the paper proof or pre-production samples are approved. These are times that are easy to hit and keep it stress free.",
      "We offer rush service on most items — please ask us and we can advise on an order by order basis. Custom orders will vary by the item being made and are quoted based on a timeline for that item.",
    ],
  },
  {
    category: "Color & finish",
    q: "Can you match an exact Pantone or brand color?",
    a: [
      "Yes. We understand the importance of adhering to brand guidelines, and your client's PMS color is just as important to us as it is to them.",
      "We do have a PMS section, but please note most items can be PMS matched. Minimums will vary, as will production times.",
    ],
  },
  {
    category: "Design & engineering",
    q: "Can you design and engineer out-of-the-box merch?",
    a: [
      "This is where our team shines. We have a technical team of product experts with an understanding of manufacturing a full range of products.",
      "Custom molds, woven fabrics, custom bags and totes are just the start of what our team knows from the ground up.",
    ],
  },
  {
    category: "Fulfillment & kitting",
    q: "Do you handle fulfillment and kitting?",
    a: [
      "China — after sourcing a single item or several, we can custom pack these for you. This ships in ready to go to the consumer or to the client's warehouse, at a reduced cost to the client and an increased profit to you.",
      "In the US, we are able to kit and ship items we produce, and accept outside items into these kits.",
    ],
  },
  {
    category: "Drop shipping",
    q: "Can you drop ship?",
    a: [
      "One address or one thousand, we will work to get this done as economically as possible. We do charge a fee for this, so please ask for a quote if this is required.",
      "Prices will vary based on the number of drop ships and the number of items to each address.",
    ],
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
                      <div className="ml-15 md:ml-[60px] max-w-[60ch] border-l border-[var(--color-brass)] pl-5 md:pl-6 space-y-4">
                        {f.a.map((para, j) => (
                          <p
                            key={j}
                            className="text-base md:text-lg leading-relaxed text-[var(--color-stone)]"
                          >
                            {para}
                          </p>
                        ))}
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
