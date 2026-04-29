import {
  Clock,
  ShieldCheck,
  Stethoscope,
  Activity,
  HeartPulse,
  Wrench,
} from "lucide-react";

const bullets = [
  {
    icon: Activity,
    title: "24/7 Availability",
    desc: "Always ready for urgent calls in Delhi NCR.",
  },
  {
    icon: Clock,
    title: "Fast Response (15–20 mins)",
    desc: "Quick dispatch to reach you sooner.",
  },
  {
    icon: Wrench,
    title: "ICU Equipped Ambulances",
    desc: "Life-support ready setup for critical cases.",
  },
  {
    icon: ShieldCheck,
    title: "Trained Paramedics",
    desc: "Critical care support with patient-first approach.",
  },
  {
    icon: HeartPulse,
    title: "Cardiac & Critical Care Focus",
    desc: "Cardiac ambulance support with clear coordination.",
  },
  {
    icon: Stethoscope,
    title: "Affordable Pricing",
    desc: "Transparent and competitive pricing for families.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          Why Choose Us
        </div>
        <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.15] tracking-tight md:text-3xl">
          Emergency transport built for speed and reliability.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bullets.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-black/30"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 grid h-11 w-11 place-items-center rounded-2xl bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red/15">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-base font-extrabold">{item.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

