import { Container } from "@/app/components/ui/Container";
import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { LineButton } from "@/app/components/ui/LineButton";
import {
  CAMPAIGN_SECTION,
  CAMPAIGNS,
  LINE_URL,
  type CampaignIcon,
} from "@/app/lib/constants";
import { Check, Gift, MessageCircle, Sparkles } from "lucide-react";

function CampaignIconGraphic({ icon }: { icon: CampaignIcon }) {
  const className = "h-8 w-8 text-pink-dark sm:h-9 sm:w-9";

  switch (icon) {
    case "referral":
      return <Gift className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "dress":
      return <Sparkles className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "concierge":
      return (
        <MessageCircle className={className} strokeWidth={1.5} aria-hidden="true" />
      );
  }
}

export function CampaignSection() {
  return (
    <section
      aria-labelledby="campaign-heading"
      className="home-section bg-section-white"
    >
      <Container className="home-container !max-w-[75rem] !px-5 lg:!px-8">
        <FadeInOnScroll>
          <header className="home-section-heading relative max-w-2xl">
            <p
              aria-hidden="true"
              className="select-none font-serif text-[clamp(1.75rem,7vw,3.75rem)] font-light uppercase leading-[1.05] tracking-[0.14em] text-pink/15"
            >
              {CAMPAIGN_SECTION.eyebrowEn}
            </p>
            <h2
              id="campaign-heading"
              className="relative -mt-4 font-serif text-[clamp(1.75rem,6.5vw,2.375rem)] leading-snug text-text sm:-mt-5"
            >
              {CAMPAIGN_SECTION.title}
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              {CAMPAIGN_SECTION.description}
            </p>
          </header>
        </FadeInOnScroll>

        <ul className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
          {CAMPAIGNS.map((campaign, index) => (
            <li key={campaign.id}>
              <FadeInOnScroll delay={index * 120}>
                <article className="campaign-card group flex flex-col gap-5 rounded-[20px] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] sm:flex-row sm:items-start sm:gap-6 sm:p-6 lg:p-8">
                  <div className="flex shrink-0 items-center justify-center self-start sm:w-[5.5rem] lg:w-[6.5rem]">
                    <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-border bg-[linear-gradient(180deg,#ffffff_0%,#fff9f7_100%)] sm:h-20 sm:w-20">
                      <CampaignIconGraphic icon={campaign.icon} />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="inline-flex rounded-full border border-pink/30 bg-pink-light px-2.5 py-0.5 text-[0.625rem] font-medium tracking-[0.22em] text-pink-dark">
                      LIMITED
                    </span>

                    <h3 className="mt-3 font-serif text-xl leading-snug text-text sm:text-2xl">
                      {campaign.title}
                    </h3>

                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                      {campaign.description}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {campaign.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-text"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-pink-dark"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeInOnScroll>
            </li>
          ))}
        </ul>

        <FadeInOnScroll className="mt-10 sm:mt-12 lg:mt-14" delay={360}>
          <div className="mx-auto w-full max-w-lg">
            <LineButton
              href={LINE_URL}
              large
              fullWidth
              className="min-h-[56px] shadow-[0_10px_28px_rgb(6_199_85/0.32)] sm:min-h-[60px]"
            >
              {CAMPAIGN_SECTION.ctaLabel}
            </LineButton>
            <p className="mt-3 text-center text-xs text-muted sm:text-sm">
              {CAMPAIGN_SECTION.ctaNote}
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
