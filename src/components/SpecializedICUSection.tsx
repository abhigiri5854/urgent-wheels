"use client"; 
import { Monitor, AirVent, ShieldCheck } from "lucide-react";

const equipment = [
  { label: "Ventilators", desc: "Respiratory support for critical cases." },
  { label: "Patient Monitors", desc: "Continuous vitals tracking during transport." },
  { label: "ICU-ready Setup", desc: "Life-support compatible monitoring & care flow." },
  { label: "Trained Response", desc: "Paramedics prepared for ICU-level needs." },
];

export default function SpecializedICUSection() {
    const handleWhatsApp = () => {
    const message = `🚑 ICU Ambulance Request\nNeed ICU ambulance immediately.`;
    const url = `https://wa.me/919472378913?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <section id="specialized" className="bg-brand-red/5">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
              Specialized ICU
            </div>
            <h2 className="mt-4 text-balance text-2xl font-extrabold leading-[1.15] tracking-tight md:text-3xl">
              ICU Ambulance Near Me in Delhi
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-muted md:text-base">
              Urgent Wheels dispatches advanced, ICU-equipped ambulances across
              Delhi NCR—built for oxygenation, monitoring and urgent transfer.
            </p>

            <div className="mt-6 space-y-3">
              {equipment.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-10 w-10 place-items-center rounded-2xl bg-brand-red/10 text-brand-red">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-sm font-extrabold">{item.label}</div>
                      <div className="mt-1 text-xs leading-relaxed text-brand-muted">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-brand-red/15 via-white to-white p-5 shadow-sm md:p-8">
            <div className="rounded-2xl border border-black/5 bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-red/10 text-brand-red">
                  <Monitor className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-brand-dark">
                    Advanced equipment, reliable dispatch
                  </div>
                  <div className="text-xs font-semibold text-brand-muted">
                    Typical response: 15–20 minutes
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Ventilators", icon: AirVent },
                  { title: "Monitors", icon: Monitor },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-black/5 bg-white p-4"
                    >
                      <div className="grid place-items-start">
                        <Icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
                      </div>
                      <div className="mt-2 text-sm font-extrabold">{item.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-brand-muted">
                        Ready for urgent critical transport.
                      </div>
                    </div>
                  );
                })}
              </div>

              <div  onClick={handleWhatsApp}
              className="mt-6 rounded-2xl bg-brand-red px-4 py-4 text-white shadow-sm">
                <div className="text-xs font-semibold tracking-wide text-white">
                  Need ICU ambulance now?
                </div>
                <div className="mt-1 text-sm font-extrabold">
                  Call now and get dispatched immediately.
                </div>
              </div>
              <div className="mt-4 text-xs leading-relaxed text-brand-muted">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

