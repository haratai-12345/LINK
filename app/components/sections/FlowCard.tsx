import type { FlowStep } from "@/app/lib/constants";

type FlowCardProps = {
  step: FlowStep;
};

function PawBadge({ step }: { step: string }) {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#fdf2f0,#f6ece9)] text-xs font-bold text-pink-dark shadow-sm ring-1 ring-[#f0d4cf]">
      {step}
    </span>
  );
}

export function FlowCard({ step }: FlowCardProps) {
  return (
    <article className="flow-card group flex h-full min-w-[10.5rem] flex-col rounded-2xl border border-[#f5dcd6] bg-surface p-3.5 shadow-[0_4px_20px_rgb(240_212_207/0.35)] sm:min-w-0 sm:p-4">
      <div className="mb-2.5 flex items-start gap-2">
        <PawBadge step={step.step} />
        <h3 className="pt-0.5 font-serif text-sm leading-snug text-text">{step.title}</h3>
      </div>

      {/* 猫イラスト差し替え — public{step.imageSrc} */}
      <div
        className="relative mb-2.5 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[linear-gradient(160deg,#fdf2f0_0%,#fce8e4_100%)] ring-1 ring-[#f0d4cf]/60"
        role="img"
        aria-label={`${step.title}のイラスト`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-2xl opacity-20 transition-opacity group-hover:opacity-30"
        >
          🐾
        </div>
      </div>

      <p className="mt-auto text-xs leading-relaxed text-muted">{step.description}</p>
    </article>
  );
}
