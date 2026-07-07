import Nav from "../components/Nav";

export const metadata = {
  title: "Prop 65 — Time Zone US",
  description:
    "Proposition 65 in plain language: California's Safe Drinking Water and Toxic Enforcement Act of 1986, what it requires, and how it's enforced.",
};

export default function Prop65Page() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <div className="prop65-page">
      {/* HERO */}
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16 max-w-[1100px] mx-auto">
        <div className="tag text-[var(--color-brass)] mb-5 flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-[var(--color-brass)]" />
          [008] Compliance · Proposition 65
        </div>
        <h1
          className="display leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          PROP-65
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[var(--color-stone)] max-w-2xl leading-snug">
          For more info please visit:{" "}
          <a
            href="https://oehha.ca.gov/proposition-65/general-info/proposition-65-plain-language"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-brass)] underline underline-offset-4 hover:text-[var(--color-brass-bright)] break-words"
          >
            oehha.ca.gov/proposition-65/general-info/proposition-65-plain-language
          </a>
        </p>
      </section>

      {/* BODY */}
      <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[860px] mx-auto">
        <article className="prop65-prose">
          <h2>Proposition 65 in Plain Language</h2>
          <p className="tag text-[var(--color-stone)] mb-8">August 1, 2017</p>

          <h3>What Is Proposition 65?</h3>
          <p>
            In 1986, California voters approved an initiative to address their
            growing concerns about exposure to toxic chemicals. That initiative
            became the Safe Drinking Water and Toxic Enforcement Act of 1986,
            better known by its original name of Proposition 65. Proposition 65
            requires the State to publish a list of chemicals known to cause
            cancer or birth defects or other reproductive harm. This list,
            which must be updated at least once a year, has grown to include
            over 800 chemicals since it was first published in 1987.
          </p>
          <p>
            Proposition 65 requires businesses to notify Californians about
            significant amounts of chemicals in the products they purchase, in
            their homes or workplaces, or that are released into the
            environment. By providing this information, Proposition 65 enables
            Californians to make informed decisions about protecting themselves
            from exposure to these chemicals. Proposition 65 also prohibits
            California businesses from knowingly discharging significant
            amounts of listed chemicals into sources of drinking water.
          </p>
          <p>
            The Office of Environmental Health Hazard Assessment (OEHHA)
            administers the Proposition 65 program. OEHHA, which is part of
            the California Environmental Protection Agency (CalEPA), also
            evaluates scientific information on substances considered for
            placement on the Proposition 65 list.
          </p>

          <h3>What types of chemicals are on the Proposition 65 list?</h3>
          <p>
            The list contains a wide range of naturally occurring and synthetic
            chemicals that are known to cause cancer or birth defects or other
            reproductive harm. These chemicals include additives or ingredients
            in pesticides, common household products, food, drugs, dyes, or
            solvents. Listed chemicals may also be used in manufacturing and
            construction, or they may be byproducts of chemical processes,
            such as motor vehicle exhaust.
          </p>

          <h3>How is a chemical added to the list?</h3>
          <p>
            There are four principal ways for a chemical to be added to the
            Proposition 65 list. A chemical can be listed if either of two
            independent committees of scientists and health professionals finds
            that the chemical has been clearly shown to cause cancer or birth
            defects or other reproductive harm. These two committees—the
            Carcinogen Identification Committee (CIC) and the Developmental
            and Reproductive Toxicant (DART) Identification Committee—are part
            of OEHHA&rsquo;s Science Advisory Board. The committee members are
            appointed by the Governor and are designated as the &ldquo;State&rsquo;s
            Qualified Experts&rdquo; for evaluating chemicals under Proposition
            65. When determining whether a chemical should be placed on the
            list, the committees base their decisions on the most current
            scientific information available. OEHHA staff scientists compile
            all relevant scientific evidence on various chemicals for the
            committees to review. The committees also consider comments from
            the public before making their decisions.
          </p>
          <p>
            A second way for a chemical to be listed is if an organization
            designated as an &ldquo;authoritative body&rdquo; by the CIC or DART
            Identification Committee has identified it as causing cancer or
            birth defects or other reproductive harm. The following
            organizations have been designated as authoritative bodies: the
            U.S. Environmental Protection Agency, U.S. Food and Drug
            Administration (U.S. FDA), National Institute for Occupational
            Safety and Health, National Toxicology Program, and International
            Agency for Research on Cancer.
          </p>
          <p>
            A third way for a chemical to be listed is if an agency of the
            state or federal government requires that it be labeled or
            identified as causing cancer or birth defects or other reproductive
            harm. Most chemicals listed in this manner are prescription drugs
            that are required by the U.S. FDA to contain warnings relating to
            cancer or birth defects or other reproductive harm.
          </p>
          <p>
            A fourth way requires the listing of chemicals meeting certain
            scientific criteria and identified in the California Labor Code as
            causing cancer or birth defects or other reproductive harm. This
            method established the initial chemical list following voter
            approval of Proposition 65 in 1986 and continues to be used as a
            basis for listing as appropriate.
          </p>

          <h3>
            What requirements does Proposition 65 place on companies doing
            business in California?
          </h3>
          <p>
            Businesses are required to provide Clear and Reasonable Warnings
            before knowingly and intentionally exposing anyone to a listed
            chemical. This warning can be given by a variety of means, such as
            by labeling a consumer product, posting signs at the workplace,
            distributing notices at a rental housing complex, or publishing
            notices in a newspaper. Once a chemical is listed, businesses have
            12 months to comply with warning requirements.
          </p>
          <p>
            Proposition 65 also prohibits companies that do business within
            California from knowingly discharging listed chemicals into sources
            of drinking water. Once a chemical is listed, businesses have 20
            months to comply with the discharge prohibition.
          </p>
          <p>
            Businesses with less than 10 employees and government agencies are
            exempt from Proposition 65&rsquo;s warning requirements and prohibition
            on discharges into drinking water sources. Businesses are also
            exempt from the warning requirement and discharge prohibition if
            the exposures they cause are so low as to create no significant
            risk of cancer or birth defects or other reproductive harm. Health
            risks are explained in more detail below.
          </p>

          <h3>What does a warning mean?</h3>
          <p>
            If a warning is placed on a product label or posted or distributed
            at the workplace, a business, or in rental housing, the business
            issuing the warning is aware or believes that one or more listed
            chemicals is present. By law, a warning must be given for listed
            chemicals unless exposure is low enough to pose no significant risk
            of cancer or is significantly below levels observed to cause birth
            defects or other reproductive harm.
          </p>
          <p>
            For chemicals that are listed as causing cancer, the &ldquo;no
            significant risk level&rdquo; is defined as the level of exposure
            that would result in not more than one excess case of cancer in
            100,000 individuals exposed to the chemical over a 70-year
            lifetime. In other words, a person exposed to the chemical at the
            &ldquo;no significant risk level&rdquo; for 70 years would not have
            more than a &ldquo;one in 100,000&rdquo; chance of developing
            cancer as a result of that exposure.
          </p>
          <p>
            For chemicals that are listed as causing birth defects or
            reproductive harm, the &ldquo;no observable effect level&rdquo; is
            determined by identifying the level of exposure that has been shown
            to not pose any harm to humans or laboratory animals. Proposition
            65 then requires this &ldquo;no observable effect level&rdquo; to
            be divided by 1,000 in order to provide an ample margin of safety.
            Businesses subject to Proposition 65 are required to provide a
            warning if they cause exposures to chemicals listed as causing
            birth defects or reproductive harm that exceed 1/1000th of the
            &ldquo;no observable effect level.&rdquo;
          </p>
          <p>
            To further assist businesses, OEHHA develops numerical guidance
            levels, known as &ldquo;safe harbor numbers&rdquo; (described
            below) for determining whether a warning is necessary or whether
            discharges of a chemical into drinking water sources are
            prohibited. However, a business may choose to provide a warning
            simply based on its knowledge, or assumption, about the presence
            of a listed chemical without attempting to evaluate the levels of
            exposure. Because businesses do not file reports with OEHHA
            regarding what warnings they have issued and why, OEHHA is not
            able to provide further information about any particular warning.
            The business issuing the warning should be contacted for specific
            information, such as what chemicals are present, and at what
            levels, as well as how exposure to them may occur.
          </p>

          <h3>What are safe harbor levels?</h3>
          <p>
            As stated above, to guide businesses in determining whether a
            warning is necessary or whether discharges of a chemical into
            drinking water sources are prohibited, OEHHA has developed safe
            harbor levels. A business has &ldquo;safe harbor&rdquo; from
            Proposition 65 warning requirements or discharge prohibitions if
            exposure to a chemical occurs at or below these levels. These safe
            harbor levels consist of No Significant Risk Levels for chemicals
            listed as causing cancer and Maximum Allowable Dose Levels for
            chemicals listed as causing birth defects or other reproductive
            harm. OEHHA has established over 300 safe harbor levels to date
            and continues to develop more levels for listed chemicals.
          </p>

          <h3>What if there is no safe harbor level?</h3>
          <p>
            If there is no safe harbor level for a chemical, businesses that
            expose individuals to that chemical would be required to provide a
            Proposition 65 warning, unless the business can show that the
            anticipated exposure level will not pose a significant risk of
            cancer or reproductive harm. OEHHA has adopted regulations that
            provide guidance for calculating a level in the absence of a safe
            harbor level. Regulations are available at Article 7 and Article 8
            of Title 27, California Code of Regulations. Determining
            anticipated levels of exposure to listed chemicals can be very
            complex. Although a business has the burden of proving a warning
            is not required, a business is discouraged from providing a
            warning that is not necessary and instead should consider
            consulting a qualified professional if it believes an exposure to
            a listed chemical may not require a Proposition 65 warning.
          </p>

          <h3>Who enforces Proposition 65?</h3>
          <p>
            The California Attorney General&rsquo;s Office enforces Proposition
            65. Any district attorney or city attorney (for cities whose
            population exceeds 750,000) may also enforce Proposition 65. In
            addition, any individual acting in the public interest may enforce
            Proposition 65 by filing a lawsuit against a business alleged to
            be in violation of this law. Lawsuits have been filed by the
            Attorney General&rsquo;s Office, district attorneys, consumer
            advocacy groups, and private citizens and law firms. Penalties for
            violating Proposition 65 by failing to provide notices can be as
            high as $2,500 per violation per day.
          </p>

          <h3>
            How is Proposition 65 meeting its goal of reducing exposure to
            hazardous chemicals in California?
          </h3>
          <p>
            Since it was passed in 1986, Proposition 65 has provided
            Californians with information they can use to reduce their
            exposures to listed chemicals that may not have been adequately
            controlled under other State or federal laws. This law has also
            increased public awareness about the adverse effects of exposures
            to listed chemicals. For example, Proposition 65 has resulted in
            greater awareness of the dangers of alcoholic beverage consumption
            during pregnancy. Alcohol consumption warnings are perhaps the
            most visible health warnings issued as a result of Proposition 65.
          </p>
          <p>
            Proposition 65&rsquo;s warning requirement has provided an
            incentive for manufacturers to remove listed chemicals from their
            products. For example, trichloroethylene, which causes cancer, is
            no longer used in most correction fluids; reformulated paint
            strippers do not contain the carcinogen methylene chloride; and
            toluene, which causes birth defects or other reproductive harm,
            has been removed from many nail care products. In addition, a
            Proposition 65 enforcement action prompted manufacturers to
            decrease the lead content in ceramic tableware and wineries to
            eliminate the use of lead-containing foil caps on wine bottles.
          </p>
          <p>
            Proposition 65 has also succeeded in spurring significant
            reductions in California of air emissions of listed chemicals,
            such as ethylene oxide, hexavalent chromium, and chloroform.
          </p>
          <p>
            Although Proposition 65 has benefited Californians, it has come at
            a cost for companies doing business in the state. They have
            incurred expenses to test products, develop alternatives to listed
            chemicals, reduce discharges, provide warnings, and otherwise
            comply with this law. Recognizing that compliance with Proposition
            65 comes at a price, OEHHA is working to make the law&rsquo;s
            regulatory requirements as clear as possible and ensure that
            chemicals are listed in accordance with rigorous science in an
            open public process.
          </p>

          <h3>Where can I get more information on Proposition 65?</h3>
          <p>
            For general information on the Proposition 65 list of chemicals,
            you may contact OEHHA&rsquo;s Proposition 65 program at (916)
            445-6900, or visit{" "}
            <a
              href="http://www.oehha.ca.gov/prop65.html"
              target="_blank"
              rel="noreferrer"
            >
              oehha.ca.gov/prop65.html
            </a>
            . For enforcement information, contact the California Attorney
            General&rsquo;s Office at (510) 873-6321, or visit{" "}
            <a
              href="https://oag.ca.gov/prop65"
              target="_blank"
              rel="noreferrer"
            >
              oag.ca.gov/prop65
            </a>
            .
          </p>
        </article>
      </section>
      </div>
    </main>
  );
}
