import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { AreaJobLinks } from "@/app/components/jobs/AreaJobLinks";
import { JOBS_PAGE } from "@/app/lib/jobs";
import { LINE_URL } from "@/app/lib/constants";
import type { ReactNode } from "react";

type JobsPageHeroProps = {
  title?: string;
  description?: string;
  breadcrumb?: ReactNode;
  showAreaLinks?: boolean;
};

export function JobsPageHero({
  title = JOBS_PAGE.title,
  description = JOBS_PAGE.description,
  breadcrumb,
  showAreaLinks = false,
}: JobsPageHeroProps) {
  return (
    <section
      aria-labelledby="jobs-heading"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#fff9f7_100%)] py-10 sm:py-12"
    >
      {breadcrumb}
      <Container className="!max-w-[75rem] !px-4 sm:!px-6 lg:!px-8">
        <p className="mb-2 text-xs font-medium tracking-widest text-pink-dark uppercase">
          Jobs
        </p>
        <h1
          id="jobs-heading"
          className="font-serif text-2xl text-text sm:text-3xl"
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
        {showAreaLinks && (
          <div className="mt-6 max-w-2xl border-t border-[#f0eeec] pt-5">
            <p className="mb-3 text-sm font-medium text-text">エリアから探す</p>
            <AreaJobLinks />
          </div>
        )}
        <div className="mt-6">
          <LineButton
            href={LINE_URL}
            fullWidth
            className="shadow-[0_8px_24px_rgb(6_199_85/0.3)] sm:w-fit sm:min-w-[18rem]"
          />
        </div>
      </Container>
    </section>
  );
}
