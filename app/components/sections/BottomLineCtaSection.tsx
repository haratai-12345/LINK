import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import {
  BOTTOM_LINE_CTA,
  HERO_IMAGE,
  LINE_URL,
} from "@/app/lib/constants";

export function BottomLineCtaSection() {
  return (
    <section
      aria-labelledby="bottom-line-cta-heading"
      className="home-section bg-section-muted"
    >
      <Container className="home-container !max-w-[75rem] !px-5 lg:!px-8">
        <div className="rounded-[24px] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="max-w-xl space-y-3 text-center sm:text-left">
              <h2
                id="bottom-line-cta-heading"
                className="font-serif text-[clamp(1.5rem,5.5vw,2rem)] leading-snug text-text"
              >
                {BOTTOM_LINE_CTA.title}
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {BOTTOM_LINE_CTA.description}
              </p>
              <LineButton
                href={LINE_URL}
                large
                fullWidth
                className="min-h-[52px] shadow-[0_10px_28px_rgb(6_199_85/0.32)] sm:w-fit sm:min-w-[18rem]"
              />
              <p className="text-xs text-muted">{BOTTOM_LINE_CTA.reassurance}</p>
            </div>

            <div
              aria-hidden="true"
              className="relative h-24 w-24 shrink-0 opacity-90 sm:h-28 sm:w-28"
            >
              <Image
                src={HERO_IMAGE.src}
                alt=""
                width={112}
                height={112}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
