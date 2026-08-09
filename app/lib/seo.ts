import type { Metadata } from "next";
import { SITE_NAME } from "@/app/lib/constants";
import type { Job } from "@/app/lib/jobs";

/** 本番ドメインは NEXT_PUBLIC_SITE_URL で設定 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const HOME_SEO = {
  title: "千葉のキャバクラ求人・夜職求人ならLINK（リンク）",
  description:
    "千葉・千葉中央・富士見町などを中心に、キャバクラ・ガールズバー等の夜職求人をご紹介。専任コンシェルジュが希望条件に合ったお店探しを無料でサポートします。",
} as const;

export const JOBS_LIST_SEO = {
  title: "千葉のキャバクラ・夜職求人一覧",
  description:
    "千葉エリアのキャバクラ求人を一覧で掲載。エリア・条件から店舗を比較し、気になる求人は詳細ページで確認。LINKのコンシェルジュがLINEで無料相談に対応します。",
} as const;

export function getCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function getJobPageTitle(job: Job): string {
  return `${job.name}の求人情報｜${job.area}｜${SITE_NAME}`;
}

export function getJobPageDescription(job: Job): string {
  return `${job.area}の${job.name}の求人情報。体入時給${job.trialHourly}、本入時給${job.regularHourly}。営業時間、待遇、アクセスなどを掲載。${SITE_NAME}から無料で相談できます。`;
}

export function getJobPageHeading(job: Job): string {
  return `${job.name}の求人情報`;
}

export function buildHomeMetadata(): Metadata {
  return {
    title: { absolute: HOME_SEO.title },
    description: HOME_SEO.description,
    alternates: {
      canonical: getCanonicalUrl("/"),
    },
    openGraph: {
      title: HOME_SEO.title,
      description: HOME_SEO.description,
      url: getCanonicalUrl("/"),
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: "website",
    },
  };
}

export function buildJobsListMetadata(): Metadata {
  const title = `${JOBS_LIST_SEO.title}｜${SITE_NAME}`;
  return {
    title,
    description: JOBS_LIST_SEO.description,
    alternates: {
      canonical: getCanonicalUrl("/jobs"),
    },
    openGraph: {
      title,
      description: JOBS_LIST_SEO.description,
      url: getCanonicalUrl("/jobs"),
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: "website",
    },
  };
}

export function buildJobDetailMetadata(job: Job): Metadata {
  const title = getJobPageTitle(job);
  const description = getJobPageDescription(job);
  const canonical = getCanonicalUrl(`/jobs/${job.slug}`);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: "article",
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "リンク",
    url: SITE_URL,
    description: HOME_SEO.description,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "千葉県",
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: HOME_SEO.description,
    inLanguage: "ja-JP",
  };
}

export function buildJobPostingJsonLd(job: Job) {
  const description = [
    `${job.area}の${job.name}の求人情報。`,
    `体入時給：${job.trialHourly}`,
    `本入時給：${job.regularHourly}`,
    `営業時間：${job.businessHours}`,
    `最寄り駅：${job.stations}`,
  ].join(" ");

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: `${job.name} キャスト求人`,
    description,
    identifier: {
      "@type": "PropertyValue",
      name: SITE_NAME,
      value: job.id,
    },
    hiringOrganization: {
      "@type": "Organization",
      name: job.name,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.area,
        addressRegion: "千葉県",
        addressCountry: "JP",
      },
    },
    employmentType: "PART_TIME",
    directApply: true,
    url: getCanonicalUrl(`/jobs/${job.slug}`),
  };
}
