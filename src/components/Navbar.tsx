"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BRAND, TEL_LINK } from "@/lib/constants";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#facilities", label: "Facilities" },
  { href: "#services", label: "Services" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const tel = useMemo(() => TEL_LINK, []);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white md:border-b-0 dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-red text-white shadow-sm"
            aria-hidden="true"
          >
            <span className="text-sm font-bold leading-none">UW</span>
          </span>
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold tracking-tight text-brand-dark">
              {BRAND.name}
            </div>
            <div className="text-xs font-medium text-brand-muted">
              24/7 Ambulance in Delhi
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-brand-dark/80 transition hover:bg-black/[.04] hover:text-brand-dark"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={tel}
            className="hidden items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-110 md:flex"
            aria-label="Call emergency ambulance"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-white text-brand-dark shadow-sm transition hover:bg-black/[.03] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-brand-dark/85 hover:bg-black/[.04]"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollToHash(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={tel}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-brand-red px-4 py-3 text-sm font-bold text-white shadow-sm"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

