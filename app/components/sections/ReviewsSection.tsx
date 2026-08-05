import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { REVIEWS_SECTION } from "@/app/lib/constants";

export function ReviewsSection() {
  return (
    <SectionShell id="reviews" ariaLabelledBy="reviews-heading" tone="pink" connect>
      <FadeInOnScroll>
        <SectionHeading
          eyebrow={REVIEWS_SECTION.eyebrow}
          title={REVIEWS_SECTION.title}
          description={REVIEWS_SECTION.description}
          supporting={REVIEWS_SECTION.supporting}
          className="home-section-heading"
          titleId="reviews-heading"
        />
      </FadeInOnScroll>

      <ul className="space-y-4 sm:space-y-5">
        {REVIEWS_SECTION.items.map((review, index) => (
          <li key={review.id}>
            <FadeInOnScroll delay={index * 90}>
              <article className="line-review-card rounded-[20px] border border-border bg-surface p-4 shadow-[var(--shadow-sm)] sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-light text-sm font-medium text-pink-dark">
                      {review.initial}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text">{review.name}</p>
                      <p className="text-xs text-muted">{review.meta}</p>
                    </div>
                  </div>
                  <time className="text-[0.6875rem] text-muted/80">{review.time}</time>
                </div>
                <div className="relative max-w-[92%] rounded-[18px] rounded-tl-md bg-[#f7f7f7] px-4 py-3 sm:max-w-[85%]">
                  <p className="text-[0.9375rem] leading-relaxed text-text">{review.message}</p>
                </div>
              </article>
            </FadeInOnScroll>
          </li>
        ))}
      </ul>

      <p className="text-caption mt-6 text-center text-xs text-muted sm:mt-8">
        {REVIEWS_SECTION.note}
      </p>
    </SectionShell>
  );
}
