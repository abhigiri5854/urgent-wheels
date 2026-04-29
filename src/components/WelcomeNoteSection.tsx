import { Clock3, MapPin, Truck } from "lucide-react";

export default function WelcomeNoteSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
      <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          Welcome Note
        </div>

        <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight text-brand-dark md:text-3xl">
          Welcome To Urgent Wheels in Delhi Service
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-brand-dark md:text-base">
          Delhi Outside Ambulance Just Rs 12 Per km Delhi To UP, Bihar, Bangal,
          Jharkhand All Over India Ambulance Service Just 15 Minutes. In Delhi
          NCR / Noida / Gurgaon / Ghaziabad / Faridabad.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-brand-red/5 p-4">
            <Clock3 className="h-5 w-5 text-brand-red" />
            <div className="mt-2 text-sm font-bold text-brand-dark">
              Just 15 Minutes
            </div>
          </div>
          <div className="rounded-2xl bg-brand-red/5 p-4">
            <MapPin className="h-5 w-5 text-brand-red" />
            <div className="mt-2 text-sm font-bold text-brand-dark">
              Delhi NCR + Nearby Cities
            </div>
          </div>
          <div className="rounded-2xl bg-brand-red/5 p-4">
            <Truck className="h-5 w-5 text-brand-red" />
            <div className="mt-2 text-sm font-bold text-brand-dark">
              Outside Ambulance Rs 12/Km
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

