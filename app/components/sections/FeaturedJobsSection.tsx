import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { FeaturedJobCard } from "@/app/components/sections/FeaturedJobCard";
import { FEATURED_JOBS, JOBS_PAGE_PATH } from "@/app/lib/constants";
import { getFeaturedStores } from "@/app/lib/stores";

export function FeaturedJobsSection() {
  const stores = getFeaturedStores(3);

  return (
    <section
      aria-labelledby="featured-jobs-heading"
      className="home-section bg-section-muted"
    >
      <Container className="home-container !max-w-[75rem] !px-5 lg:!px-8">
        <SectionHeading
          align="left"
          title={FEATURED_JOBS.title}
          description={FEATURED_JOBS.description}
          className="home-section-heading max-w-2xl"
          titleId="featured-jobs-heading"
        />

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {stores.map((store) => (
            <li key={store.id} className="flex">
              <FeaturedJobCard store={store} />
            </li>
          ))}
        </ul>

        <div className="mt-7 flex justify-center sm:mt-8 lg:mt-10">
          <Link
            href={JOBS_PAGE_PATH}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-[24px] border border-pink-dark bg-surface px-6 py-3 text-[0.9375rem] font-medium text-pink-dark transition-colors hover:border-pink hover:bg-pink-light sm:w-auto sm:min-w-[14rem] sm:text-base"
          >
            {FEATURED_JOBS.viewAllLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
