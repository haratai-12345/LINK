import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { LineCtaBlock } from "@/app/components/ui/LineCtaBlock";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { REAL_INFO_SECTION, type RealInfoIcon } from "@/app/lib/constants";
import {
  Banknote,
  CircleDollarSign,
  HeartHandshake,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

function RealInfoIconGraphic({ icon }: { icon: RealInfoIcon }) {
  const className = "h-5 w-5 text-pink-dark";

  switch (icon) {
    case "salary":
      return <Banknote className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "interview":
      return <ShieldCheck className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "paySystem":
      return (
        <CircleDollarSign className={className} strokeWidth={1.75} aria-hidden="true" />
      );
    case "mediation":
      return (
        <HeartHandshake className={className} strokeWidth={1.75} aria-hidden="true" />
      );
    case "fit":
      return (
        <UserRoundCheck className={className} strokeWidth={1.75} aria-hidden="true" />
      );
  }
}

export function RealInfoSection() {
  const lastIndex = REAL_INFO_SECTION.items.length - 1;

  return (
    <SectionShell ariaLabelledBy="real-info-heading" tone="muted" connect>
      <FadeInOnScroll>
        <SectionHeading
          size="display"
          title={REAL_INFO_SECTION.title}
          description={REAL_INFO_SECTION.description}
          className="home-section-heading"
          titleId="real-info-heading"
        />
      </FadeInOnScroll>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {REAL_INFO_SECTION.items.map((item, index) => (
          <li
            key={item.title}
            className={`flex min-w-0 ${
              index === lastIndex ? "md:col-span-2 md:justify-center" : ""
            }`}
          >
            <FadeInOnScroll className="w-full" delay={index * 80}>
              <article
                className={`brand-card w-full p-5 sm:p-6 ${
                  index === lastIndex ? "md:max-w-[calc(50%-0.625rem)]" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="icon-wrap flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-[#fff9f7]">
                    <RealInfoIconGraphic icon={item.icon} />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-base leading-snug text-text sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            </FadeInOnScroll>
          </li>
        ))}
      </ul>

      <FadeInOnScroll className="mt-8 space-y-8 sm:mt-10" delay={200}>
        <p className="mx-auto max-w-[36rem] text-center text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          {REAL_INFO_SECTION.closing}
        </p>
        <LineCtaBlock
          lead={REAL_INFO_SECTION.ctaLead}
          label={REAL_INFO_SECTION.buttonLabel}
          showMascot
        />
      </FadeInOnScroll>
    </SectionShell>
  );
}
