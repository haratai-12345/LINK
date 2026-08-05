import { MascotImage } from "@/app/components/brand/MascotImage";
import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_CTA_LABEL, LINE_URL } from "@/app/lib/constants";

type LineCtaBlockProps = {
  lead: string;
  label?: string;
  note?: string;
  large?: boolean;
  showMascot?: boolean;
  className?: string;
};

export function LineCtaBlock({
  lead,
  label = LINE_CTA_LABEL,
  note,
  large = true,
  showMascot = false,
  className = "",
}: LineCtaBlockProps) {
  return (
    <div className={`mx-auto w-full max-w-lg space-y-4 ${className}`.trim()}>
      {showMascot ? (
        <div className="flex justify-center pb-1">
          <MascotImage variant="invite" size="md" />
        </div>
      ) : null}
      <p className="text-center text-[0.9375rem] font-medium leading-relaxed text-text sm:text-base">
        {lead}
      </p>
      <LineButton
        href={LINE_URL}
        large={large}
        fullWidth
        className="min-h-[52px] shadow-[0_10px_28px_rgb(6_199_85/0.32)] sm:min-h-[56px]"
      >
        {label}
      </LineButton>
      {note ? (
        <p className="text-center text-xs leading-relaxed text-muted sm:text-sm">{note}</p>
      ) : null}
    </div>
  );
}
