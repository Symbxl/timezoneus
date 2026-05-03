"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_PRODUCT_CATEGORIES } from "../products/products-data";

type MenuItem = { label: string; href: string; external?: boolean };
type Menu = {
  key: string;
  label: string;
  href: string;
  align: "left" | "right";
  items: MenuItem[];
};

const COLLECTIONS: MenuItem[] = [
  { label: "Executive Series", href: "https://www.timezoneus.com/category/executive-series", external: true },
  { label: "Digi Clips", href: "https://www.timezoneus.com/category/digi-clipz", external: true },
  { label: "Rectangle Series", href: "https://www.timezoneus.com/category/rectangle-series", external: true },
  { label: "Sapphire Series", href: "https://www.timezoneus.com/category/sapphire-series", external: true },
  { label: "Swiss Series", href: "https://www.timezoneus.com/category/swiss-series", external: true },
  { label: "Tahoe Series", href: "https://www.timezoneus.com/category/tahoe-series", external: true },
  { label: "Union Made Watches", href: "https://www.timezoneus.com/category/union-made-watches", external: true },
  { label: "Value & Sport Watches", href: "https://www.timezoneus.com/category/value-sport-watches", external: true },
];

const MENUS: Menu[] = [
  {
    key: "products",
    label: "Products",
    href: "/products",
    align: "left",
    items: [
      { label: "All Products", href: "/products" },
      ...NAV_PRODUCT_CATEGORIES.map((c) => ({
        label: c.label,
        href: `/products?category=${c.key}`,
      })),
    ],
  },
  {
    key: "collections",
    label: "Collections",
    href: "/products?category=watches",
    align: "left",
    items: [
      { label: "All Watches", href: "/products?category=watches" },
      ...COLLECTIONS,
    ],
  },
  {
    key: "sales",
    label: "Sales Tools",
    href: "#distributor-tools",
    align: "right",
    items: [
      { label: "Distributor Tools", href: "#distributor-tools" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Prop 65", href: "#prop-65" },
    ],
  },
  {
    key: "info",
    label: "General Info",
    href: "#general-info",
    align: "right",
    items: [
      { label: "About / General Info", href: "#general-info" },
      { label: "Custom Sourcing", href: "#custom-sourcing" },
      { label: "Custom Packaging", href: "#custom-packaging" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

const LEFT_MENUS = MENUS.filter((m) => m.align === "left");
const RIGHT_MENUS = MENUS.filter((m) => m.align === "right");

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Time Zone — Made to Order Promo Since 1976"
      width={240}
      height={116}
      priority
      className="h-16 md:h-20 w-auto"
    />
  );
}

function DesktopMenu({
  menu,
  open,
  onOpen,
  onClose,
}: {
  menu: Menu;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <a
        href={menu.href}
        onClick={onClose}
        aria-haspopup="true"
        aria-expanded={open}
        className="link-underline flex items-center gap-1.5 text-white"
      >
        {menu.label}
        <span
          aria-hidden="true"
          className={`inline-block transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </a>
      {open && (
        <div
          role="menu"
          className={`absolute top-full pt-3 ${
            menu.align === "right" ? "right-0" : "left-0"
          }`}
        >
          <div className="min-w-[240px] bg-[var(--color-bone)] border border-[var(--color-ink)]/15 shadow-lg py-2">
            {menu.items.map((item, i) => (
              <a
                key={item.href + i}
                href={item.href}
                onClick={onClose}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                role="menuitem"
                className={`block px-4 py-2 tag whitespace-nowrap hover:bg-[var(--color-bone-deep)] hover:text-[var(--color-brass)] transition-colors ${
                  i === 0 ? "border-b border-[var(--color-ink)]/10" : ""
                }`}
              >
                {item.label}
                {item.external ? (
                  <span aria-hidden="true" className="ml-1 opacity-50">↗</span>
                ) : null}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
        setOpenMenu(null);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bone)]/85 backdrop-blur-md border-b border-[var(--color-ink)]/10"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 h-24 md:h-28 flex items-center justify-between">
        {/* LEFT — mobile logo OR desktop left nav */}
        <div className="flex items-center gap-7">
          <a href="/" className="xl:hidden flex items-center gap-3 text-white">
            <Logo />
          </a>
          <nav className="hidden xl:flex items-center gap-7 tag text-white">
            {LEFT_MENUS.map((m) => (
              <DesktopMenu
                key={m.key}
                menu={m}
                open={openMenu === m.key}
                onOpen={() => setOpenMenu(m.key)}
                onClose={() => setOpenMenu(null)}
              />
            ))}
          </nav>
        </div>

        {/* CENTER — desktop logo, absolutely positioned */}
        <a
          href="/"
          className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-3 text-white"
        >
          <Logo />
        </a>

        {/* RIGHT — desktop right nav + controls */}
        <div className="flex items-center gap-7">
          <nav className="hidden xl:flex items-center gap-7 tag text-white">
            {RIGHT_MENUS.map((m) => (
              <DesktopMenu
                key={m.key}
                menu={m}
                open={openMenu === m.key}
                onOpen={() => setOpenMenu(m.key)}
                onClose={() => setOpenMenu(null)}
              />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-white"
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
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden bg-[var(--color-bone)] border-t border-[var(--color-ink)]/10 max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-7rem)] overflow-y-auto"
        >
          <nav className="px-6 md:px-10 py-6 flex flex-col gap-1 tag text-white">
            {MENUS.map((m) => (
              <div key={m.key}>
                <div className="flex items-stretch border-b border-[var(--color-ink)]/10">
                  <a
                    href={m.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-3 hover:text-[var(--color-brass)] transition-colors"
                  >
                    {m.label}
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((cur) => (cur === m.key ? null : m.key))
                    }
                    aria-expanded={mobileExpanded === m.key}
                    aria-label={`Toggle ${m.label}`}
                    className="px-3"
                  >
                    <span
                      aria-hidden="true"
                      className={`inline-block transition-transform duration-200 ${
                        mobileExpanded === m.key ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                </div>
                {mobileExpanded === m.key && (
                  <div className="flex flex-col pl-4 border-b border-[var(--color-ink)]/10">
                    {m.items.map((item, i) => (
                      <a
                        key={item.href + i}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        onClick={() => setMobileOpen(false)}
                        className="py-2.5 text-[var(--color-stone)] hover:text-[var(--color-brass)] transition-colors"
                      >
                        {item.label}
                        {item.external ? (
                          <span aria-hidden="true" className="ml-1 opacity-50">↗</span>
                        ) : null}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
