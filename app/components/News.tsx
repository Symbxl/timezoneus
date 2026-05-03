type Item = {
  date: string;
  text: string;
  link?: string;
};

const news: Item[] = [
  {
    date: "Apr '26",
    text: "Time Zone US ships the 30-year anniversary capsule for ",
    link: "Highland Spirits Co.",
  },
  {
    date: "Mar '26",
    text: "New 4,000 sq ft assembly floor opens in Edison, NJ.",
  },
  {
    date: "Feb '26",
    text: "Time Zone US partners with ",
    link: "Sellita on a co-developed in-house caliber program.",
  },
  {
    date: "Jan '26",
    text: "We deliver the largest single-order in shop history — 4,200 units, on time.",
  },
  {
    date: "Dec '25",
    text: "Featured in ",
    link: "Hodinkee’s Year of the Custom Watch.",
  },
  {
    date: "Nov '25",
    text: "Founder Marco speaks at ",
    link: "WatchTime New York on building house brands.",
  },
  {
    date: "Oct '25",
    text: "Time Zone US celebrates 34 years building watches for the brands that build the world.",
  },
];

export default function News() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-20 md:py-28 bg-black border-y border-white/10">
      {/* Faint background watermark */}
      <div
        aria-hidden
        className="absolute -bottom-12 -right-10 display text-[20vw] md:text-[14vw] leading-none text-white/[0.035] whitespace-nowrap pointer-events-none select-none tracking-[-0.02em]"
      >
        FIELD NOTES
      </div>

      <div className="mx-auto max-w-[1600px] relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <div className="tag text-[var(--color-brass)] mb-4">
              [004] Field notes
            </div>
            <h2 className="display text-6xl md:text-7xl lg:text-8xl leading-[0.88] text-white">
              Around
              <br />
              the
              <br />
              workshop.
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/55 max-w-[34ch] leading-snug">
              Releases, partnerships, and shop notes from the floor in
              Edison, NJ.
            </p>
            <a
              href="#"
              className="tag link-underline mt-8 inline-block text-white/70 hover:text-[var(--color-brass)] transition-colors"
            >
              See full archive →
            </a>
          </div>

          <ul className="md:col-span-8">
            {news.map((n, i) => (
              <li
                key={i}
                className="group relative border-t border-white/10 last:border-b"
              >
                <a
                  href="#"
                  className="relative flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10 py-7 md:py-8 px-3 md:px-5 -mx-3 md:-mx-5 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="display text-2xl md:text-3xl lg:text-4xl text-white/40 group-hover:text-[var(--color-brass)] transition-colors md:w-32 shrink-0 leading-none">
                    {n.date}
                  </span>
                  <p className="flex-1 text-lg md:text-2xl leading-snug text-white">
                    {n.text}
                    {n.link && (
                      <span className="link-underline text-[var(--color-brass)]">
                        {n.link}
                      </span>
                    )}
                  </p>
                  <span
                    aria-hidden="true"
                    className="hidden md:inline tag text-white/30 group-hover:text-[var(--color-brass)] transition-all duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-brass)] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
