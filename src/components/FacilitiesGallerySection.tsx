import Image from "next/image";
import { FACILITY_IMAGE_PATHS } from "@/lib/constants";

export default function FacilitiesGallerySection() {
  return (
    <section id="facilities" className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
      <div className="mb-8 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          Facilities Gallery
        </div>
        <h2 className="text-balance text-2xl font-extrabold leading-[1.15] tracking-tight text-brand-dark md:text-3xl">
          Advanced Ambulance Setup in Delhi NCR
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-brand-muted md:text-base">
          Real fleet & interior shots—built for quick, safe transport for ICU,
          ventilator and critical care needs.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITY_IMAGE_PATHS.map((src, idx) => (
          <div
            key={src}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={src}
                alt={`Urgent Wheels facility image ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                priority={idx === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

