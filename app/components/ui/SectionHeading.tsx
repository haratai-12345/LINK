type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleId,
}: SectionHeadingProps) {
  const alignClassName =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`flex max-w-2xl flex-col gap-2.5 sm:gap-3 ${alignClassName} ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-serif text-[clamp(1.75rem,6.5vw,2.125rem)] leading-snug text-text"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
