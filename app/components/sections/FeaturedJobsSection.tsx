import Link from "next/link";
import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { SectionShell } from "@/app/components/ui/SectionShell";
import { FeaturedJobCard } from "@/app/components/sections/FeaturedJobCard";
import { FEATURED_JOBS, JOBS_PAGE_PATH } from "@/app/lib/constants";
import { getFeaturedStores } from "@/app/lib/stores";

export function FeaturedJobsSection() {
  const stores = getFeaturedStores(3);

  return (
    <SectionShell ariaLabelledBy="featured-jobs-heading" tone="muted" connect>
      <FadeInOnScroll>
        <SectionHeading
          eyebrow={FEATURED_JOBS.eyebrow}
          title={FEATURED_JOBS.title}
          description={FEATURED_JOBS.description}
          supporting={FEATURED_JOBS.supporting}
          className="home-section-heading"
          titleId="featured-jobs-heading"
        />
      </FadeInOnScroll>

      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {stores.map((store, index) => (
          <li key={store.id} className="flex">
            <FadeInOnScroll className="w-full" delay={index * 90}>
              <FeaturedJobCard store={store} />
            </FadeInOnScroll>
          </li>
        ))}
      </ul>

      <FadeInOnScroll className="mt-7 flex justify-center sm:mt-8" delay={280}>
        <Link
          href={JOBS_PAGE_PATH}
          className="inline-flex min-h-[52px] w-full max-w-md items-center justify-center rounded-[var(--radius-ui)] border border-pink-dark bg-surface px-6 py-3 text-[0.9375rem] font-medium text-pink-dark transition-colors hover:border-pink hover:bg-pink-light sm:w-auto sm:min-w-[14rem]"
        >
          {FEATURED_JOBS.viewAllLabel}
        </Link>
      </FadeInOnScroll>
    </SectionShell>
  );
}
