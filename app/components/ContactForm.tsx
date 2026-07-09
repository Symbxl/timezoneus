"use client";

import { useState, type ReactNode } from "react";

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

const CONTROL_CLASS =
  "w-full bg-[var(--color-bone-deep)] border border-[var(--color-ink)]/15 focus:border-[var(--color-brass)] focus:bg-[var(--color-bone)] outline-none rounded-md px-4 py-3 text-base placeholder:text-[var(--color-stone)] transition-colors";

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
        <div className="tag text-[var(--color-brass)] mb-3">Submitted</div>
        <h3 className="display text-2xl md:text-3xl mb-3 leading-none">
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
          className="tag mt-8 inline-flex items-center gap-2 border border-white/30 px-5 py-3 hover:border-[var(--color-brass)] hover:text-[var(--color-brass)] transition-colors"
        >
          Send another
          <span aria-hidden="true">→</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        <Field label="Name" required error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
            className={CONTROL_CLASS}
          />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
            className={CONTROL_CLASS}
          />
        </Field>
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            autoComplete="organization"
            className={CONTROL_CLASS}
          />
        </Field>
        <Field label="What’s this about">
          <select
            value={form.topic}
            onChange={(e) => update("topic", e.target.value)}
            className={`${CONTROL_CLASS} text-[var(--color-ink)] appearance-none bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%23a8a297' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
              backgroundPosition: "right 14px center",
            }}
          >
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" required error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={5}
              placeholder="Tell us about the project, deadlines, run size — anything that helps us scope it."
              className={`${CONTROL_CLASS} resize-y`}
            />
          </Field>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="tag inline-flex items-center gap-2 bg-[var(--color-brass)] text-black px-6 py-4 hover:bg-[var(--color-brass-bright)] transition-colors"
        >
          Send message
          <span aria-hidden="true">→</span>
        </button>
        <p className="text-xs text-[var(--color-stone)]">
          Opens your email client with the message pre-filled.
        </p>
      </div>
    </form>
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
      <span className="tag block mb-2 text-[var(--color-stone)]">
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
