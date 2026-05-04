"use client";

import { useEffect, useState, type ReactNode } from "react";

const FREIGHT_OPTIONS = [
  "UPS Ground",
  "UPS Next Day Air",
  "UPS 2nd Day Air",
  "UPS 3 Day Select",
  "FedEx Ground",
  "FedEx Express Saver",
  "FedEx 2Day",
  "FedEx Priority Overnight",
  "USPS Priority",
  "Best Way (vendor's choice)",
  "Customer Pickup",
];

const COUNTRIES = ["United States", "Canada", "Mexico", "Other"];

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC","PR",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  extension: string;
  fax: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zip: string;
  freight: string;
  useMyShipper: boolean;
  shipperNumber: string;
  asi: string;
  ppai: string;
  sage: string;
  upic: string;
  message: string;
  captcha: string;
};

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  extension: "",
  fax: "",
  address: "",
  country: "United States",
  state: "",
  city: "",
  zip: "",
  freight: "",
  useMyShipper: false,
  shipperNumber: "",
  asi: "",
  ppai: "",
  sage: "",
  upic: "",
  message: "",
  captcha: "",
};

// Simple math captcha — random A + B. Re-rolls on every page load.
function generateCaptcha() {
  const a = Math.floor(Math.random() * 8) + 2; // 2..9
  const b = Math.floor(Math.random() * 8) + 2;
  return { a, b, answer: a + b };
}

export default function OrderForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: 0 });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  // Captcha is generated on the client only to avoid an SSR hydration mismatch.
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.company.trim()) e.company = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.zip.trim()) e.zip = "Required";
    if (form.country === "United States" && !form.state) e.state = "Required";
    if (form.useMyShipper && !form.shipperNumber.trim())
      e.shipperNumber = "Required when using your own shipper";
    if (!form.captcha.trim()) e.captcha = "Required";
    else if (Number(form.captcha.trim()) !== captcha.answer)
      e.captcha = "Wrong answer — please try again";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) {
      // If the captcha was wrong, roll a new one so bots can't brute-force.
      if (errors.captcha || Number(form.captcha) !== captcha.answer) {
        setCaptcha(generateCaptcha());
        update("captcha", "");
      }
      // Scroll to first error
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Build a structured email body. Open user's mail client with everything filled.
    const lines = [
      "CATALOG REQUEST",
      "",
      `Name: ${form.firstName} ${form.lastName}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}${form.extension ? ` ext. ${form.extension}` : ""}`,
      form.fax ? `Fax: ${form.fax}` : "",
      "",
      "SHIP TO",
      form.address,
      `${form.city}, ${form.state} ${form.zip}`,
      form.country,
      "",
      `Freight: ${form.freight || "—"}`,
      form.useMyShipper && form.shipperNumber
        ? `Use my shipper #: ${form.shipperNumber}`
        : "",
      "",
      "INDUSTRY IDS",
      form.asi ? `ASI: ${form.asi}` : "ASI: —",
      form.ppai ? `PPAI: ${form.ppai}` : "PPAI: —",
      form.sage ? `SAGE: ${form.sage}` : "SAGE: —",
      form.upic ? `UPIC: ${form.upic}` : "UPIC: —",
      "",
      "MESSAGE",
      form.message || "(none)",
    ].filter((l) => l !== "");

    const subject = `Catalog request — ${form.company}`;
    const body = lines.join("\n");
    const mailto = `mailto:hello@timezoneus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[1600px] mx-auto">
        <div className="border border-[var(--color-brass)]/40 bg-[var(--color-bone-deep)] p-8 md:p-12 text-center">
          <div className="tag text-[var(--color-brass)] mb-3 uppercase tracking-[0.18em]">
            Submitted
          </div>
          <h2 className="display text-3xl md:text-5xl mb-4">
            Your email is being prepared.
          </h2>
          <p className="text-base md:text-lg text-[var(--color-stone)] max-w-[60ch] mx-auto">
            Your default email client should have opened with the request
            pre-filled. Just hit send. We&rsquo;ll respond within 48 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm(EMPTY_FORM);
              setCaptcha(generateCaptcha());
              window.scrollTo({ top: 0 });
            }}
            className="tag mt-8 inline-flex items-center gap-2 border border-white/30 px-5 py-3 hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
          >
            Submit another
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-10 pb-24 md:pb-32 max-w-[1100px] mx-auto">
      <form onSubmit={handleSubmit} noValidate>
        <FormSection title="Your details" number="01">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <Field label="First name" required error={errors.firstName}>
              <Input
                value={form.firstName}
                onChange={(v) => update("firstName", v)}
                autoComplete="given-name"
              />
            </Field>
            <Field label="Last name" required error={errors.lastName}>
              <Input
                value={form.lastName}
                onChange={(v) => update("lastName", v)}
                autoComplete="family-name"
              />
            </Field>
            <Field label="Email" required error={errors.email}>
              <Input
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                autoComplete="email"
              />
            </Field>
            <Field label="Company" required error={errors.company}>
              <Input
                value={form.company}
                onChange={(v) => update("company", v)}
                autoComplete="organization"
              />
            </Field>
            <div className="grid grid-cols-3 gap-4 md:col-span-2">
              <div className="col-span-2">
                <Field label="Phone" required error={errors.phone}>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    autoComplete="tel"
                  />
                </Field>
              </div>
              <Field label="Ext.">
                <Input
                  value={form.extension}
                  onChange={(v) => update("extension", v)}
                />
              </Field>
            </div>
            <Field label="Fax">
              <Input value={form.fax} onChange={(v) => update("fax", v)} />
            </Field>
          </div>
        </FormSection>

        <FormSection title="Shipping address" number="02">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div className="md:col-span-2">
              <Field label="Address" required error={errors.address}>
                <Input
                  value={form.address}
                  onChange={(v) => update("address", v)}
                  autoComplete="street-address"
                />
              </Field>
            </div>
            <Field label="Country">
              <Select
                value={form.country}
                onChange={(v) => update("country", v)}
                options={COUNTRIES}
              />
            </Field>
            <Field label="State / region" required={form.country === "United States"} error={errors.state}>
              {form.country === "United States" ? (
                <Select
                  value={form.state}
                  onChange={(v) => update("state", v)}
                  options={["", ...US_STATES]}
                  placeholder="Select state"
                />
              ) : (
                <Input
                  value={form.state}
                  onChange={(v) => update("state", v)}
                  autoComplete="address-level1"
                />
              )}
            </Field>
            <Field label="City" required error={errors.city}>
              <Input
                value={form.city}
                onChange={(v) => update("city", v)}
                autoComplete="address-level2"
              />
            </Field>
            <Field label="ZIP / postal" required error={errors.zip}>
              <Input
                value={form.zip}
                onChange={(v) => update("zip", v)}
                autoComplete="postal-code"
              />
            </Field>
          </div>
        </FormSection>

        <FormSection title="Shipping & freight" number="03">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <Field label="Freight type">
              <Select
                value={form.freight}
                onChange={(v) => update("freight", v)}
                options={["", ...FREIGHT_OPTIONS]}
                placeholder="Select freight"
              />
            </Field>
            <div>
              <label className="flex items-center gap-3 cursor-pointer mt-7">
                <input
                  type="checkbox"
                  checked={form.useMyShipper}
                  onChange={(e) => update("useMyShipper", e.target.checked)}
                  className="w-4 h-4 accent-[var(--color-brass)]"
                />
                <span className="text-sm text-[var(--color-ink-soft)]">
                  Use my shipper number
                </span>
              </label>
            </div>
            {form.useMyShipper && (
              <div className="md:col-span-2">
                <Field
                  label="Shipper number"
                  required
                  error={errors.shipperNumber}
                >
                  <Input
                    value={form.shipperNumber}
                    onChange={(v) => update("shipperNumber", v)}
                  />
                </Field>
              </div>
            )}
          </div>
        </FormSection>

        <FormSection
          title="Industry IDs"
          number="04"
          subtitle="All optional — fill in any that apply"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            <Field label="ASI">
              <Input value={form.asi} onChange={(v) => update("asi", v)} />
            </Field>
            <Field label="PPAI">
              <Input value={form.ppai} onChange={(v) => update("ppai", v)} />
            </Field>
            <Field label="SAGE">
              <Input value={form.sage} onChange={(v) => update("sage", v)} />
            </Field>
            <Field label="UPIC">
              <Input value={form.upic} onChange={(v) => update("upic", v)} />
            </Field>
          </div>
        </FormSection>

        <FormSection title="Anything else" number="05">
          <Field label="Message">
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={5}
              placeholder="Tell us about the project, deadlines, target landing date, run size, anything that helps us scope a quote."
              className="w-full bg-[var(--color-bone-deep)] border border-[var(--color-ink)]/15 focus:border-[var(--color-brass)] focus:bg-[var(--color-bone)] outline-none rounded-md px-4 py-3 text-base placeholder:text-[var(--color-stone)] transition-colors resize-y"
            />
          </Field>
        </FormSection>

        {/* Captcha + submit */}
        <div className="mt-12 pt-8 border-t border-[var(--color-ink)]/15">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-end">
            <Field
              label={`Verify you're human — what is ${captcha.a} + ${captcha.b}?`}
              required
              error={errors.captcha}
            >
              <Input
                value={form.captcha}
                onChange={(v) => update("captcha", v.replace(/\D/g, ""))}
                placeholder="Answer"
                autoComplete="off"
                inputMode="numeric"
              />
            </Field>
            <button
              type="submit"
              className="tag inline-flex items-center justify-center gap-2 bg-[var(--color-brass)] text-black px-6 py-4 hover:bg-[var(--color-brass-bright)] transition-colors whitespace-nowrap text-sm md:text-base"
            >
              Submit request
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="mt-4 text-xs text-[var(--color-stone)]">
            Submitting opens your email client with the request pre-filled.
            Required fields marked <span className="text-[var(--color-brass)]">*</span>.
          </p>
        </div>
      </form>
    </section>
  );
}

// ── Layout helpers ─────────────────────────────────────────────────────────

function FormSection({
  title,
  subtitle,
  number,
  children,
}: {
  title: string;
  subtitle?: string;
  number: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-8 first:mt-0 pt-8 border-t border-[var(--color-ink)]/15 first:pt-0 first:border-t-0">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="display text-2xl md:text-3xl text-[var(--color-stone)]">
          {number}
        </span>
        <div>
          <h2 className="display text-2xl md:text-3xl leading-none">{title}</h2>
          {subtitle && (
            <p className="text-sm text-[var(--color-stone)] mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block" data-error={error ? "true" : undefined}>
      <span className="tag block mb-2 text-[var(--color-stone)] uppercase tracking-[0.16em]">
        {label}
        {required && <span className="text-[var(--color-brass)] ml-1">*</span>}
      </span>
      {children}
      {error && (
        <span className="block mt-1 text-xs text-[var(--color-rust)]">
          {error}
        </span>
      )}
    </label>
  );
}

function Input({
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
}: {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "tel" | "email" | "text";
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
      className="w-full bg-[var(--color-bone-deep)] border border-[var(--color-ink)]/15 focus:border-[var(--color-brass)] focus:bg-[var(--color-bone)] outline-none rounded-md px-4 py-3 text-base placeholder:text-[var(--color-stone)] transition-colors"
    />
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[var(--color-bone-deep)] border border-[var(--color-ink)]/15 focus:border-[var(--color-brass)] focus:bg-[var(--color-bone)] outline-none rounded-md px-4 py-3 text-base text-[var(--color-ink)] transition-colors appearance-none bg-no-repeat bg-right pr-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23a8a297' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
        backgroundPosition: "right 14px center",
      }}
    >
      {options.map((opt) =>
        opt === "" ? (
          <option key="empty" value="">
            {placeholder ?? "—"}
          </option>
        ) : (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ),
      )}
    </select>
  );
}
