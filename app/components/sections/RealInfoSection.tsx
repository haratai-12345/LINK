import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { LineCtaBlock } from "@/app/components/ui/LineCtaBlock";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { REAL_INFO_SECTION, type RealInfoIcon } from "@/app/lib/constants";
import {
  Banknote,
  CalendarDays,
  FileSearch,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

function RealInfoIconGraphic({ icon }: { icon: RealInfoIcon }) {
  const className = "h-[1.125rem] w-[1.125rem] text-charcoal/70";

  switch (icon) {
    case "salary":
      return <Banknote className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "atmosphere":
      return <Users className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "shift":
      return <CalendarDays className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "support":
      return <HeartHandshake className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "interview":
      return <ShieldCheck className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "gap":
      return <FileSearch className={className} strokeWidth={1.5} aria-hidden="true" />;
  }
}

export function RealInfoSection() {
  return (
    <SectionShell ariaLabelledBy="real-info-heading" tone="muted" connect>
      <FadeInOnScroll>
        <header className="home-section-heading real-info-header">
          <p className="editorial-label">{REAL_INFO_SECTION.label}</p>
          <h2
            id="real-info-heading"
            className="font-serif text-[clamp(1.5rem,5vw,2rem)] font-medium leading-snug text-charcoal"
          >
            {REAL_INFO_SECTION.title}
          </h2>
          <p className="real-info-header__lead">{REAL_INFO_SECTION.description}</p>
        </header>
      </FadeInOnScroll>

      <ul className="real-info-grid">
        {REAL_INFO_SECTION.items.map((item, index) => (
          <li key={item.title}>
            <FadeInOnScroll delay={index * 70}>
              <article className="real-info-card">
                <div className="real-info-card__icon" aria-hidden="true">
                  <RealInfoIconGraphic icon={item.icon} />
                </div>
                <div className="real-info-card__body">
                  <h3 className="real-info-card__title">{item.title}</h3>
                  <p className="real-info-card__text">{item.description}</p>
                </div>
              </article>
            </FadeInOnScroll>
          </li>
        ))}
      </ul>

      <FadeInOnScroll className="real-info-cta" delay={200}>
        <LineCtaBlock
          lead={REAL_INFO_SECTION.ctaLead}
          label={REAL_INFO_SECTION.buttonLabel}
          align="left"
        />
      </FadeInOnScroll>
    </SectionShell>
  );
}
