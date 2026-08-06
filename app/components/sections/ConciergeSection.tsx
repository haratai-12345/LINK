import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { CONCIERGE_SECTION } from "@/app/lib/constants";

export function ConciergeSection() {
  return (
    <SectionShell
      ariaLabelledBy="concierge-heading"
      tone="ivory"
      connect
      className="concierge-section-wrap"
    >
      <FadeInOnScroll>
        <div className="concierge-editorial">
          <header className="concierge-editorial__header">
            <p className="editorial-label">{CONCIERGE_SECTION.label}</p>
            <h2 id="concierge-heading" className="concierge-editorial__title">
              {CONCIERGE_SECTION.title}
            </h2>
            <p className="concierge-editorial__lead">{CONCIERGE_SECTION.description}</p>
          </header>

          <ul className="concierge-editorial__trust" aria-label="安心してご相談いただける理由">
            {CONCIERGE_SECTION.trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <ol className="concierge-editorial__highlights">
            {CONCIERGE_SECTION.highlights.map((item) => (
              <li key={item.num} className="concierge-editorial__highlight">
                <span className="concierge-editorial__num" aria-hidden="true">
                  {item.num}
                </span>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </FadeInOnScroll>
    </SectionShell>
  );
}
