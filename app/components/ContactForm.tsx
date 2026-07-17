"use client";

import {
  cloneElement,
  isValidElement,
  useId,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

const TOPICS = [
  "New project",
  "Press inquiry",
  "Catalog / product question",
  "Something else",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  company: "",
  topic: TOPICS[0],
  message: "",
};

// Never set a background here: --color-bone is #000, identical to the footer,
// so any bg utility makes the field dissolve into the page. Focus is signalled
// by the rule alone. ink/40 and stone/80 are contrast floors, not taste —
// they are the lowest alphas clearing 3:1 (component boundary) and 4.5:1 (text)
// against black.
const CONTROL_CLASS =
  "w-full bg-transparent border-b border-[var(--color-ink)]/40 focus:border-[var(--color-brass)] outline-none px-0 pt-0.5 pb-2 text-base text-[var(--color-ink)] placeholder:text-[var(--color-stone)]/80 transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const details = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      `Topic: ${form.topic}`,
    ].filter(Boolean);

    const subject = `${form.topic} — ${form.name}`;
    const body = [...details, "", form.message].join("\n");
    window.location.href = `mailto:hello@timezoneus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-[var(--color-brass)]/40 bg-[var(--color-bone-deep)] p-8 md:p-10">
        <div className="tag text-[var(--color-brass)] mb-3 uppercase tracking-[0.16em]">
          Draft ready
        </div>
        <h3 className="display text-3xl md:text-4xl mb-3 leading-none">
          Your email is being prepared.
        </h3>
        <p className="text-base text-[var(--color-stone)] max-w-[46ch]">
          Your default email client should have opened with the message
          pre-filled. Just hit send &mdash; we answer within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(EMPTY_FORM);
          }}
          className="tag mt-8 inline-flex items-center gap-2 border border-white/30 px-5 py-3 uppercase tracking-[0.16em] hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
        >
          Send another
          <span aria-hidden="true">→</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <span className="tag text-[var(--color-stone)] tracking-[0.18em]">
          Project brief
        </span>
        <span className="tag text-[var(--color-stone)]/60 tracking-[0.18em]">
          05 fields
        </span>
      </div>

      {/* Ruled parameter table: .display index + mono label in a left gutter,
          value on the right. Collapses to one column below sm. */}
      <div className="border-y border-[var(--color-ink)]/15 divide-y divide-[var(--color-ink)]/15">
        <Field number="01" label="Name" required error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
            placeholder="Full name"
            className={CONTROL_CLASS}
          />
        </Field>

        <Field number="02" label="Email" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
            placeholder="you@company.com"
            className={CONTROL_CLASS}
          />
        </Field>

        <Field number="03" label="Company" error={errors.company}>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            autoComplete="organization"
            placeholder="Optional"
            className={CONTROL_CLASS}
          />
        </Field>

        <Field number="04" label="Topic">
          <select
            value={form.topic}
            onChange={(e) => update("topic", e.target.value)}
            className={`${CONTROL_CLASS} appearance-none bg-no-repeat pr-7 cursor-pointer`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23a8a297' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
              backgroundPosition: "right 2px center",
            }}
          >
            {TOPICS.map((topic) => (
              <option
                key={topic}
                value={topic}
                className="bg-[var(--color-bone-deep)] text-[var(--color-ink)]"
              >
                {topic}
              </option>
            ))}
          </select>
        </Field>

        <Field number="05" label="Message" required alignTop error={errors.message}>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={5}
            placeholder="Tell us about the project — deadlines, run size, anything that helps us scope it."
            className={`${CONTROL_CLASS} resize-y`}
          />
        </Field>
      </div>

      {/* Sign-off: a full-width authorize bar that answers the 160px headline */}
      <div className="mt-8">
        <button
          type="submit"
          className="tag group flex w-full items-center justify-between gap-4 bg-[var(--color-brass)] text-black px-6 py-5 md:px-7 md:py-6 tracking-[0.18em] hover:bg-[var(--color-brass-bright)] transition-colors"
        >
          <span>Send message</span>
          <span
            aria-hidden="true"
            className="text-lg transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
        <p className="mt-4 flex items-center gap-2 text-xs text-[var(--color-stone)]">
          <span aria-hidden="true" className="text-[var(--color-brass)]">
            ✦
          </span>
          Opens your email client with the message pre-filled. We reply within
          48 hours.
        </p>
      </div>
    </form>
  );
}

function Field({
  number,
  label,
  required,
  error,
  alignTop,
  children,
}: {
  number: string;
  label: string;
  required?: boolean;
  error?: string;
  alignTop?: boolean;
  children: ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;

  // Ties the error to the control (aria-invalid + aria-describedby) so call
  // sites can keep passing a plain <input>/<select>/<textarea>. The `!` on the
  // rust border is required: it and CONTROL_CLASS's border both set
  // border-color, and CSS source order — not class order — would otherwise win.
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
        className: error
          ? `${(children.props as { className?: string }).className ?? ""} !border-[var(--color-rust)]`
          : (children.props as { className?: string }).className,
      })
    : children;

  return (
    <label
      data-error={error ? "true" : undefined}
      className={`group relative grid grid-cols-1 gap-2 py-5 pl-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8 sm:py-6 sm:pl-5 ${
        alignTop ? "sm:items-start" : "sm:items-baseline"
      }`}
    >
      {/* Edge bar: wipes down on focus, stays rust while the row is invalid. */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] origin-top transition-transform duration-500 ease-out ${
          error
            ? "bg-[var(--color-rust)] scale-y-100"
            : "bg-[var(--color-brass)] scale-y-0 group-focus-within:scale-y-100"
        }`}
      />

      {/* Gutter: two-digit index over mono label */}
      <div className="flex items-baseline gap-3 sm:block">
        <span
          aria-hidden="true"
          className={`display text-xl sm:text-2xl leading-none transition-colors ${
            error
              ? "text-[var(--color-rust)]"
              : "text-[var(--color-stone)] group-focus-within:text-[var(--color-brass)]"
          }`}
        >
          {number}
        </span>
        <span
          className={`tag block sm:mt-2.5 uppercase tracking-[0.16em] transition-colors ${
            error
              ? "text-[var(--color-rust)]"
              : "text-[var(--color-stone)] group-focus-within:text-[var(--color-ink)]"
          }`}
        >
          {label}
          {required && <span className="ml-1 text-[var(--color-brass)]">*</span>}
        </span>
      </div>

      {/* Value cell */}
      <div className="min-w-0">
        {control}
        {error && (
          <span id={errorId} className="mt-2 block text-xs text-[var(--color-rust)]">
            {error}
          </span>
        )}
      </div>
    </label>
  );
}
