import type { Metadata } from "next";
import { HERO_IMAGE, SITE_NAME } from "@/app/lib/constants";
import type { JobAreaPageConfig } from "@/app/lib/job-areas";
import type { Job } from "@/app/lib/jobs";
import { getJobImages } from "@/app/lib/jobs";

/** 本番ドメインは NEXT_PUBLIC_SITE_URL で設定 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const DEFAULT_OG_IMAGE = "/images/hero/hero-cat.png";

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

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

function usesTrailingSlash(): boolean {
  return process.env.GITHUB_PAGES === "true";
}

function shouldUseTrailingSlash(path: string): boolean {
  if (!usesTrailingSlash()) {
    return false;
  }

  const pathname = path.split("?")[0]?.split("#")[0] ?? path;
  const lastSegment = pathname.split("/").pop() ?? "";

  // sitemap.xml / robots.txt など拡張子付きURLはファイルとして扱う
  if (lastSegment.includes(".")) {
    return false;
  }

  return true;
}

export function getAssetUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

/** next/image 用。GitHub Pages の basePath を付与する */
export function getPublicPath(path: string): string {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.GITHUB_PAGES === "true" ? "/LINK" : "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return basePath ? `${basePath}${normalizedPath}` : normalizedPath;
}

export function getCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const fullPath = normalizedPath === "/" ? "" : normalizedPath;
  let url = `${SITE_URL}${fullPath}`;

  if (shouldUseTrailingSlash(normalizedPath) && !url.endsWith("/")) {
    url += "/";
  }

  return url;
}

export function getOgImageUrl(imagePath: string = DEFAULT_OG_IMAGE): string {
  return getAssetUrl(imagePath);
}

function withOpenGraphImage(metadata: Metadata, imagePath?: string): Metadata {
  const imageUrl = getOgImageUrl(imagePath ?? DEFAULT_OG_IMAGE);

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [{ url: imageUrl, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.openGraph?.title ?? undefined,
      description: metadata.openGraph?.description ?? undefined,
      images: [imageUrl],
    },
  };
}

export function getJobPageTitle(job: Job): string {
  return (
    job.seoTitle ?? `${job.name}の求人情報｜${job.area}｜${SITE_NAME}`
  );
}

export function getJobPageDescription(job: Job): string {
  if (job.seoDescription) {
    return job.seoDescription;
  }

  return `${job.area}の${job.industry}「${job.name}」の求人情報。体入時給${job.trialHourly}、本入時給${job.regularHourly}。最寄り：${job.stations}。${SITE_NAME}から無料で相談できます。`;
}

export function getJobPageHeading(job: Job): string {
  return `${job.name}の求人情報`;
}

export function buildHomeMetadata(): Metadata {
  return withOpenGraphImage({
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
  });
}

export function buildJobsListMetadata(): Metadata {
  const title = `${JOBS_LIST_SEO.title}｜${SITE_NAME}`;

  return withOpenGraphImage({
    title: { absolute: title },
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
  });
}

export function buildAreaJobsMetadata(area: JobAreaPageConfig): Metadata {
  const title = `${area.seoTitle}｜${SITE_NAME}`;

  return withOpenGraphImage({
    title: { absolute: title },
    description: area.seoDescription,
    alternates: {
      canonical: getCanonicalUrl(`/jobs/${area.slug}`),
    },
    openGraph: {
      title,
      description: area.seoDescription,
      url: getCanonicalUrl(`/jobs/${area.slug}`),
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: "website",
    },
  });
}

export function buildJobDetailMetadata(job: Job): Metadata {
  const title = getJobPageTitle(job);
  const description = getJobPageDescription(job);
  const canonical = getCanonicalUrl(`/jobs/${job.slug}`);
  const images = getJobImages(job);
  const ogImage = images[0]?.src ?? DEFAULT_OG_IMAGE;

  return withOpenGraphImage(
    {
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
    },
    ogImage,
  );
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "リンク",
    url: getCanonicalUrl("/"),
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
    url: getCanonicalUrl("/"),
    description: HOME_SEO.description,
    inLanguage: "ja-JP",
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: getCanonicalUrl(item.href) } : {}),
    })),
  };
}

type ParsedHourlyRange = {
  minValue: number;
  maxValue: number;
};

function parseHourlyRange(value: string): ParsedHourlyRange | undefined {
  const numbers = value.match(/\d{1,3}(?:,\d{3})+/g);
  if (!numbers || numbers.length === 0) {
    return undefined;
  }

  const parsed = numbers.map((num) => Number(num.replace(/,/g, "")));
  return {
    minValue: Math.min(...parsed),
    maxValue: Math.max(...parsed),
  };
}

export function buildJobPostingJsonLd(job: Job): Record<string, unknown> | null {
  if (!job.datePosted) {
    return null;
  }

  const description = [
    `${job.area}の${job.name}の求人情報。`,
    `体入時給：${job.trialHourly}`,
    `本入時給：${job.regularHourly}`,
    `営業時間：${job.businessHours}`,
    `最寄り駅：${job.stations}`,
  ].join(" ");

  const hourlyRange =
    parseHourlyRange(job.regularHourly) ?? parseHourlyRange(job.trialHourly);

  const posting: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: `${job.name} キャスト求人`,
    description,
    datePosted: job.datePosted,
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
    url: getCanonicalUrl(`/jobs/${job.slug}`),
  };

  if (job.validThrough) {
    posting.validThrough = job.validThrough;
  }

  if (hourlyRange) {
    posting.baseSalary = {
      "@type": "MonetaryAmount",
      currency: "JPY",
      value: {
        "@type": "QuantitativeValue",
        minValue: hourlyRange.minValue,
        maxValue: hourlyRange.maxValue,
        unitText: "HOUR",
      },
    };
  }

  return posting;
}

export { HERO_IMAGE };
