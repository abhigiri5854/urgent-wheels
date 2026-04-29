"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  EMAIL,
  EMAIL_LINK,
  EMERGENCY_PHONE_PRIMARY_DISPLAY,
  EMERGENCY_PHONE_SECONDARY_DISPLAY,
  TEL_LINK,
  TEL_LINK_2,
} from "@/lib/constants";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Delhi NCR including Janakpuri, Tilak Nagar, Dwarka and nearby areas. If you're unsure, call us and we’ll confirm availability quickly.",
  },
  {
    q: "What types of ambulances are available?",
    a: "Urgent Wheels provides ICU Ambulance, Ventilator Ambulance, Cardiac Ambulance, Emergency Ambulance, Hospital Transfer and Dead Body Ambulance (as per local requirements).",
  },
  {
    q: "How fast is response time?",
    a: "Typical response is 15–20 minutes depending on traffic and location. We dispatch quickly to reduce waiting time.",
  },
  {
    q: "Contact details?",
    a: "Call us anytime for emergency dispatch. Tap the emergency call button or contact us through the form below.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          FAQ
        </div>
        <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.15] tracking-tight md:text-3xl">
          Quick answers for urgent moments
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          const panelId = `${baseId}-panel-${idx}`;
          const buttonId = `${baseId}-button-${idx}`;

          return (
            <div
              key={item.q}
              className="rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                >
                  <span className="text-base font-extrabold text-brand-dark">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={[
                      "h-5 w-5 flex-none text-brand-muted transition",
                      isOpen ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={[
                  "grid px-5 transition-all",
                  isOpen
                    ? "grid-rows-[1fr] pb-4 opacity-100"
                    : "grid-rows-[0fr] pb-0 opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {item.a}
                  </p>
                  {item.q === "Contact details?" ? (
                    <div className="mt-3">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <a
                          href={TEL_LINK}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:brightness-110"
                        >
                          Call 1:{" "}
                          <span className="font-black">
                            {EMERGENCY_PHONE_PRIMARY_DISPLAY}
                          </span>
                        </a>
                        <a
                          href={TEL_LINK_2}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red/90 px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:brightness-110"
                        >
                          Call 2:{" "}
                          <span className="font-black">
                            {EMERGENCY_PHONE_SECONDARY_DISPLAY}
                          </span>
                        </a>
                      </div>
                      <div className="mt-2 text-xs leading-relaxed text-brand-muted">
                        Or email{" "}
                        <a
                          href={EMAIL_LINK}
                          className="font-bold underline decoration-brand-red/40 underline-offset-2 transition hover:decoration-brand-red"
                        >
                          {EMAIL}
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

