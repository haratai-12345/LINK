type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClassName =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`flex max-w-2xl flex-col gap-3 ${alignClassName} ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-2xl leading-snug text-text sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
