"use client";

import { useEffect, useMemo, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { TEL_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  const tel = useMemo(() => TEL_LINK, []);
  const wa = useMemo(() => WHATSAPP_LINK, []);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile floating buttons */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-20 z-[55] md:hidden h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white shadow-lg transition hover:brightness-110"
        aria-label="WhatsApp emergency chat"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={tel}
        className="fixed right-4 bottom-20 z-[55] md:hidden h-12 w-12 items-center justify-center rounded-2xl bg-brand-red shadow-lg transition hover:brightness-110"
        aria-label="Call urgent ambulance"
      >
        <Phone className="h-5 w-5 text-white" aria-hidden="true" />
      </a>

      {/* Scroll to top */}
      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-32 z-[55] inline-flex md:hidden h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/10 transition hover:bg-white"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 text-brand-dark" aria-hidden="true" />
        </button>
      ) : null}
    </>
  );
}

