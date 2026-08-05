import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { JOBS_PAGE_PATH, JOBS_PROMO } from "@/app/lib/constants";

export function JobsPromoSection() {
  return (
    <section
      aria-labelledby="jobs-promo-heading"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#fff9f7_100%)] py-12 sm:py-14"
    >
      <Container className="!max-w-[75rem] !px-4 sm:!px-6 lg:!px-8">
        <div className="rounded-[24px] border border-[#f0ddd8] bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <h2
            id="jobs-promo-heading"
            className="font-serif text-xl text-text sm:text-2xl"
          >
            {JOBS_PROMO.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {JOBS_PROMO.description}
          </p>
          <Link
            href={JOBS_PAGE_PATH}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-[24px] border border-pink-dark bg-ivory px-6 py-3 text-sm font-medium text-pink-dark transition-colors hover:border-pink hover:bg-pink-light sm:w-fit sm:min-w-[14rem] sm:text-base"
          >
            {JOBS_PROMO.buttonLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
