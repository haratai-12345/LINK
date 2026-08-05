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
  JOBS_PAGE_PATH,
  LINE_URL,
} from "@/app/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[linear-gradient(165deg,#ffffff_0%,#fff9f7_45%,#fdf2f0_100%)] pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_90%_40%,rgb(253_242_240/0.7)_0%,transparent_60%)]"
      />

      <Container className="home-container relative !max-w-[75rem] !px-5 !py-0 lg:!px-8">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[44fr_56fr] lg:gap-10">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="hero-fade-in flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-px w-6 bg-pink/40 sm:w-8"
              />
              <p className="inline-flex items-center rounded-full border border-border bg-surface/80 px-3.5 py-1 text-sm font-medium tracking-wide text-muted backdrop-blur-sm">
                {HERO_EYEBROW}
              </p>
            </div>

            <h1
              id="hero-heading"
              className="hero-fade-in font-serif text-[clamp(1.875rem,7.2vw,4rem)] font-medium leading-[1.22] tracking-[0.02em] text-text [text-wrap:balance]"
            >
              {HERO_HEADLINE.before}
              <span className="text-pink-dark">{HERO_HEADLINE.highlight}</span>
              {HERO_HEADLINE.after}
            </h1>

            <p className="hero-fade-in max-w-[520px] text-[0.9375rem] leading-[1.85] text-muted sm:text-base">
              {HERO_DESCRIPTION}
            </p>

            <div className="hero-fade-in flex flex-col gap-3">
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
                <LineButton
                  href={LINE_URL}
                  large
                  fullWidth
                  className="min-h-[52px] shadow-[0_10px_28px_rgb(6_199_85/0.32)] sm:w-fit sm:min-w-[18rem]"
                />
                <SecondaryButton
                  href={JOBS_PAGE_PATH}
                  fullWidth
                  className="min-h-[52px] rounded-[24px] border-pink bg-ivory px-8 text-[0.9375rem] text-pink-dark hover:border-pink-dark hover:bg-pink-light sm:w-fit sm:min-w-[12rem] sm:text-base"
                >
                  {HERO_JOBS_BUTTON_LABEL}
                </SecondaryButton>
              </div>
              <p className="text-center text-xs text-muted sm:text-left">
                {HERO_REASSURANCE}
              </p>
            </div>
          </div>

          <div className="hero-visual-wrap order-last w-full lg:order-none">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
