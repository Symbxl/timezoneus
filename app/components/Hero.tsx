export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] relative">
        {/* Decorative dial */}
        <div className="absolute -top-8 right-0 md:right-10 w-[260px] h-[260px] md:w-[420px] md:h-[420px] opacity-90 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full spin-slow">
            <circle
              cx="100"
              cy="100"
              r="98"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="0.6"
            />
            <circle
              cx="100"
              cy="100"
              r="86"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="0.4"
              strokeDasharray="1 4"
            />
            {Array.from({ length: 60 }).map((_, i) => {
              const a = (i * 6 * Math.PI) / 180;
              const r1 = 92;
              const r2 = i % 5 === 0 ? 80 : 86;
              const x1 = 100 + r1 * Math.sin(a);
              const y1 = 100 - r1 * Math.cos(a);
              const x2 = 100 + r2 * Math.sin(a);
              const y2 = 100 - r2 * Math.cos(a);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="var(--color-ink)"
                  strokeWidth={i % 5 === 0 ? 1.2 : 0.5}
                  strokeLinecap="round"
                />
              );
            })}
            {/* Roman numerals as text */}
            {["XII", "III", "VI", "IX"].map((n, i) => {
              const angle = i * 90;
              const a = (angle * Math.PI) / 180;
              const r = 70;
              const x = 100 + r * Math.sin(a);
              const y = 100 - r * Math.cos(a);
              return (
                <text
                  key={n}
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  fontFamily="Instrument Serif"
                  fontSize="13"
                  fontStyle="italic"
                  fill="var(--color-ink)"
                >
                  {n}
                </text>
              );
            })}
          </svg>
        </div>

        <div className="tag text-[var(--color-stone)] mb-8 md:mb-10 rise rise-1">
          <span className="inline-block w-2 h-2 bg-[var(--color-rust)] rounded-full mr-2 align-middle" />
          Est. 1991 · Custom Promotional Watches · Made for Brands
        </div>

        <h1 className="display text-[16vw] md:text-[12vw] lg:text-[180px] leading-[0.84] max-w-[18ch] rise rise-2">
          We make
          <br />
          <span className="serif-italic lowercase">time</span>
          <br />
          worth
          <br />
          wearing.
        </h1>

        <div className="mt-10 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-12 rise rise-3">
          <p className="md:col-span-6 lg:col-span-5 text-xl md:text-2xl leading-snug max-w-[42ch]">
            We design, develop, and deliver custom watches for the brands
            people remember. Promotional, corporate gifting, retail capsules
            — built with the obsession of a watchmaker and the speed of a
            studio.
          </p>
          <div className="md:col-span-6 lg:col-start-9 lg:col-span-4 self-end">
            <div className="tag text-[var(--color-stone)] mb-3">
              Currently building for
            </div>
            <div className="display text-3xl md:text-4xl leading-none">
              Fortune 500s,
              <br />
              <span className="serif-italic lowercase">indie</span> labels,
              <br />& everyone in
              <br />
              between.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
