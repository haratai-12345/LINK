import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { LineCtaBlock } from "@/app/components/ui/LineCtaBlock";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { BOTTOM_LINE_CTA } from "@/app/lib/constants";

export function BottomLineCtaSection() {
  return (
    <SectionShell ariaLabelledBy="bottom-line-cta-heading" tone="ivory" connect>
      <FadeInOnScroll>
        <div className="bottom-cta">
          <p className="bottom-cta__eyebrow">{BOTTOM_LINE_CTA.brandMessage}</p>

          <h2 id="bottom-line-cta-heading" className="bottom-cta__title">
            {BOTTOM_LINE_CTA.title}
          </h2>

          <p className="bottom-cta__description">{BOTTOM_LINE_CTA.description}</p>

          <p className="bottom-cta__guide">{BOTTOM_LINE_CTA.guideMessage}</p>

          <LineCtaBlock
            lead={BOTTOM_LINE_CTA.ctaLead}
            note={BOTTOM_LINE_CTA.reassurance}
            align="left"
          />
        </div>
      </FadeInOnScroll>
    </SectionShell>
  );
}
