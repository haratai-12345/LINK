import { Container } from "@/app/components/ui/Container";
import { FlowCard } from "@/app/components/sections/FlowCard";
import { FLOW_STEPS } from "@/app/lib/constants";

export function FlowSection() {
  return (
    <section
      id="flow"
      aria-labelledby="flow-heading"
      className="relative bg-[linear-gradient(180deg,#fff9f6_0%,#ffffff_100%)] py-6 sm:py-8"
    >
      <Container>
        <div className="mb-4 flex items-center gap-2 sm:mb-5">
          <span aria-hidden="true" className="text-pink-dark">
            🐾
          </span>
          <h2
            id="flow-heading"
            className="font-serif text-lg text-text sm:text-xl"
          >
            ご利用の流れ
          </h2>
          <span aria-hidden="true" className="text-pink/60">
            ♡
          </span>
        </div>

        <div className="flow-scroll -mx-4 flex gap-3.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {FLOW_STEPS.map((step) => (
            <FlowCard key={step.step} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
