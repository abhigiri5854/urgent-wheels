import { MapPin, ShieldCheck } from "lucide-react";
import { COVERAGE } from "@/lib/constants";

export default function CoverageAreaSection() {
  return (
    <section id="coverage" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          Coverage Area
        </div>
        <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.15] tracking-tight md:text-3xl">
          Serving {COVERAGE.region}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted md:text-base">
          Fast dispatch to critical patients across Delhi NCR, with focus on{" "}
          {COVERAGE.focusAreas.join(", ")}.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-brand-red/10 to-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-red/10 text-brand-red">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <div className="text-sm font-extrabold text-brand-dark">
                Focus neighborhoods
              </div>
              <div className="mt-1 text-xs font-semibold text-brand-muted">
                Quick response for urgent transfers
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {COVERAGE.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-dark shadow-sm ring-1 ring-black/5"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-red/10 text-brand-red">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <div className="text-sm font-extrabold text-brand-dark">
                Built for emergencies
              </div>
              <div className="mt-1 text-xs font-semibold text-brand-muted">
                Trained staff + ICU-ready ambulances
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Delhi NCR", desc: "Dispatch across the region" },
              { label: "15–20 mins", desc: "Typical response window" },
              { label: "24/7", desc: "Always available for calls" },
              { label: "Hospital transfer", desc: "Safe inter-facility transport" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-black/5 bg-white p-4"
              >
                <div className="text-sm font-extrabold">{item.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-brand-muted">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

