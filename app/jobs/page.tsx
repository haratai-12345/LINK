import type { Metadata } from "next";
import { JobsPageHero } from "@/app/components/jobs/JobsPageHero";
import { JobsListing } from "@/app/components/jobs/JobsListing";
import { JobsBottomCta } from "@/app/components/jobs/JobsBottomCta";
import { buildJobsListMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildJobsListMetadata();

export default function JobsPage() {
  return (
    <>
      <JobsPageHero showAreaLinks />
      <JobsListing />
      <JobsBottomCta />
    </>
  );
}
