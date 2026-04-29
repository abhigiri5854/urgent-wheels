import {
  AirVent,
  HeartPulse,
  Route,
  ShieldCheck,
  Zap,
  Cross,
} from "lucide-react";

const services = [
  {
    title: "ICU Ambulance",
    desc: "Critical care support with ICU-ready equipment and monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "Ventilator Ambulance",
    desc: "Ventilator support and respiratory monitoring for emergency cases.",
    icon: AirVent,
  },
  {
    title: "Cardiac Ambulance",
    desc: "Cardiac-ready transport with trained teams for heart emergencies.",
    icon: HeartPulse,
  },
  {
    title: "Emergency Ambulance",
    desc: "Fast dispatch for accidents, severe injuries, and urgent medical needs.",
    icon: Zap,
  },
  {
    title: "Hospital Transfer",
    desc: "Safe inter-hospital transfer with clear coordination and documentation.",
    icon: Route,
  },
  {
    title: "Dead Body Ambulance",
    desc: "Respectful and timely transport with professional handling.",
    icon: Cross,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          Services
        </div>
        <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.15] tracking-tight md:text-3xl">
          Ambulances for every emergency need
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted md:text-base">
          Choose the right ambulance—ICU, ventilator, cardiac, and more—dispatch
          is built for speed across Delhi NCR.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <a
              key={service.title}
              href="#contact"
              className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-black/30"
              aria-label={`${service.title} - contact us`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red/15">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="rounded-2xl bg-black/5 px-2 py-1 text-[11px] font-bold text-brand-dark transition group-hover:bg-brand-red/10">
                  24/7
                </div>
              </div>
              <div className="mt-4 text-base font-extrabold">{service.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-brand-muted">
                {service.desc}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

