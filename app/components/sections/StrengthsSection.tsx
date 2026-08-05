import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
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
    <section
      id="strengths"
      aria-labelledby="strengths-heading"
      className="home-section bg-section-white"
    >
      <Container className="home-container !max-w-[75rem] !px-5 lg:!px-8">
        <SectionHeading
          align="left"
          title={STRENGTHS_SECTION.title}
          description={STRENGTHS_SECTION.description}
          className="home-section-heading max-w-2xl"
          titleId="strengths-heading"
        />

        <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {STRENGTHS_SECTION.items.map((item) => (
            <li key={item.title} className="flex">
              <article className="flex h-full w-full rounded-[20px] border border-border bg-surface p-5 shadow-[var(--shadow-sm)] sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-[#fff9f7]">
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
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
