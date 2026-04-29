import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] w-full bg-black/5">
          <Skeleton className="h-full w-full" />
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-8">
          <Skeleton className="h-7 w-56" />
          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[75%]" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="space-y-3">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-5 w-[70%]" />
              <Skeleton className="h-4 w-[85%]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

