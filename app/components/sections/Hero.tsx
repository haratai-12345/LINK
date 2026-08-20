import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { SecondaryButton } from "@/app/components/ui/SecondaryButton";
import { HeroVisual } from "@/app/components/sections/HeroVisual";
import {
  HERO_DESCRIPTION,
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_JOBS_BUTTON_LABEL,
  HERO_REASSURANCE,
  HERO_SEO_CONTEXT,
  JOBS_PAGE_PATH,
  LINE_URL,
} from "@/app/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="hero-section"
    >
      <Container className="home-container hero-section__container">
        <div className="hero-section__grid">
          <div className="hero-section__copy">
            <div className="hero-fade-in hero-section__eyebrow">
              <span className="hero-section__eyebrow-line" aria-hidden="true" />
              <p>{HERO_EYEBROW}</p>
            </div>

            <h1 id="hero-heading" className="hero-fade-in hero-section__title">
              {HERO_HEADLINE.before}
              <span className="text-pink-dark">{HERO_HEADLINE.highlight}</span>
              {HERO_HEADLINE.after}
            </h1>

            <p className="hero-fade-in mt-2 text-sm leading-relaxed text-muted">
              {HERO_SEO_CONTEXT}
            </p>

            <p className="hero-fade-in hero-section__description">{HERO_DESCRIPTION}</p>

            <div className="hero-fade-in hero-section__actions">
              <div className="hero-section__buttons">
                <LineButton href={LINE_URL} large className="hero-section__line-btn" />
                <SecondaryButton href={JOBS_PAGE_PATH} className="hero-section__jobs-btn">
                  {HERO_JOBS_BUTTON_LABEL}
                </SecondaryButton>
              </div>
              <p className="hero-section__reassurance">{HERO_REASSURANCE}</p>
            </div>
          </div>

          <div className="hero-visual-wrap hero-fade-in">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
