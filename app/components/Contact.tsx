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
        {/* Copy + form */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] gap-12 lg:gap-20">
          <div>
            <p className="text-lg md:text-xl text-white/55 max-w-[44ch] leading-snug">
              Pitch us a brief or ask a question. We answer every email
              within 48 hours.
            </p>

            {/* Quick CTA cluster */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:press@timezoneus.com"
                className="tag inline-flex items-center gap-2 border border-white/30 px-5 py-3 hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
              >
                Press inquiry
              </a>
              <a
                href="/products"
                className="tag inline-flex items-center gap-2 border border-white/30 px-5 py-3 hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
              >
                Browse 505 products
              </a>
            </div>
          </div>

          <ContactForm />
        </div>

        {/* Meta */}
        <div className="mt-20 md:mt-28">
          <div className="tag text-white/40">
            ✦ Est. 1991 · Made in the USA.
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
