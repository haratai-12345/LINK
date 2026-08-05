import Image from "next/image";
import type { FlowStep } from "@/app/lib/constants";

type FlowCardProps = {
  step: FlowStep;
};

export function FlowCard({ step }: FlowCardProps) {
  return (
    <article className="flow-card relative aspect-[3/2] w-full overflow-hidden rounded-[20px] border border-border bg-surface shadow-[var(--shadow-soft)]">
      <Image
        src={step.imageSrc}
        alt={step.alt}
        fill
        className="block h-full w-full object-cover object-center"
        sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1200px) calc(50vw - 48px), 560px"
      />
    </article>
  );
}
