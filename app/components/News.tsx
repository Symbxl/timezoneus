const news = [
  {
    date: "Apr '26",
    text: "Time Zone US ships the 30-year anniversary capsule for ",
    link: "Highland Spirits Co.",
  },
  {
    date: "Mar '26",
    text: "New 4,000 sq ft assembly floor opens in Edison, NJ.",
    link: "",
  },
  {
    date: "Feb '26",
    text: "Time Zone US partners with ",
    link: "Sellita on a co-developed in-house caliber program.",
  },
  {
    date: "Jan '26",
    text: "We deliver the largest single-order in shop history — 4,200 units, on time.",
    link: "",
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
    link: "",
  },
];

export default function News() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28 bg-[var(--color-bone-deep)]">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="tag text-[var(--color-stone)] mb-4">[004] Field notes</div>
            <h2 className="display text-5xl md:text-7xl leading-[0.88]">
              Around
              <br />
              the
              <br />
              <span className="serif-italic lowercase">workshop.</span>
            </h2>
          </div>
          <ul className="md:col-span-8 space-y-1">
            {news.map((n, i) => (
              <li
                key={i}
                className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-5 border-b border-[var(--color-ink)]/15"
              >
                <span className="tag text-[var(--color-stone)] md:w-20 shrink-0">
                  {n.date}
                </span>
                <p className="text-lg md:text-xl leading-snug">
                  {n.text}
                  {n.link && (
                    <a
                      href="#"
                      className="link-underline text-[var(--color-rust)]"
                    >
                      {n.link}
                    </a>
                  )}
                </p>
                <span className="hidden md:inline ml-auto text-[var(--color-stone)] tag opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
