import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_CTA_LABEL, LINE_URL } from "@/app/lib/constants";

type LineCtaBlockProps = {
  lead: string;
  label?: string;
  note?: string;
  large?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function LineCtaBlock({
  lead,
  label = LINE_CTA_LABEL,
  note,
  large = true,
  align = "center",
  className = "",
}: LineCtaBlockProps) {
  const alignClass =
    align === "left" ? "line-cta-block--left" : "line-cta-block--center";

  return (
    <div className={`line-cta-block ${alignClass} ${className}`.trim()}>
      <p className="line-cta-block__lead">{lead}</p>
      <LineButton href={LINE_URL} large={large} className="line-cta-block__btn">
        {label}
      </LineButton>
      {note ? <p className="line-cta-block__note">{note}</p> : null}
    </div>
  );
}
