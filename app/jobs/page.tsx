import type { Metadata } from "next";
import { JobsPageHero } from "@/app/components/jobs/JobsPageHero";
import { JobsListing } from "@/app/components/jobs/JobsListing";
import { JobsBottomCta } from "@/app/components/jobs/JobsBottomCta";
import { SITE_NAME } from "@/app/lib/constants";
import { JOBS_PAGE } from "@/app/lib/stores";

export const metadata: Metadata = {
  title: `求人を探す｜${SITE_NAME}`,
  description: JOBS_PAGE.description,
};

export default function JobsPage() {
  return (
    <>
      <JobsPageHero />
      <JobsListing />
      <JobsBottomCta />
    </>
  );
}
