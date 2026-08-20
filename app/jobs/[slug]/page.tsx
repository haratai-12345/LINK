import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import { AreaJobsView } from "@/app/components/jobs/AreaJobsView";
import { JobDetailGallery } from "@/app/components/jobs/JobDetailGallery";
import { Breadcrumbs } from "@/app/components/seo/Breadcrumbs";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_URL, SITE_NAME } from "@/app/lib/constants";
import {
  getAllAreaPageSlugs,
  getAreaPageBySlug,
  getAreaPageForJob,
  getAreaPagePath,
  getRelatedJobsInArea,
} from "@/app/lib/job-areas";
import {
  getAllJobSlugs,
  getJobBySlug,
  getJobImages,
  JOBS_PAGE,
  type Job,
  type JobStorePr,
} from "@/app/lib/jobs";
import {
  buildAreaJobsMetadata,
  buildJobDetailMetadata,
  buildJobPostingJsonLd,
  getJobPageHeading,
} from "@/app/lib/seo";

type JobsSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...getAllJobSlugs().map((slug) => ({ slug })),
    ...getAllAreaPageSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: JobsSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const areaPage = getAreaPageBySlug(slug);

  if (areaPage) {
    return buildAreaJobsMetadata(areaPage);
  }

  const job = getJobBySlug(slug);

  if (!job) {
    return { title: `求人詳細｜${SITE_NAME}` };
  }

  return buildJobDetailMetadata(job);
}

type DetailRowProps = {
  label: string;
  value: string;
};

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="grid gap-1 border-b border-[#f0eeec] py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="text-sm font-medium text-muted">{label}</dt>
      <dd className="break-words text-sm leading-relaxed text-charcoal">{value}</dd>
    </div>
  );
}

type DetailSectionProps = {
  title: string;
  rows: DetailRowProps[];
};

function DetailSection({ title, rows }: DetailSectionProps) {
  return (
    <section className="rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface">
      <h2 className="border-b border-[#f0eeec] px-5 py-4 font-serif text-lg text-charcoal sm:px-6">
        {title}
      </h2>
      <dl className="px-5 sm:px-6">
        {rows.map((row) => (
          <DetailRow key={row.label} label={row.label} value={row.value} />
        ))}
      </dl>
    </section>
  );
}

type DetailProseSectionProps = {
  storePr: JobStorePr;
};

function DetailProseSection({ storePr }: DetailProseSectionProps) {
  return (
    <section className="rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface">
      <h2 className="border-b border-[#f0eeec] px-5 py-4 font-serif text-lg text-charcoal sm:px-6">
        {storePr.sectionTitle ?? "店舗PR"}
      </h2>
      <div className="space-y-4 px-5 py-5 sm:px-6">
        {storePr.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="break-words text-sm leading-relaxed text-charcoal"
          >
            {paragraph}
          </p>
        ))}
        <div className="pt-1">
          <p className="mb-3 text-sm font-medium text-charcoal">
            {storePr.recommendationTitle}
          </p>
          <ul className="space-y-2">
            {storePr.recommendations.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-relaxed text-charcoal"
              >
                <span className="shrink-0 text-muted" aria-hidden="true">
                  ・
                </span>
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function buildDetailSections(job: Job): DetailSectionProps[] {
  if (job.customDetailSections) {
    return job.customDetailSections;
  }

  return [
    {
      title: "店舗情報",
      rows: [
        { label: "店舗名", value: job.name },
        { label: "業種", value: job.industry },
      ],
    },
    {
      title: "給与",
      rows: [
        { label: "体入時給", value: job.trialHourly },
        { label: "本入時給", value: job.regularHourly },
        { label: "平均時給", value: job.averageHourly },
        { label: "日払い", value: job.dailyPay },
      ],
    },
    {
      title: "勤務条件",
      rows: [
        { label: "営業時間", value: job.businessHours },
        { label: "シフト", value: job.shift },
        { label: "終電上がり", value: job.lastTrain },
        { label: "ノンアル勤務", value: job.nonAlcohol },
      ],
    },
    {
      title: "待遇",
      rows: [
        { label: "ドレスレンタル", value: job.dressRental },
        { label: "ヘアメイク", value: job.hairMake },
        { label: "送り", value: job.transport },
        { label: "タトゥー相談", value: job.tattoo },
      ],
    },
    {
      title: "アクセス",
      rows: [
        { label: "エリア", value: job.area },
        { label: "最寄り駅", value: job.stations },
      ],
    },
  ];
}

function RelatedAreaJobs({ job }: { job: Job }) {
  const areaPage = getAreaPageForJob(job);
  const relatedJobs = getRelatedJobsInArea(job);

  if (!areaPage || relatedJobs.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="同じエリアの求人"
      className="mt-8 rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface px-5 py-5 sm:px-6"
    >
      <h2 className="mb-3 text-sm font-medium text-charcoal">
        {areaPage.label}エリアの他の求人
      </h2>
      <ul className="space-y-2">
        {relatedJobs.map((relatedJob) => (
          <li key={relatedJob.slug}>
            <Link
              href={`/jobs/${relatedJob.slug}`}
              className="inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-charcoal"
            >
              {relatedJob.name}
              <span className="ml-2 text-xs text-[#d4d0cc]">{relatedJob.industry}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function JobDetailView({ job }: { job: Job }) {
  const sections = buildDetailSections(job);
  const images = getJobImages(job);
  const jobPostingJsonLd = buildJobPostingJsonLd(job);
  const areaPage = getAreaPageForJob(job);

  return (
    <div className="bg-ivory pb-16 pt-6 sm:pb-20 sm:pt-8">
      {jobPostingJsonLd && <JsonLd data={jobPostingJsonLd} />}
      <Container className="!max-w-[42rem] !px-4 sm:!px-6">
        <Breadcrumbs
          items={[
            { label: "ホーム", href: "/" },
            { label: "求人を探す", href: "/jobs" },
            ...(areaPage
              ? [
                  {
                    label: areaPage.breadcrumbLabel,
                    href: getAreaPagePath(areaPage.slug),
                  },
                ]
              : []),
            { label: job.name },
          ]}
        />

        <div className="mb-6 flex flex-col gap-2">
          {areaPage && (
            <Link
              href={getAreaPagePath(areaPage.slug)}
              className="inline-flex min-h-10 items-center gap-1 text-sm text-muted transition-colors hover:text-charcoal"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              {areaPage.listBackLabel}
            </Link>
          )}
          <Link
            href="/jobs"
            className="inline-flex min-h-10 items-center gap-1 text-sm text-muted transition-colors hover:text-charcoal"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            千葉の求人一覧へ戻る
          </Link>
        </div>

        <header className="mb-5 sm:mb-6">
          <p className="mb-4 text-xs font-medium tracking-widest text-muted uppercase">
            Job Detail
          </p>
          <h1 className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            {getJobPageHeading(job)}
          </h1>
        </header>

        {images.length > 0 && (
          <div className="mb-5 sm:mb-6">
            <JobDetailGallery jobName={job.name} images={images} />
          </div>
        )}

        <div className="space-y-5">
          {sections.map((section) => (
            <DetailSection key={section.title} {...section} />
          ))}
          {job.storePr && <DetailProseSection storePr={job.storePr} />}
        </div>

        <RelatedAreaJobs job={job} />

        <div className="mt-10 rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface px-5 py-8 text-center sm:px-8 sm:py-10">
          <p className="mb-5 text-sm leading-relaxed text-muted">
            {job.detailLineNote ?? JOBS_PAGE.lineDetailNote}
          </p>
          <LineButton
            href={LINE_URL}
            fullWidth
            large
            className="shadow-[0_8px_24px_rgb(6_199_85/0.3)]"
          >
            {JOBS_PAGE.detailLineLabel}
          </LineButton>
        </div>
      </Container>
    </div>
  );
}

export default async function JobsSlugPage({ params }: JobsSlugPageProps) {
  const { slug } = await params;
  const areaPage = getAreaPageBySlug(slug);

  if (areaPage) {
    return <AreaJobsView area={areaPage} />;
  }

  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailView job={job} />;
}
