import { MascotImage } from "@/app/components/brand/MascotImage";
import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { LineCtaBlock } from "@/app/components/ui/LineCtaBlock";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { BOTTOM_LINE_CTA } from "@/app/lib/constants";

export function BottomLineCtaSection() {
  return (
    <SectionShell ariaLabelledBy="bottom-line-cta-heading" tone="ivory" connect>
      <FadeInOnScroll>
        <div className="mx-auto max-w-[40rem] space-y-8 text-center sm:space-y-10">
          <p className="font-serif text-sm tracking-[0.16em] text-pink-dark uppercase">
            {BOTTOM_LINE_CTA.brandMessage}
          </p>

          <div className="space-y-4">
            <h2
              id="bottom-line-cta-heading"
              className="font-serif text-[clamp(1.75rem,6vw,2.375rem)] font-medium leading-snug text-text"
            >
              {BOTTOM_LINE_CTA.title}
            </h2>
            <p className="text-lead mx-auto max-w-[34rem] text-[0.9375rem] leading-[1.85] text-muted sm:text-base">
              {BOTTOM_LINE_CTA.description}
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 py-2">
            <MascotImage variant="invite" size="lg" />
            <p className="max-w-[32rem] text-[0.9375rem] leading-relaxed text-text sm:text-base">
              {BOTTOM_LINE_CTA.guideMessage}
            </p>
          </div>

          <LineCtaBlock
            lead={BOTTOM_LINE_CTA.ctaLead}
            note={BOTTOM_LINE_CTA.reassurance}
          />
        </div>
      </FadeInOnScroll>
    </SectionShell>
  );
}
