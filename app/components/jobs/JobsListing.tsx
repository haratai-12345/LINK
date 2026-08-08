"use client";

import { useMemo, useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { JobFilters } from "@/app/components/jobs/JobFilters";
import { JobCard } from "@/app/components/JobCard";
import {
  DEFAULT_JOB_FILTERS,
  filterJobs,
  getAllJobs,
  type JobFilterValues,
} from "@/app/lib/jobs";

export function JobsListing() {
  const allJobs = useMemo(() => getAllJobs(), []);
  const [filters, setFilters] = useState<JobFilterValues>(DEFAULT_JOB_FILTERS);

  const filteredJobs = useMemo(
    () => filterJobs(allJobs, filters),
    [allJobs, filters],
  );

  return (
    <section aria-label="店舗一覧" className="bg-ivory pb-16 pt-6 sm:pb-20 sm:pt-8">
      <Container className="!max-w-[75rem] !px-4 sm:!px-6 lg:!px-8">
        <div className="mb-6 sm:mb-8">
          <JobFilters onChange={setFilters} />
        </div>

        {filteredJobs.length === 0 ? (
          <p className="rounded-[24px] border border-[#f0ddd8] bg-surface px-4 py-10 text-center text-sm text-muted">
            条件に合う店舗が見つかりませんでした。LINEでご希望をお聞かせください。
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
