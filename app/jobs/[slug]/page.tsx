import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronLeft, MapPin, TrainFront } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_URL, SITE_NAME } from "@/app/lib/constants";
import {
  getAllJobSlugs,
  getJobBySlug,
  JOBS_PAGE,
  type Job,
} from "@/app/lib/jobs";

type JobDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: `求人詳細｜${SITE_NAME}` };
  }

  return {
    title: `${job.name}｜求人詳細｜${SITE_NAME}`,
    description: `${job.area} · ${job.industry}。体入時給 ${job.trialHourly}、本入時給 ${job.regularHourly}。`,
  };
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

function buildDetailSections(job: Job): DetailSectionProps[] {
  return [
    {
      title: "店舗情報",
      rows: [
        { label: "店舗名", value: job.name },
        { label: "業種", value: job.industry },
        { label: "エリア", value: job.area },
        { label: "最寄り駅", value: job.stations },
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
  ];
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const sections = buildDetailSections(job);

  return (
    <div className="bg-ivory pb-16 pt-6 sm:pb-20 sm:pt-8">
      <Container className="!max-w-[42rem] !px-4 sm:!px-6">
        <Link
          href="/jobs"
          className="mb-6 inline-flex min-h-10 items-center gap-1 text-sm text-muted transition-colors hover:text-charcoal"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          求人一覧に戻る
        </Link>

        <header className="mb-8 space-y-4">
          <p className="text-xs font-medium tracking-widest text-muted uppercase">
            Job Detail
          </p>
          <h1 className="font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
            {job.name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {job.area}
            </span>
            <span>{job.industry}</span>
          </div>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-muted">
            <TrainFront className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="break-words">{job.stations}</span>
          </p>
        </header>

        <div className="space-y-5">
          {sections.map((section) => (
            <DetailSection key={section.title} {...section} />
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface px-5 py-8 text-center sm:px-8 sm:py-10">
          <p className="mb-5 text-sm leading-relaxed text-muted">
            {JOBS_PAGE.lineDetailNote}
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
