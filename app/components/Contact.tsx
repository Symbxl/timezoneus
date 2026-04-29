export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-[var(--color-ink)] text-[var(--color-bone)] px-6 md:px-10 pt-20 md:pt-32 pb-10 relative overflow-hidden"
    >
      {/* Massive background type */}
      <div
        aria-hidden
        className="absolute -bottom-12 left-0 right-0 display text-[28vw] leading-none text-[var(--color-bone)]/[0.04] whitespace-nowrap pointer-events-none select-none"
      >
        TIME ZONE US
      </div>

      <div className="mx-auto max-w-[1600px] relative">
        <div className="tag text-[var(--color-brass-bright)] mb-6">
          [006] Get in touch
        </div>
        <h2 className="display text-6xl md:text-8xl lg:text-[160px] leading-[0.84] max-w-[14ch]">
          Let&rsquo;s build
          <br />
          <span className="serif-italic lowercase text-[var(--color-brass-bright)]">
            something
          </span>
          <br />
          worth wearing.
        </h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16 mt-20">
          <div>
            <div className="tag text-[var(--color-bone)]/50 mb-3">
              New programs
            </div>
            <a
              href="mailto:hello@timezoneus.com"
              className="display text-3xl md:text-4xl link-underline text-[var(--color-brass-bright)]"
            >
              hello@timezoneus.com
            </a>
          </div>
          <div>
            <div className="tag text-[var(--color-bone)]/50 mb-3">Press</div>
            <a
              href="mailto:press@timezoneus.com"
              className="display text-3xl md:text-4xl link-underline"
            >
              press@timezoneus.com
            </a>
          </div>
          <div>
            <div className="tag text-[var(--color-bone)]/50 mb-3">Workshop</div>
            <p className="display text-2xl md:text-3xl leading-tight">
              132 Industrial Way
              <br />
              Edison, NJ 08817
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid md:grid-cols-2 gap-6 items-end">
          <div className="tag text-[var(--color-bone)]/50">
            ✦ Est. 1991 — Built in New Jersey.
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end tag">
            <a href="#" className="link-underline">Instagram</a>
            <a href="#" className="link-underline">LinkedIn</a>
            <a href="#" className="link-underline">Pinterest</a>
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-bone)]/15 flex flex-col md:flex-row gap-2 md:gap-6 tag text-[var(--color-bone)]/40">
          <span>© {new Date().getFullYear()} Time Zone US, Inc.</span>
          <span>All trademarks remain property of their respective owners.</span>
          <span className="md:ml-auto">Time keeps moving. ✦</span>
        </div>
      </div>
    </footer>
  );
}
