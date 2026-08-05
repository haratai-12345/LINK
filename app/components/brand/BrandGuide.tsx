import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { MascotImage } from "@/app/components/brand/MascotImage";
import type { MascotVariant } from "@/app/lib/constants";

type BrandGuideProps = {
  message: string;
  variant: MascotVariant;
  role?: string;
  className?: string;
};

export function BrandGuide({
  message,
  variant,
  role = "LINKコンシェルジュ",
  className = "",
}: BrandGuideProps) {
  return (
    <FadeInOnScroll className={className}>
      <div className="brand-guide flex items-start gap-4 rounded-[var(--radius-ui)] border border-border/80 bg-surface/90 p-4 shadow-[var(--shadow-sm)] sm:gap-5 sm:p-5">
        <MascotImage variant={variant} size="md" />
        <div className="min-w-0 space-y-1.5 pt-1">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-pink-dark uppercase">
            {role}
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-text sm:text-base">{message}</p>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
