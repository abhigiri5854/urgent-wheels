import { ShieldCheck, UserCog, Wrench } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
            About {BRAND.name}
          </div>
          <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.15] tracking-tight md:text-3xl">
            Speed you can trust when every minute counts.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-base">
            {BRAND.name} provides 24/7 emergency ambulance services in Delhi NCR
            with a focus on quick response, trained staff, and advanced ICU
            equipment for critical patients.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Quick Response",
                desc: "Dispatch tailored for emergency conditions.",
              },
              {
                icon: UserCog,
                title: "Trained Staff",
                desc: "Paramedics skilled in critical care support.",
              },
              {
                icon: Wrench,
                title: "Advanced Equipment",
                desc: "ICU-ready ambulances with life-support tools.",
              },
              {
                icon: ShieldCheck,
                title: "Patient Safety",
                desc: "Reliable care with coordination to hospital arrival.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-black/30"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="text-sm font-extrabold">{item.title}</div>
                </div>
                <div className="mt-2 text-xs leading-relaxed text-brand-muted">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-brand-red/10 to-black/0 p-5 shadow-sm md:p-8">
          <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
            <div className="text-sm font-extrabold text-brand-dark">
              Why families choose us
            </div>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 h-6 w-6 flex-none rounded-2xl bg-brand-red/10 text-brand-red grid place-items-center">
                  ✓
                </span>
                Dispatch in minutes with dedicated support.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 h-6 w-6 flex-none rounded-2xl bg-brand-red/10 text-brand-red grid place-items-center">
                  ✓
                </span>
                Coordinated transport for ICU, ventilator and cardiac cases.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 h-6 w-6 flex-none rounded-2xl bg-brand-red/10 text-brand-red grid place-items-center">
                  ✓
                </span>
                Clear communication throughout the journey.
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-brand-red px-4 py-4 text-white shadow-sm">
              <div className="text-xs font-semibold tracking-wide text-white">
                Emergency help
              </div>
              <div className="mt-1 text-sm font-extrabold">
                Call now for immediate ambulance dispatch.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

