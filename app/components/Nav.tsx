"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_PRODUCT_CATEGORIES } from "../products/products-data";

const SECTIONS = [
  { label: "Custom Sourcing", href: "#custom-sourcing" },
  { label: "Custom Packaging", href: "#custom-packaging" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "General Info", href: "#general-info" },
  { label: "Prop 65", href: "#prop-65" },
  { label: "Distributor Tools", href: "#distributor-tools" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProductsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(d.toLocaleTimeString("en-US", opts) + " EST");
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bone)]/85 backdrop-blur-md border-b border-[var(--color-ink)]/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="/#top" className="flex items-center gap-3">
          {/* Watch dial mark */}
          <svg
            viewBox="0 0 40 40"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="20" cy="20" r="1.6" fill="currentColor" />
            <line
              x1="20"
              y1="20"
              x2="20"
              y2="9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="20"
              y1="20"
              x2="28"
              y2="22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* 12 / 3 / 6 / 9 ticks */}
            {[
              [20, 4, 20, 7],
              [33, 20, 36, 20],
              [20, 33, 20, 36],
              [4, 20, 7, 20],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}
          </svg>
          <span className="display text-2xl md:text-[28px] leading-none">
            Time Zone <span className="text-[var(--color-brass)]">US</span>
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-7 tag">
          <div
            className="relative"
            ref={productsRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <a
              href="/products"
              onClick={() => setProductsOpen(false)}
              aria-haspopup="true"
              aria-expanded={productsOpen}
              className="link-underline flex items-center gap-1.5"
            >
              Our Products
              <span
                aria-hidden="true"
                className={`inline-block transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </a>
            {productsOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full pt-3"
              >
                <div className="min-w-[260px] bg-[var(--color-bone)] border border-[var(--color-ink)]/15 shadow-lg py-2">
                  <a
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    role="menuitem"
                    className="block px-4 py-2 tag border-b border-[var(--color-ink)]/10 hover:bg-[var(--color-bone-deep)] hover:text-[var(--color-brass)] transition-colors"
                  >
                    All Products →
                  </a>
                  {NAV_PRODUCT_CATEGORIES.map((c) => (
                    <a
                      key={c.key}
                      href={`/products?category=${c.key}`}
                      role="menuitem"
                      onClick={() => setProductsOpen(false)}
                      className="block px-4 py-2 tag hover:bg-[var(--color-bone-deep)] hover:text-[var(--color-brass)] transition-colors"
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="link-underline">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden lg:inline tag text-[var(--color-stone)]">
            {time}
          </span>
          <a
            href="/#contact"
            className="hidden sm:inline-block tag bg-[var(--color-ink)] text-[var(--color-bone)] px-4 py-2 hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)] transition-colors"
          >
            Get a quote →
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
          >
            <span className="relative block w-6 h-4" aria-hidden="true">
              <span
                className={`absolute left-0 right-0 top-0 h-0.5 bg-current transition-transform duration-200 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-current transition-transform duration-200 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden bg-[var(--color-bone)] border-t border-[var(--color-ink)]/10 max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <nav className="px-6 md:px-10 py-6 flex flex-col gap-1 tag">
            <div className="flex items-stretch border-b border-[var(--color-ink)]/10">
              <a
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="flex-1 py-3 hover:text-[var(--color-brass)] transition-colors"
              >
                Our Products
              </a>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((v) => !v)}
                aria-expanded={mobileProductsOpen}
                aria-label="Toggle product categories"
                className="px-3"
              >
                <span
                  aria-hidden="true"
                  className={`inline-block transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
            </div>
            {mobileProductsOpen && (
              <div className="flex flex-col pl-4 border-b border-[var(--color-ink)]/10">
                {NAV_PRODUCT_CATEGORIES.map((c) => (
                  <a
                    key={c.key}
                    href={`/products?category=${c.key}`}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 text-[var(--color-stone)] hover:text-[var(--color-brass)] transition-colors"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            )}
            {SECTIONS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 border-b border-[var(--color-ink)]/10 hover:text-[var(--color-brass)] transition-colors"
              >
                {s.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-block self-start tag bg-[var(--color-ink)] text-[var(--color-bone)] px-4 py-2 hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)] transition-colors"
            >
              Get a quote →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
