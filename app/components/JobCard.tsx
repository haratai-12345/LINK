import Link from "next/link";
import { MapPin, Clock, TrainFront, Wallet } from "lucide-react";
import type { Job } from "@/app/lib/jobs";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  const detailHref = `/jobs/${job.slug}`;

  return (
    <article className="job-card group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface shadow-[0_2px_16px_rgb(44_42_40/0.06)] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgb(44_42_40/0.1)]">
      <div className="border-b border-[#f0eeec] px-5 py-6 sm:px-6 sm:py-7">
        <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-wide text-muted">
          <span className="inline-flex min-w-0 items-center gap-1">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-charcoal/60" aria-hidden="true" />
            <span className="break-words">{job.area}</span>
          </span>
          <span className="text-[#d4d0cc]">|</span>
          <span className="break-words">{job.industry}</span>
        </div>

        <h3 className="font-serif text-xl leading-snug text-charcoal sm:text-[1.375rem]">
          {job.name}
        </h3>

        <p className="mt-2 flex min-w-0 items-start gap-1.5 text-sm leading-relaxed text-muted">
          <TrainFront
            className="mt-0.5 h-4 w-4 shrink-0 text-charcoal/50"
            aria-hidden="true"
          />
          <span className="min-w-0 break-words">{job.stations}</span>
        </p>
      </div>

      <dl className="flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="grid gap-3">
          <div className="flex min-w-0 items-start gap-2.5">
            <Wallet
              className="mt-0.5 h-4 w-4 shrink-0 text-charcoal/70"
              aria-hidden="true"
            />
            <div className="min-w-0 space-y-1">
              <dt className="text-[0.6875rem] font-medium tracking-wider text-muted uppercase">
                体入時給
              </dt>
              <dd className="break-words text-sm leading-relaxed text-charcoal">
                {job.trialHourly}
              </dd>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-2.5">
            <Wallet
              className="mt-0.5 h-4 w-4 shrink-0 text-charcoal/70"
              aria-hidden="true"
            />
            <div className="min-w-0 space-y-1">
              <dt className="text-[0.6875rem] font-medium tracking-wider text-muted uppercase">
                本入時給
              </dt>
              <dd className="break-words text-sm leading-relaxed text-charcoal">
                {job.regularHourly}
              </dd>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-2.5">
            <Clock
              className="mt-0.5 h-4 w-4 shrink-0 text-charcoal/70"
              aria-hidden="true"
            />
            <div className="min-w-0 space-y-1">
              <dt className="text-[0.6875rem] font-medium tracking-wider text-muted uppercase">
                営業時間
              </dt>
              <dd className="break-words text-sm leading-relaxed text-charcoal">
                {job.businessHours}
              </dd>
            </div>
          </div>
        </div>

        <Link
          href={detailHref}
          className="mt-auto inline-flex min-h-[48px] w-full items-center justify-center rounded-[var(--radius-ui)] border border-pink-dark bg-pink-dark px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-[0_4px_14px_rgb(201_123_119/0.22)] transition-[filter,box-shadow] duration-200 hover:brightness-[0.94] hover:shadow-[0_6px_18px_rgb(201_123_119/0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-dark active:brightness-[0.88]"
        >
          詳細を見る
        </Link>
      </dl>
    </article>
  );
}
