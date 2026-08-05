import { Container } from "@/app/components/ui/Container";
import { FlowCard } from "@/app/components/sections/FlowCard";
import { FLOW_STEPS, FLOW_SUBTITLE } from "@/app/lib/constants";

export function FlowSection() {
  return (
    <section
      id="flow"
      aria-labelledby="flow-heading"
      className="home-section bg-section-pink"
    >
      <Container className="home-container !max-w-[75rem] !px-5 lg:!px-8">
        <div className="home-section-heading max-w-2xl">
          <p className="mb-2 text-xs font-medium tracking-widest text-pink-dark uppercase">
            Flow
          </p>
          <h2
            id="flow-heading"
            className="font-serif text-[clamp(1.75rem,6.5vw,2.125rem)] text-text"
          >
            ご利用の流れ
          </h2>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted sm:mt-3 sm:text-base">
            {FLOW_SUBTITLE}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
          {FLOW_STEPS.map((step) => (
            <li key={step.imageSrc} className="min-w-0">
              <FlowCard step={step} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
