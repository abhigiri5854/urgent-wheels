"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import {
  BRAND,
  EMAIL,
  EMAIL_LINK,
  EMERGENCY_PHONE_PRIMARY_DISPLAY,
  EMERGENCY_PHONE_SECONDARY_DISPLAY,
  TEL_LINK,
  TEL_LINK_2,
  WHATSAPP_LINK,
} from "@/lib/constants";

type ContactPayload = {
  name: string;
  phone: string;
  location: string;
};

export default function ContactSection() {
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "loading" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const emergencyNumberDisplay = useMemo(() => {
    return `${EMERGENCY_PHONE_PRIMARY_DISPLAY} / ${EMERGENCY_PHONE_SECONDARY_DISPLAY}`;
  }, []);

  const [form, setForm] = useState<ContactPayload>({
    name: "",
    phone: "",
    location: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: "loading" });

    const name = form.name.trim();
    const phone = form.phone.trim();
    const location = form.location.trim();

    if (name.length < 2) {
      setStatus({ kind: "error", message: "Please enter your name." });
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setStatus({ kind: "error", message: "Please enter a valid phone number." });
      return;
    }
    if (location.length < 2) {
      setStatus({
        kind: "error",
        message: "Please enter your location (area / landmark).",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Request failed");
      }

      setStatus({
        kind: "success",
        message: "Request received. We’ll contact you shortly for ambulance dispatch.",
      });
      setForm({ name: "", phone: "", location: "" });
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please call for emergency support.",
      });
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          Contact
        </div>
        <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.15] tracking-tight md:text-3xl">
          Call or book an ambulance in minutes
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted md:text-base">
          For emergencies, call immediately. For booking requests, fill the form
          and we’ll confirm availability and dispatch.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-black/5 bg-white p-5 shadow-sm dark:bg-black/30 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-brand-muted">
                Emergency Dispatch
              </div>
              <div className="mt-1 text-2xl font-extrabold text-brand-dark">
                {emergencyNumberDisplay}
              </div>
              <div className="mt-2 text-sm text-brand-muted">
                24/7 Ambulance Services in Delhi NCR.
              </div>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-red/10 text-brand-red">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={TEL_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-red px-4 py-4 text-sm font-extrabold text-white shadow-sm transition hover:brightness-110"
              aria-label="Call Urgent Wheels emergency line"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
            <a
              href={TEL_LINK_2}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-4 text-sm font-extrabold text-brand-dark shadow-sm transition hover:bg-black/[.03]"
              aria-label={`Call Urgent Wheels emergency line at ${EMERGENCY_PHONE_SECONDARY_DISPLAY}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call 2
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-4 text-sm font-extrabold text-white shadow-sm transition hover:bg-black/90"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          <div className="rounded-2xl bg-brand-red/5 p-4">
            <div className="text-sm font-extrabold text-brand-dark">
              What to share:
            </div>
            <ul className="mt-2 space-y-2 text-sm text-brand-muted">
              <li>Patient condition (if known)</li>
              <li>Pickup location & landmark</li>
              <li>Destination hospital (if any)</li>
            </ul>
            <div className="mt-3 text-xs font-semibold text-brand-muted">
              Tip: For the fastest response, call in emergencies.
            </div>
            <div className="mt-3 text-xs leading-relaxed text-brand-muted">
              Email:{" "}
              <a
                href={EMAIL_LINK}
                className="font-bold text-brand-dark underline decoration-brand-red/40 underline-offset-2 transition hover:decoration-brand-red"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm dark:bg-black/30 md:p-7">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-brand-muted">
                Booking Request
              </div>
              <div className="text-xs font-semibold text-brand-muted">
                {BRAND.name}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-bold text-brand-dark">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-red/50 focus:ring-2 focus:ring-brand-red/20"
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-brand-dark">Phone</span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((v) => ({ ...v, phone: e.target.value }))
                  }
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-red/50 focus:ring-2 focus:ring-brand-red/20"
                  placeholder="e.g. 98XXXXXX10"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-bold text-brand-dark">Location</span>
              <input
                required
                value={form.location}
                onChange={(e) =>
                  setForm((v) => ({ ...v, location: e.target.value }))
                }
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-red/50 focus:ring-2 focus:ring-brand-red/20"
                placeholder="Area / landmark in Delhi NCR"
              />
            </label>

           <button
  type="button"
  onClick={() => {
    const { name, phone, location } = form;

    if (!name || !phone || !location) {
      alert("Please fill all fields");
      return;
    }

    const message = `🚑 Ambulance Request\n\nName: ${name}\nPhone: ${phone}\nLocation: ${location}`;

    const url = `https://wa.me/8800580074?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }}
  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 px-4 py-3 font-extrabold text-white shadow-sm hover:brightness-110"
>
  Request Ambulance
</button>

            {status.kind === "success" ? (
              <div className="rounded-2xl border border-brand-red/20 bg-brand-red/5 p-4 text-sm font-semibold text-brand-dark">
                {status.message}
              </div>
            ) : null}
            {status.kind === "error" ? (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-sm font-semibold text-brand-dark">
                {status.message}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

