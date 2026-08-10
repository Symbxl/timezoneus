import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#000000] text-white px-6 md:px-10 pt-20 md:pt-32 pb-10 border-t border-white/10"
    >
      {/* Massive background type */}
      <div
        aria-hidden
        className="absolute -bottom-10 left-0 right-0 display text-[26vw] leading-none text-white/[0.04] whitespace-nowrap pointer-events-none select-none tracking-[-0.02em]"
      >
        TIMEZONE
      </div>

      <div className="mx-auto max-w-[1600px] relative">
        {/* Top: eyebrow + giant CTA headline */}
        <div className="tag text-[var(--color-brass)] mb-6">
          Get in touch
        </div>
        <h2 className="display text-6xl md:text-8xl lg:text-[160px] leading-[0.84] max-w-[16ch] tracking-[-0.01em]">
          Let&rsquo;s build something.
        </h2>

        {/* Lives above the grid so both columns' caption rows share a baseline,
            letting the ledger and the form read as one table split by the rule. */}
        <p className="mt-8 md:mt-10 text-lg md:text-xl text-white/55 max-w-[44ch] leading-snug">
          Pitch us a brief or ask a question. We answer every email within
          48 hours.
        </p>

        {/* Gap collapses to 0 at lg so the form column's border-l reads as the
            single rule dividing copy from form. */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] gap-12 lg:gap-0">
          <div className="flex h-full flex-col lg:pr-12 xl:pr-20">
            {/* Ledger — mirrors the form's ruled rows across the divider */}
            <div className="flex items-baseline">
              <span className="tag text-[var(--color-stone)] tracking-[0.18em]">
                Direct lines
              </span>
            </div>

            <dl className="mt-5 border-t border-[var(--color-ink)]/15">
              {[
                {
                  term: "Catalog",
                  value: "Request a copy",
                  href: "/order-catalog",
                },
                {
                  term: "Specs & policies",
                  value: "General info",
                  href: "/general-info",
                },
                { term: "Questions", value: "Read the FAQ", href: "#faq" },
              ].map((row) => (
                <div
                  key={row.term}
                  className="flex items-baseline justify-between gap-4 border-b border-[var(--color-ink)]/15 py-4"
                >
                  <dt className="tag text-[var(--color-stone)] uppercase tracking-[0.16em]">
                    {row.term}
                  </dt>
                  <dd className="text-sm text-white/80 text-right">
                    <a
                      href={row.href}
                      className="link-underline hover:text-[var(--color-brass)] transition-colors"
                    >
                      {row.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            {/* Quick CTA cluster — pinned to the bottom of the column on desktop */}
            <div className="mt-10 lg:mt-auto lg:pt-12 flex flex-wrap gap-3">
              <a
                href="mailto:press@timezoneus.com"
                className="tag inline-flex items-center gap-2 border border-white/30 px-5 py-3 uppercase tracking-[0.16em] hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
              >
                Press inquiry
              </a>
              <a
                href="/products"
                className="tag inline-flex items-center gap-2 border border-white/30 px-5 py-3 uppercase tracking-[0.16em] hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
              >
                Browse 505 products
              </a>
            </div>
          </div>

          <div className="lg:border-l lg:border-[var(--color-ink)]/15 lg:pl-12 xl:pl-20">
            <ContactForm />
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-2 md:gap-6 tag text-white/40">
          <span>© {new Date().getFullYear()} Time Zone US, Inc.</span>
          <a href="#" className="link-underline hover:text-white/70 transition-colors">
            Privacy
          </a>
          <a href="#" className="link-underline hover:text-white/70 transition-colors">
            Terms
          </a>
          <span className="md:ml-auto">Time keeps moving. ✦</span>
        </div>
      </div>
    </footer>
  );
}
