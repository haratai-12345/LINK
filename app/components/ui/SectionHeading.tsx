type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  supporting?: string;
  align?: "left" | "center";
  size?: "section" | "display";
  className?: string;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  supporting,
  align = "left",
  size = "section",
  className = "",
  titleId,
}: SectionHeadingProps) {
  const alignClassName =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  const titleClassName =
    size === "display"
      ? "font-serif text-[clamp(1.875rem,6.5vw,2.5rem)] font-medium leading-snug text-text"
      : "font-serif text-[clamp(1.625rem,5.5vw,2.125rem)] leading-snug text-text";

  return (
    <div
      className={`flex max-w-[40rem] flex-col gap-2 sm:gap-2.5 ${alignClassName} ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-pink-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={titleId} className={titleClassName}>
        {title}
      </h2>
      {description ? (
        <p className="text-lead max-w-[36rem] text-[0.9375rem] leading-[1.85] text-muted sm:text-base">
          {description}
        </p>
      ) : null}
      {supporting ? (
        <p className="text-caption max-w-[36rem] text-xs leading-relaxed text-muted/90 sm:text-sm">
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
