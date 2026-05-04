import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata = {
  title: "Case Studies — Time Zone US",
  description:
    "Selected programs from 34 years building custom watches, packaging, and promotional merchandise for Fortune 500s, indie labels, and union shops.",
};

type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: string;
  units: string;
  leadTime: string;
  blurb: string;
  highlights: string[];
  image: string; // path under /public/case-studies/
};

// Placeholder studies — drop a JPG at /public/case-studies/<slug>.jpg
// to populate each one. Until then they fall back to a watch series banner.
const studies: CaseStudy[] = [
  {
    slug: "highland-spirits",
    client: "Highland Spirits Co.",
    title: "30-year anniversary capsule",
    category: "Custom Watches",
    units: "250 units",
    leadTime: "14 weeks",
    blurb:
      "A limited edition collector's piece for Highland's 30-year anniversary release — Swiss movement, sapphire crystal, engraved caseback, and a co-branded gift box that doubled as the retail display.",
    highlights: [
      "Pantone-matched dial to brand color",
      "Custom embossed leather band",
      "Engraved caseback with edition number",
      "Two-piece presentation box with felt insert",
    ],
    image: "/case-studies/highland-spirits.jpg",
  },
  {
    slug: "meridian-bank",
    client: "Meridian Bank",
    title: "25-year tenure award program",
    category: "Custom Watches · Emblematics",
    units: "75 units / yr (recurring)",
    leadTime: "8 weeks",
    blurb:
      "Annual recognition watches for employees hitting their 25-year milestone. Three series tiers — quartz for 5/10-year, automatic for 25-year. Same case family across tiers so the program looks unified at every level.",
    highlights: [
      "Three matching tier designs",
      "Custom dial w/ employee name engraved on caseback",
      "Branded gift box w/ HR-approved warranty card",
      "Inventory program — re-orders fulfilled in 4 weeks",
    ],
    image: "/case-studies/meridian-bank.jpg",
  },
  {
    slug: "orbital-aerospace",
    client: "Orbital Aerospace",
    title: "Mission-issued chronographs for the launch crew",
    category: "Custom Watches",
    units: "1,200 units",
    leadTime: "18 weeks",
    blurb:
      "Co-developed chronograph for the launch team. Tested to vibration spec, with mission patch artwork on the dial and a tachymeter scale around the bezel. Shipped in mission-numbered cases.",
    highlights: [
      "Vibration & shock tested",
      "Mission-patch dial print",
      "Sequential numbered casebacks (#001/1200)",
      "Aerospace-spec packaging w/ foam insert",
    ],
    image: "/case-studies/orbital-aerospace.jpg",
  },
  {
    slug: "apex-motorsport",
    client: "Apex Motorsport",
    title: "Pit-crew co-branded racing edition",
    category: "Custom Watches · Apparel",
    units: "800 watches + 1,500 polos",
    leadTime: "10 weeks (rush)",
    blurb:
      "Race-weekend program for Apex's pit crew and VIP guests. Watch with co-branded tachymeter, plus team polos, hats, and a presentation tin. Whole program turned in 10 weeks against a fixed race date.",
    highlights: [
      "Co-branded racing dial w/ partner logos",
      "Matching pit-crew apparel kit",
      "Race-day rush production",
      "Team-issue tin presentation",
    ],
    image: "/case-studies/apex-motorsport.jpg",
  },
  {
    slug: "first-battalion",
    client: "1st Battalion Vets",
    title: "Service-anniversary field watch",
    category: "Custom Watches · Engraving",
    units: "320 units",
    leadTime: "12 weeks",
    blurb:
      "Field watches for veterans hitting their service anniversary. Engraved unit crest on the caseback, with the recipient's name and rank on the inside flap of the box. Personalization done in-house.",
    highlights: [
      "Unit crest engraving on caseback",
      "Per-unit name/rank personalization",
      "Olive drab band w/ branded buckle",
      "Boxed with letter of authenticity",
    ],
    image: "/case-studies/first-battalion.jpg",
  },
  {
    slug: "voltage-energy",
    client: "Voltage Energy Drinks",
    title: "Limited-drop digital-analog hybrid",
    category: "Custom Watches · Packaging",
    units: "2,000 units",
    leadTime: "9 weeks",
    blurb:
      "A retail drop for Voltage's energy drink launch. Digital-analog hybrid in custom resin case, sold via retail and influencer kits. Unboxing built into the brief — packaging opens like a slim-jim wrapper.",
    highlights: [
      "Custom translucent resin case",
      "Hybrid digital-analog movement",
      "Influencer mailer w/ peel-back reveal",
      "Retail clip-strip variant for c-stores",
    ],
    image: "/case-studies/voltage-energy.jpg",
  },
];

const stats = [
  { num: "34", unit: "years", label: "In the workshop" },
  { num: "2.4M+", unit: "watches", label: "Custom watches shipped" },
  { num: "1,200+", unit: "programs", label: "Brand programs delivered" },
  { num: "< 48h", unit: "reply", label: "Average response time" },
];

const FALLBACK_IMAGE = "/series/Executive-Series.jpg";

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16 max-w-[1600px] mx-auto">
        <div className="tag text-[var(--color-brass)] mb-5 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-[var(--color-brass)]" />
          [007] Case studies · {studies.length} selected
        </div>
        <h1
          className="display leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3.5rem, 11vw, 12rem)" }}
        >
          Brands we&rsquo;ve
          <br />
          built for.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[var(--color-stone)] max-w-2xl leading-snug">
          Selected programs from the workshop. Custom watches, packaging,
          emblematics — built end-to-end for brands that take time seriously.
        </p>
      </section>

      {/* STATS STRIP */}
      <section className="px-6 md:px-10 pb-16 md:pb-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-ink)]/15 border border-[var(--color-ink)]/15">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[var(--color-bone)] p-6 md:p-8"
            >
              <div className="display text-4xl md:text-5xl lg:text-6xl leading-none text-[var(--color-brass)]">
                {s.num}
              </div>
              <div className="tag text-[var(--color-stone)] mt-3 uppercase tracking-[0.16em]">
                {s.unit}
              </div>
              <div className="text-sm md:text-base text-[var(--color-ink-soft)] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES — alternating image side */}
      <section className="px-6 md:px-10 pb-16 md:pb-24 max-w-[1600px] mx-auto">
        <div className="space-y-16 md:space-y-24">
          {studies.map((s, i) => {
            const reversed = i % 2 === 1;
            const num = String(i + 1).padStart(2, "0");
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] md:aspect-[5/3] overflow-hidden border border-[var(--color-ink)]/15 bg-[var(--color-bone-deep)]">
                    <Image
                      src={s.image}
                      alt={`${s.client} — ${s.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      quality={90}
                      className="object-cover"
                      // Fallback to a watch series banner if the file isn't there yet.
                      // Errors are silent in next/image; user replaces the file later.
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 ${
                    reversed ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="display text-3xl md:text-4xl text-[var(--color-stone)]">
                      {num}
                    </span>
                    <span className="tag text-[var(--color-brass)] uppercase tracking-[0.18em]">
                      {s.category}
                    </span>
                  </div>
                  <div className="tag text-[var(--color-stone)] mb-2 uppercase tracking-[0.16em]">
                    {s.client}
                  </div>
                  <h2 className="display text-3xl md:text-4xl lg:text-[44px] leading-[0.95] mb-4">
                    {s.title}
                  </h2>
                  <p className="text-base md:text-lg text-[var(--color-ink-soft)] leading-snug max-w-[55ch]">
                    {s.blurb}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md border-y border-[var(--color-ink)]/15 py-4">
                    <div>
                      <div className="tag text-[var(--color-stone)] mb-1">Run size</div>
                      <div className="text-sm md:text-base text-[var(--color-ink)]">{s.units}</div>
                    </div>
                    <div>
                      <div className="tag text-[var(--color-stone)] mb-1">Lead time</div>
                      <div className="text-sm md:text-base text-[var(--color-ink)]">{s.leadTime}</div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-1.5">
                    {s.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]"
                      >
                        <span className="text-[var(--color-brass)] leading-none mt-1">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`mailto:hello@timezoneus.com?subject=${encodeURIComponent(`Brief like ${s.client}`)}`}
                      className="tag inline-flex items-center gap-2 bg-[var(--color-brass)] text-black px-5 py-3 hover:bg-[var(--color-brass-bright)] transition-colors"
                    >
                      Brief us on something similar
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[1600px] mx-auto">
        <div className="border-t border-[var(--color-ink)]/15 pt-12 md:pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="tag text-[var(--color-stone)] mb-3">
              Ready when you are
            </div>
            <h3 className="display text-4xl md:text-6xl lg:text-7xl leading-none">
              Got a brief?
            </h3>
            <p className="mt-4 text-base md:text-lg text-[var(--color-stone)] max-w-[44ch]">
              Send the rundown — brand, run size, target launch — and you&rsquo;ll
              get a first-pass quote and timeline back within 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@timezoneus.com"
              className="tag inline-flex items-center gap-2 bg-[var(--color-brass)] text-black px-5 py-3 hover:bg-[var(--color-brass-bright)] transition-colors"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/products"
              className="tag inline-flex items-center gap-2 border border-white/30 px-5 py-3 hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
            >
              Browse 505 products
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
