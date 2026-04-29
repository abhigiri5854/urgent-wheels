import {
  AirVent,
  CalendarClock,
  HeartPulse,
  Plane,
  Refrigerator,
  ShieldPlus,
  Siren,
  Snowflake,
  Cross,
  Truck,
} from "lucide-react";

const services = [
  {
    title: "Air Ambulance Service",
    desc: "Rapid critical transfer via air ambulance for long-distance emergencies.",
    icon: Plane,
  },
  {
    title: "ICU & Ventilator Ambulance",
    desc: "Critical care setup with ICU monitoring and ventilator support.",
    icon: AirVent,
  },
  {
    title: "Dead Body Ambulance Service",
    desc: "Respectful and timely dead body transfer with professional handling.",
    icon: Cross,
  },
  {
    title: "Dead Body Freezer Box Ambulance",
    desc: "Freezer box ambulance support for preservation and transport.",
    icon: Snowflake,
  },
  {
    title: "Out of Station Ambulance",
    desc: "Delhi to UP, Bihar, Bangal, Jharkhand and all over India.",
    icon: Truck,
  },
  {
    title: "Hearse Van Ambulance Service",
    desc: "Hearse van service available with 24 hours support.",
    icon: Siren,
  },
  {
    title: "Mobile Mortuary Ambulance Service",
    desc: "Mobile mortuary ambulance with proper temperature-ready support.",
    icon: Refrigerator,
  },
  {
    title: "Ambulance for Event or Shows",
    desc: "Ambulance support for live shows, events and public gatherings.",
    icon: CalendarClock,
  },
  {
    title: "Emergency & Oxygen Ambulance",
    desc: "Fast emergency response with oxygen support for urgent cases.",
    icon: HeartPulse,
  },
  {
    title: "AC Ambulance Service",
    desc: "Comfort-focused AC ambulance with trained on-route support.",
    icon: ShieldPlus,
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
          Our Services
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted md:text-base">
          Dead Body Freezer Box Ambulance, Dead Body Ambulance, ICU Ventilator
          Ambulance, AC Ambulance, Oxygen Ambulance, Emergency Ambulance,
          Outside Ambulance, Freezer Box, Hearse Van, Mortuary Ambulance.
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

      <div className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/5 p-5">
        <div className="text-sm font-bold text-brand-dark">
          Following are the kinds of Ambulance Services Available at Urgent
          Wheels in Delhi:
        </div>
        <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-brand-dark md:grid-cols-2">
          <li>Air Ambulance Service</li>
          <li>ICU & Ventilator Ambulance</li>
          <li>Dead Body Ambulance Service</li>
          <li>Dead Body Freezer Box Ambulance Service</li>
          <li>Out of Station Ambulance Service</li>
          <li>Hearse Van Ambulance Service</li>
          <li>Mobile Mortuary Ambulance Service</li>
          <li>Ambulance for event or shows (live shows)</li>
        </ul>
      </div>
    </section>
  );
}

