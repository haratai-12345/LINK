import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { BrandCard } from "@/app/components/ui/BrandCard";
import { STRENGTHS_SECTION, type StrengthIcon } from "@/app/lib/constants";
import {
  CalendarDays,
  HeartHandshake,
  MapPinned,
  Search,
  Sparkles,
} from "lucide-react";

function StrengthIconGraphic({ icon }: { icon: StrengthIcon }) {
  const className = "h-5 w-5 text-pink-dark";

  switch (icon) {
    case "map":
      return <MapPinned className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "search":
      return <Search className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "calendar":
      return <CalendarDays className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "sparkles":
      return <Sparkles className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "support":
      return <HeartHandshake className={className} strokeWidth={1.75} aria-hidden="true" />;
    default:
      return null;
  }
}

export function StrengthsSection() {
  return (
    <SectionShell id="strengths" ariaLabelledBy="strengths-heading" tone="white" connect>
      <FadeInOnScroll>
        <SectionHeading
          eyebrow="Why LINK"
          title={STRENGTHS_SECTION.title}
          description={STRENGTHS_SECTION.description}
          className="home-section-heading"
          titleId="strengths-heading"
        />
      </FadeInOnScroll>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {STRENGTHS_SECTION.items.map((item, index) => (
          <li key={item.title} className="flex">
            <FadeInOnScroll className="w-full" delay={index * 70}>
              <BrandCard className="rounded-[var(--radius-card)] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="icon-wrap flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-btn)] border border-border/80 bg-[#faf8f5]">
                    <StrengthIconGraphic icon={item.icon} />
                  </span>
                  <div className="flex min-h-[4.5rem] flex-col gap-2">
                    <h3 className="font-serif text-base leading-snug text-text sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="line-clamp-3 text-[0.9375rem] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </BrandCard>
            </FadeInOnScroll>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
