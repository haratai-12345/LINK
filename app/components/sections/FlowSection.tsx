import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { FlowCard } from "@/app/components/sections/FlowCard";
import { FLOW_STEPS, FLOW_SUBTITLE } from "@/app/lib/constants";

export function FlowSection() {
  return (
    <SectionShell id="flow" ariaLabelledBy="flow-heading" tone="pink" connect>
      <FadeInOnScroll>
        <SectionHeading
          eyebrow="Flow"
          title="ご利用の流れ"
          description={FLOW_SUBTITLE}
          className="home-section-heading"
          titleId="flow-heading"
        />
      </FadeInOnScroll>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {FLOW_STEPS.map((step, index) => (
          <li key={step.imageSrc}>
            <FadeInOnScroll delay={index * 90}>
              <FlowCard step={step} />
            </FadeInOnScroll>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
