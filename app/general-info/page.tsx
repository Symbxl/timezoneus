import Nav from "../components/Nav";

export const metadata = {
  title: "General Info — Time Zone US",
  description:
    "Production details, art requirements, rush options, fulfillment, packaging, and contract terms for Time Zone orders.",
};

export default function GeneralInfoPage() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16 max-w-[1100px] mx-auto">
        <div className="tag text-[var(--color-brass)] mb-5 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-[var(--color-brass)]" />
          [009] Reference · General Info
        </div>
        <h1
          className="display leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          GENERAL INFO
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[var(--color-stone)] max-w-2xl leading-snug">
          Production details, art requirements, rush options, fulfillment,
          packaging, and contract terms.
        </p>
      </section>

      {/* BODY */}
      <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[860px] mx-auto">
        <article className="prop65-prose">
          <h2>General Info</h2>

          <h3>Union Factory</h3>
          <p>Workers are represented by SEIU Local 252.</p>

          <h3>Artwork</h3>
          <p>
            All art should be vector-based as either Adobe Illustrator, EPS,
            SVG or PDF with all fonts converted to curves. Black and white
            camera ready art can be accepted. Size should be 100% to 400%. All
            art with more than one color should be separated. Art &amp;
            Typesetting is charged at $45(V) per hour.
          </p>

          <h3>Laser Engraving</h3>
          <p>Available with cost based on size of area.</p>

          <h3>Paper Proof &amp; Acknowledgment</h3>
          <p>
            Sent with new orders as PDF via email; Acknowledgment only on
            reorders &mdash; Proof $10(Z). Pre-Production Proof &mdash; $45(V)
            per color plus product cost.
          </p>

          <h3>Rush Orders</h3>
          <p>
            Check with factory. Fastest RUSH is 3 working days ($100Z); other
            RUSH service: 5 working days ($75Z) and 7 working days ($50Z).
          </p>

          <h3>FOB</h3>
          <p>
            Most shipments are shipped insured FOB 19003 Pennsylvania. All
            disputes are governed by the following&mdash;All claims for
            shortages must be made within 5 days of receipt with weight, count
            and signee information verified. All damaged package claims should
            be made direct with carrier upon receipt. Claims for defective
            merchandise must be made within 30 days. Requests to return
            merchandise for any reason require a Return Authorization Number
            (RA). Factory will specify return method when applicable.
          </p>

          <h3>Fulfillment | Drop Shipments</h3>
          <p>
            Each location shipped billed $8(Z) plus freight cost. Individual
            fulfillment is $0.50(Z) each plus freight costs. Excel Files are
            required for fulfillment of three or more locations.
          </p>

          <h3>Flat Mailers</h3>
          <p>
            Certain products can be packaged in flat mailer envelopes to save
            postage. Contact factory. Packaging &mdash; Clock products are
            individually gift boxed. Mirrors and photo frames are poly bagged
            or packed with protective separators with gift boxing usually an
            option at an additional charge.
          </p>

          <h3>Gift Wrap</h3>
          <p>Quoted based on product and wrapping material.</p>

          <h3>Batteries</h3>
          <p>Most clocks are supplied with batteries. US Alkaline adds $0.50(V).</p>

          <h3>Union Bug</h3>
          <p>
            Union bug imprint will be on your product if requested on your
            purchase order. If not on your paper proof, notify us.
          </p>

          <h3>Contract Terms</h3>
          <p>
            The governing law pertaining to any orders will be the law of the
            State of Pennsylvania. Flood Coated Acrylic &mdash; A full bleed
            imprint on the back of clear acrylic allows us to color the
            background PMS to match your corporate specification. We screen
            the back or second surface to produce a rich finish. The front of
            the acrylic is clear and may be imprinted to add depth to your
            product. Set up is additional for this technique and usually noted
            on products where this method is used.
          </p>

          <h3>Acrylic Charges and Colors</h3>
          <p>
            Standard acrylic colors &mdash; frost, black, smoke, clear, white,
            mirror and clear with flood. Flood is a screened background in
            color of choice. Additional charges for certain items in frosts
            and mirror may occur.
          </p>

          <h3>PMS Match</h3>
          <p>PMS match available with a charge of $20(V). No charge on watches.</p>

          <h3>Set Ups</h3>
          <p>
            Most Acrylic products have a set up Charge of $50(V) per color.
            Those with a flood shown have a set up $70(V). Set ups for repeat
            orders are 50% of original order.
          </p>

          <h3>Studs</h3>
          <p>
            To add studs any product not already shown with studs add $0.60(V).
            Normally these items are packed unassembled for protection.
          </p>

          <h3>Gift Boxes</h3>
          <p>
            Standard packing is a white pop gift box for clocks. Gift boxes for
            frames will be quoted based on size as will any mailer box
            requirements.
          </p>

          <h3>Custom Shaping</h3>
          <p>
            Any product not shown with a shape will probably accommodate one.
            Please call for help if needed.
          </p>
        </article>
      </section>
    </main>
  );
}
