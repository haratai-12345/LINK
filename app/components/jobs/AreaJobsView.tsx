import { JobsPageHero } from "@/app/components/jobs/JobsPageHero";
import { JobsListing } from "@/app/components/jobs/JobsListing";
import { JobsBottomCta } from "@/app/components/jobs/JobsBottomCta";
import { Breadcrumbs } from "@/app/components/seo/Breadcrumbs";
import { AreaJobLinks } from "@/app/components/jobs/AreaJobLinks";
import { Container } from "@/app/components/ui/Container";
import type { JobAreaPageConfig } from "@/app/lib/job-areas";
import { getJobsForAreaPage } from "@/app/lib/job-areas";

type AreaJobsViewProps = {
  area: JobAreaPageConfig;
};

export function AreaJobsView({ area }: AreaJobsViewProps) {
  const jobs = getJobsForAreaPage(area.slug);

  return (
    <>
      <JobsPageHero
        title={area.h1}
        description={area.intro}
        breadcrumb={
          <Container className="!max-w-[75rem] !px-4 sm:!px-6 lg:!px-8">
            <Breadcrumbs
              items={[
                { label: "ホーム", href: "/" },
                { label: "求人を探す", href: "/jobs" },
                { label: area.breadcrumbLabel },
              ]}
            />
          </Container>
        }
      />
      <Container className="!max-w-[75rem] !px-4 pb-2 sm:!px-6 lg:!px-8">
        <AreaJobLinks />
      </Container>
      <JobsListing jobs={jobs} showAreaFilter={false} emptyMessage={`${area.label}エリアの条件に合う店舗が見つかりませんでした。LINEでご希望をお聞かせください。`} />
      <JobsBottomCta />
    </>
  );
}
