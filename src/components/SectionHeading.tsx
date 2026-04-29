export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClasses =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-red">
          <span
            className="h-1.5 w-1.5 rounded-full bg-brand-red"
            aria-hidden="true"
          />
          {kicker}
        </div>
      ) : null}
      <h2 className="text-balance text-2xl font-extrabold leading-[1.15] tracking-tight text-brand-dark md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-brand-muted md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

