import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { TrustItem } from "@/app/components/ui/TrustItem";
import { HeroVisual } from "@/app/components/sections/HeroVisual";
import {
  HERO_DESCRIPTION,
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_MICROCOPY,
  HERO_TRUST_ITEMS,
  LINE_URL,
} from "@/app/lib/constants";

function DecoHearts() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="deco-heart absolute left-[4%] top-[12%] text-lg opacity-40">♡</span>
      <span className="deco-heart absolute right-[8%] top-[8%] text-sm opacity-30 delay-1">
        ♡
      </span>
      <span className="deco-paw absolute bottom-[18%] left-[6%] opacity-25">🐾</span>
      <div className="absolute -right-16 top-1/4 h-48 w-48 rounded-full bg-pink-light/60 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[#eef6f4]/50 blur-2xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-ivory"
    >
      <DecoHearts />

      <Container className="relative !py-6 sm:!py-8 lg:!py-9">
        <div className="grid items-center gap-6 lg:grid-cols-[40fr_60fr] lg:gap-8">
          {/* Left 40% */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <p className="hero-fade-in flex items-center gap-1.5 text-xs font-medium text-pink-dark sm:text-sm">
              <span aria-hidden="true">♡</span>
              {HERO_EYEBROW}
            </p>

            <h1
              id="hero-heading"
              className="hero-fade-in font-serif text-[clamp(1.5rem,4.8vw,2.25rem)] leading-[1.55] text-text"
            >
              {HERO_HEADLINE.lines.map((line) => {
                if (line.includes(HERO_HEADLINE.highlight)) {
                  const [before, after] = line.split(HERO_HEADLINE.highlight);
                  return (
                    <span key={line} className="block">
                      {before}
                      <span className="text-pink-dark">{HERO_HEADLINE.highlight}</span>
                      {after}
                    </span>
                  );
                }
                return (
                  <span key={line} className="block">
                    {line}
                  </span>
                );
              })}
            </h1>

            <p className="hero-fade-in text-sm leading-relaxed text-muted">
              {HERO_DESCRIPTION}
            </p>

            <ul
              className="hero-fade-in flex gap-2 sm:gap-3"
              aria-label="サービスの安心ポイント"
            >
              {HERO_TRUST_ITEMS.map((label) => (
                <TrustItem key={label} label={label} />
              ))}
            </ul>

            <div className="hero-fade-in flex flex-col gap-2 pt-1">
              <LineButton
                href={LINE_URL}
                large
                fullWidth
                className="shadow-[0_8px_24px_rgb(6_199_85/0.35)] sm:w-fit sm:min-w-[18rem]"
              />
              <p className="text-center text-xs leading-relaxed text-muted sm:text-left">
                {HERO_MICROCOPY.line1}
                <br />
                {HERO_MICROCOPY.line2}
              </p>
            </div>
          </div>

          {/* Right 60% */}
          <div className="hero-visual-wrap order-last w-full lg:order-none">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
