import type { Job } from "@/app/lib/jobs";
import { getAllJobs } from "@/app/lib/jobs";

/** 専用エリアページを持つ job.area 値（/jobs/chiba には含めない） */
const DEDICATED_JOB_AREAS = new Set(["船橋", "松戸", "柏"]);

export type JobAreaPageConfig = {
  slug: string;
  label: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  navLabel: string;
  breadcrumbLabel: string;
  listBackLabel: string;
  matchJob: (job: Job) => boolean;
};

export const JOB_AREA_PAGES: JobAreaPageConfig[] = [
  {
    slug: "chiba",
    label: "千葉",
    h1: "千葉のキャバクラ・夜職求人",
    seoTitle: "千葉のキャバクラ求人・夜職求人一覧",
    seoDescription:
      "千葉・千葉中央・富士見町など千葉エリアのキャバクラ・ガールズバー求人を掲載。時給・勤務条件・待遇などを比較しながら、自分に合ったお店を探せます。千葉の夜職探しはLINK。",
    intro:
      "千葉・千葉中央・富士見町など、千葉エリアのキャバクラ・ガールズバー求人を掲載しています。体入時給や勤務条件、待遇などから自分に合ったお店を比較できます。気になる求人があれば、LINKのコンシェルジュが無料でご案内します。",
    navLabel: "千葉の求人",
    breadcrumbLabel: "千葉の求人",
    listBackLabel: "千葉の求人一覧を見る",
    matchJob: (job) => !DEDICATED_JOB_AREAS.has(job.area),
  },
  {
    slug: "funabashi",
    label: "船橋",
    h1: "船橋のキャバクラ・夜職求人",
    seoTitle: "船橋のキャバクラ求人・夜職求人一覧",
    seoDescription:
      "船橋エリアのキャバクラ・ガールズバー求人を掲載。時給・勤務条件・待遇などを比較しながら、自分に合ったお店を探せます。千葉の夜職探しはLINK。",
    intro:
      "船橋エリアのキャバクラ・ガールズバー求人を掲載しています。JR船橋駅・京成船橋駅周辺を中心に、時給や勤務条件、待遇などから自分に合ったお店を探せます。気になる求人があればLINKが無料でご案内します。",
    navLabel: "船橋の求人",
    breadcrumbLabel: "船橋の求人",
    listBackLabel: "船橋の求人一覧を見る",
    matchJob: (job) => job.area === "船橋",
  },
  {
    slug: "matsudo",
    label: "松戸",
    h1: "松戸のキャバクラ・夜職求人",
    seoTitle: "松戸のキャバクラ求人・夜職求人一覧",
    seoDescription:
      "松戸エリアのキャバクラ・ガールズバー求人を掲載。時給・勤務条件・待遇などを比較しながら、自分に合ったお店を探せます。千葉の夜職探しはLINK。",
    intro:
      "松戸エリアのキャバクラ求人を掲載しています。松戸駅周辺を中心に、時給や勤務条件、待遇などから自分に合ったお店を比較できます。気になる求人があれば、LINKのコンシェルジュが無料でご案内します。",
    navLabel: "松戸の求人",
    breadcrumbLabel: "松戸の求人",
    listBackLabel: "松戸の求人一覧を見る",
    matchJob: (job) => job.area === "松戸",
  },
  {
    slug: "kashiwa",
    label: "柏",
    h1: "柏のキャバクラ・夜職求人",
    seoTitle: "柏のキャバクラ求人・夜職求人一覧",
    seoDescription:
      "柏エリアのキャバクラ・ガールズバー求人を掲載。時給・勤務条件・待遇などを比較しながら、自分に合ったお店を探せます。千葉の夜職探しはLINK。",
    intro:
      "柏エリアのキャバクラ求人を掲載しています。JR柏駅周辺を中心に、時給や勤務条件、待遇などから自分に合ったお店を探せます。気になる求人があれば、LINKが無料でご案内します。",
    navLabel: "柏の求人",
    breadcrumbLabel: "柏の求人",
    listBackLabel: "柏の求人一覧を見る",
    matchJob: (job) => job.area === "柏",
  },
];

export function getAllAreaPageSlugs(): string[] {
  return JOB_AREA_PAGES.map((page) => page.slug);
}

export function getAreaPageBySlug(slug: string): JobAreaPageConfig | undefined {
  return JOB_AREA_PAGES.find((page) => page.slug === slug);
}

export function isAreaPageSlug(slug: string): boolean {
  return getAreaPageBySlug(slug) !== undefined;
}

export function getJobsForAreaPage(slug: string): Job[] {
  const areaPage = getAreaPageBySlug(slug);
  if (!areaPage) {
    return [];
  }
  return getAllJobs().filter(areaPage.matchJob);
}

export function getAreaPageForJob(job: Job): JobAreaPageConfig | undefined {
  return JOB_AREA_PAGES.find((page) => page.matchJob(job));
}

export function getAreaPagePath(slug: string): string {
  return `/jobs/${slug}`;
}

export function getRelatedJobsInArea(job: Job, limit = 3): Job[] {
  const areaPage = getAreaPageForJob(job);
  if (!areaPage) {
    return [];
  }

  return getJobsForAreaPage(areaPage.slug)
    .filter((item) => item.slug !== job.slug)
    .slice(0, limit);
}
