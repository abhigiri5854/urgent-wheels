import { Phone } from "lucide-react";
import {
  COVERAGE,
  HERO_IMAGE_URL,
  RESPONSE_TIME,
  TEL_LINK,
  TEL_LINK_2,
  EMERGENCY_PHONE_SECONDARY_DISPLAY,
} from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-red/5">
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
          style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-10 md:pb-14 md:pt-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full  border border-white/30 bg-black/40 px-4 py-2-xs font-semibold tracking-wide">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-red" aria-hidden />
                24/7 Emergency Support
              </span>
              <span className="text-white">•</span>
              <span className="text-white">
                Avg. response {RESPONSE_TIME.minMinutes}–{RESPONSE_TIME.maxMinutes} min
              </span>
            </div>

            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
              24/7 Emergency Ambulance Services in Delhi
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white md:text-lg">
              Fast ICU, Ventilator & Cardiac Ambulance in{" "}
              <span className="font-bold text-white">
                {COVERAGE.focusAreas.slice(0, 2).join(" & ")}
              </span>{" "}
              and NCR.
            </p>

            <div className="mt-6 grid gap-3 sm:flex sm:items-center">
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-red px-6 py-3 text-base font-extrabold shadow-[0_18px_45px_rgba(229,57,53,0.35)] transition hover:brightness-110 active:brightness-95"
                aria-label="Call urgent ambulance now"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-3 text-base font-extrabold text-white transition hover:bg-white/10"
              >
                Book Ambulance
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Trained Paramedics", desc: "Care-ready teams for critical cases." },
                { title: "ICU Equipped Ambulances", desc: "Ventilators, monitors & life support." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/20 bg-black/50 p-4"
                >
                  <div className="text-sm font-extrabold">{item.title}</div>
                  <div className="mt-1 text-xs text-white">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-24 rounded-3xl border border-white/20 bg-black/50 p-4 backdrop-blur md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-white">
                    Quick Emergency Call
                  </div>
                  <div className="mt-1 text-xs font-semibold text-white">
                    Tap to call now. 24/7 service in Delhi NCR.
                  </div>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-red/20">
                  <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-red px-5 py-4 text-base font-extrabold shadow-[0_22px_55px_rgba(229,57,53,0.35)] transition hover:brightness-110 active:brightness-95"
                  aria-label="Call urgent ambulance now"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  CALL NOW
                </a>

                <a
                  href={TEL_LINK_2}
                 className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-3 text-base font-extrabold text-white transition hover:bg-white/10"
                  aria-label={`Call urgent ambulance at ${EMERGENCY_PHONE_SECONDARY_DISPLAY}`}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  CALL 2
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-transparent px-5 py-4 text-base font-extrabold text-white transition hover:bg-white/10"
                >
                  BOOK AMBULANCE
                </a>

                <div className="mt-1 text-center text-xs font-semibold text-white">
                  Typical response: {RESPONSE_TIME.minMinutes}–{RESPONSE_TIME.maxMinutes} minutes
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

