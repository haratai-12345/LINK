import { getJobImageAlt } from "@/app/lib/job-image-alt";

export type Job = {
  id: string;
  slug: string;
  name: string;
  nameKana: string;
  industry: string;
  area: string;
  stations: string;
  trialHourly: string;
  regularHourly: string;
  averageHourly: string;
  dailyPay: string;
  businessHours: string;
  shift: string;
  lastTrain: string;
  nonAlcohol: string;
  dressRental: string;
  hairMake: string;
  transport: string;
  tattoo: string;
  featured: boolean;
  /** 絞り込み用フラグ */
  pickup: boolean;
  dailyPayAvailable: boolean;
  beginnerFriendly: boolean;
  highPay: boolean;
};

export type JobImage = {
  src: string;
  alt: string;
};

/** ローカル保存済みの店内写真枚数（slug → 枚数） */
const JOB_IMAGE_COUNTS: Partial<Record<string, number>> = {
  "club-runway": 3,
  "club-ichika": 3,
  "club-carat": 3,
  "the-class": 3,
  "club-ranka": 3,
  "fabulous-lounge": 3,
  "club-generation-chiba": 3,
  "club-harlem": 3,
  "new-club-roger": 3,
  "themis": 3,
  "club-archi": 3,
};

/** 店舗詳細ページ用の画像一覧を返す */
export function getJobImages(job: Job): JobImage[] {
  const count = JOB_IMAGE_COUNTS[job.slug];
  if (!count) {
    return [];
  }

  return Array.from({ length: count }, (_, index) => {
    const photoNumber = index + 1;
    return {
      src: `/images/jobs/${job.slug}/interior-${photoNumber}.jpg`,
      alt: getJobImageAlt(job, photoNumber),
    };
  });
}

export const JOBS: Job[] = [
  {
    id: "club-runway",
    slug: "club-runway",
    name: "Club Runway（ランウェイ）",
    nameKana: "ランウェイ",
    industry: "キャバクラ",
    area: "千葉・富士見町",
    stations: "JR千葉駅／京成千葉中央駅",
    trialHourly: "4,000円〜10,000円 ※未経験3,000円〜",
    regularHourly: "4,000円〜10,000円",
    averageHourly: "4,000円〜6,000円",
    dailyPay: "5,000円まで ※それ以上は応相談",
    businessHours: "平日20:00〜3:00／週末20:00〜4:00",
    shift: "週1日〜",
    lastTrain: "可能",
    nonAlcohol: "可能",
    dressRental: "あり・無料",
    hairMake: "あり・店内／1,000円",
    transport: "あり",
    tattoo: "ワンポイント可",
    featured: true,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: true,
    highPay: true,
  },
  {
    id: "club-ichika",
    slug: "club-ichika",
    name: "CLUB ICHIKA（イチカ）",
    nameKana: "イチカ",
    industry: "キャバクラ",
    area: "千葉・富士見町",
    stations: "JR千葉駅／京成千葉中央駅",
    trialHourly: "3,000円〜6,000円",
    regularHourly: "3,000円〜6,000円",
    averageHourly: "4,000円〜5,000円",
    dailyPay: "5,000円まで ※全額は応相談",
    businessHours: "平日20:00〜3:00／金土20:00〜4:00",
    shift: "週1日〜",
    lastTrain: "可能",
    nonAlcohol: "可能",
    dressRental: "一式あり",
    hairMake: "あり・店内／1,000円",
    transport: "あり",
    tattoo: "基本ワンポイントまで",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: true,
    highPay: false,
  },
  {
    id: "club-carat",
    slug: "club-carat",
    name: "Club Carat（キャラット）",
    nameKana: "キャラット",
    industry: "キャバクラ",
    area: "千葉中央",
    stations: "千葉駅／千葉中央駅",
    trialHourly: "4,000円〜8,000円",
    regularHourly: "4,000円〜8,000円",
    averageHourly: "約5,000円",
    dailyPay: "可能",
    businessHours: "平日20:00〜3:00／週末20:00〜4:00",
    shift: "週1日〜",
    lastTrain: "可能",
    nonAlcohol: "可能",
    dressRental: "あり・無料",
    hairMake: "あり・店内／1,000円",
    transport: "あり・無料",
    tattoo: "可能",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "the-class",
    slug: "the-class",
    name: "THE CLASS（ザクラス）",
    nameKana: "ザクラス",
    industry: "キャバクラ",
    area: "千葉",
    stations: "千葉中央駅",
    trialHourly: "要確認",
    regularHourly: "5,000円〜7,000円",
    averageHourly: "5,000円〜7,000円",
    dailyPay: "全額日払い可能 ※条件あり",
    businessHours: "平日20:00〜3:00／週末20:00〜4:00",
    shift: "週1日〜",
    lastTrain: "要確認",
    nonAlcohol: "要確認",
    dressRental: "あり",
    hairMake: "あり／1,000円",
    transport: "あり",
    tattoo: "要確認",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "club-ranka",
    slug: "club-ranka",
    name: "Club Ranka（ランカ）",
    nameKana: "ランカ",
    industry: "キャバクラ",
    area: "千葉・富士見町",
    stations: "千葉中央駅／千葉駅",
    trialHourly: "4,000円〜6,000円",
    regularHourly: "4,000円〜6,000円",
    averageHourly: "約4,500円",
    dailyPay: "5,000円まで",
    businessHours: "平日20:00〜3:00／週末20:00〜4:00",
    shift: "週2日〜",
    lastTrain: "可能",
    nonAlcohol: "可能",
    dressRental: "あり・無料",
    hairMake: "あり・店内／1,000円",
    transport: "あり",
    tattoo: "ワンポイント可",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: false,
  },
  {
    id: "fabulous-lounge",
    slug: "fabulous-lounge",
    name: "FABULOUS LOUNGE（ファビュラスラウンジ）",
    nameKana: "ファビュラスラウンジ",
    industry: "キャバクラ",
    area: "千葉",
    stations: "JR千葉駅／京成千葉中央駅",
    trialHourly: "5,000円〜8,000円",
    regularHourly: "5,000円〜8,000円",
    averageHourly: "要確認",
    dailyPay: "原則10,000円まで ※応相談",
    businessHours: "20:00〜5:00",
    shift: "要確認",
    lastTrain: "要確認",
    nonAlcohol: "要確認",
    dressRental: "あり",
    hairMake: "あり・無料",
    transport: "あり",
    tattoo: "可能",
    featured: true,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "panamera",
    slug: "panamera",
    name: "Panamera（パナメーラ）",
    nameKana: "パナメーラ",
    industry: "キャバクラ",
    area: "千葉",
    stations: "千葉駅／千葉中央駅／葭川公園駅",
    trialHourly: "4,000円〜7,000円",
    regularHourly: "4,000円〜7,000円",
    averageHourly: "要確認",
    dailyPay: "可能 ※条件・規定あり",
    businessHours: "20:30〜5:00",
    shift: "要確認",
    lastTrain: "要確認",
    nonAlcohol: "要確認",
    dressRental: "あり",
    hairMake: "要確認",
    transport: "あり",
    tattoo: "可能",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "sebastian",
    slug: "sebastian",
    name: "セバスチャン（Sebastian）",
    nameKana: "セバスチャン",
    industry: "キャバクラ",
    area: "千葉",
    stations: "千葉駅／千葉中央駅／葭川公園駅",
    trialHourly: "3,000円〜10,000円",
    regularHourly: "要確認",
    averageHourly: "要確認",
    dailyPay: "10,000円〜15,000円まで／全額日払い相談可",
    businessHours: "20:00〜5:00",
    shift: "要確認",
    lastTrain: "不可",
    nonAlcohol: "要確認",
    dressRental: "要確認",
    hairMake: "あり／1,000円",
    transport: "あり",
    tattoo: "隠れれば可",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: true,
    highPay: true,
  },
  {
    id: "club-generation-chiba",
    slug: "club-generation-chiba",
    name: "Club generation CHIBA（ジェネレーション）",
    nameKana: "ジェネレーション",
    industry: "キャバクラ",
    area: "千葉中央",
    stations: "千葉中央駅／千葉駅",
    trialHourly: "5,000円〜",
    regularHourly: "5,000円〜",
    averageHourly: "6,000円〜7,000円",
    dailyPay: "10,000円 ※上限応相談",
    businessHours: "平日21:00〜3:00／週末21:00〜4:00",
    shift: "週2日〜",
    lastTrain: "可能",
    nonAlcohol: "要確認",
    dressRental: "あり・無料",
    hairMake: "あり・店内／1,500円",
    transport: "あり・無料",
    tattoo: "可能",
    featured: true,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "legend",
    slug: "legend",
    name: "LEGEND（レジェンド）",
    nameKana: "レジェンド",
    industry: "キャバクラ",
    area: "千葉市",
    stations: "千葉中央駅",
    trialHourly: "6,000円〜",
    regularHourly: "4,000円〜8,000円",
    averageHourly: "約5,000円",
    dailyPay: "基本10,000円まで ※応相談",
    businessHours: "21:00〜5:00",
    shift: "週1日〜",
    lastTrain: "可能",
    nonAlcohol: "要確認",
    dressRental: "あり・無料",
    hairMake: "あり・店内／無料",
    transport: "あり",
    tattoo: "ワンポイント・隠せる範囲なら可",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "club-archi",
    slug: "club-archi",
    name: "club archi（アーチ）",
    nameKana: "アーチ",
    industry: "キャバクラ",
    area: "千葉・富士見町",
    stations: "千葉駅／千葉中央駅",
    trialHourly: "要確認",
    regularHourly: "4,000円〜7,000円 ※それ以上応相談",
    averageHourly: "要確認",
    dailyPay: "相談可能",
    businessHours: "平日22:00〜5:00／週末21:00〜5:00",
    shift: "週1日〜",
    lastTrain: "要確認",
    nonAlcohol: "要確認",
    dressRental: "制服持参／衣装代支給制度あり",
    hairMake: "店内なし ※外部利用時1,000円負担",
    transport: "あり",
    tattoo: "隠せれば可",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "club-harlem",
    slug: "club-harlem",
    name: "CLUB HARLEM（ハーレム）",
    nameKana: "ハーレム",
    industry: "キャバクラ",
    area: "千葉・富士見町",
    stations: "JR千葉駅／京成千葉中央駅",
    trialHourly: "4,000円〜7,000円",
    regularHourly: "4,000円〜7,000円",
    averageHourly: "約5,000円",
    dailyPay: "5,000円〜10,000円 ※それ以上応相談",
    businessHours: "21:00〜5:00",
    shift: "週1日〜",
    lastTrain: "可能",
    nonAlcohol: "要確認",
    dressRental: "要確認",
    hairMake: "店内なし ※領収書提出で1,000円支給",
    transport: "あり・無料",
    tattoo: "可能",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "new-club-roger",
    slug: "new-club-roger",
    name: "NEW CLUB ROGER（ロジャー）",
    nameKana: "ロジャー",
    industry: "キャバクラ",
    area: "千葉",
    stations: "千葉中央駅",
    trialHourly: "5,000円〜8,000円",
    regularHourly: "4,000円〜8,000円",
    averageHourly: "約4,000円〜5,000円",
    dailyPay: "5,000円〜10,000円 ※上限応相談",
    businessHours: "平日20:00〜3:00／週末20:00〜4:00",
    shift: "週1日〜",
    lastTrain: "可能",
    nonAlcohol: "可能",
    dressRental: "一式あり",
    hairMake: "あり・店内／無料",
    transport: "あり",
    tattoo: "可能",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: false,
    highPay: true,
  },
  {
    id: "themis",
    slug: "themis",
    name: "テミス",
    nameKana: "テミス",
    industry: "キャバクラ",
    area: "松戸",
    stations: "松戸駅",
    trialHourly: "3,000円〜8,000円",
    regularHourly: "4,000円〜8,000円",
    averageHourly: "要確認",
    dailyPay: "5,000円まで",
    businessHours: "平日20:00〜4:00／週末〜5:00",
    shift: "週2日〜",
    lastTrain: "可能",
    nonAlcohol: "可能",
    dressRental: "要確認",
    hairMake: "あり・店内",
    transport: "あり",
    tattoo: "要確認",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: true,
    highPay: true,
  },
];

/** 全求人を返す */
export function getAllJobs(): Job[] {
  return JOBS;
}

/** おすすめ求人（featured: true）のみ返す */
export function getFeaturedJobs(): Job[] {
  return JOBS.filter((job) => job.featured);
}

/** slug から求人を取得 */
export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((job) => job.slug === slug);
}

/** 静的生成用 slug 一覧 */
export function getAllJobSlugs(): string[] {
  return JOBS.map((job) => job.slug);
}

/* ── 絞り込み ── */

export type JobFilterKey =
  | "area"
  | "industry"
  | "shift"
  | "beginnerFriendly"
  | "highPay"
  | "pickup"
  | "dailyPayAvailable";

export type JobFilterValues = {
  area: string;
  industry: string;
  shift: string;
  beginnerFriendly: boolean;
  highPay: boolean;
  pickup: boolean;
  dailyPayAvailable: boolean;
};

export const DEFAULT_JOB_FILTERS: JobFilterValues = {
  area: "",
  industry: "",
  shift: "",
  beginnerFriendly: false,
  highPay: false,
  pickup: false,
  dailyPayAvailable: false,
};

export const FILTER_AREAS = [
  "千葉・富士見町",
  "千葉中央",
  "千葉",
  "千葉市",
  "松戸",
] as const;

export const FILTER_INDUSTRIES = ["キャバクラ"] as const;

export const FILTER_SHIFTS = ["週1日〜", "週2日〜", "要確認"] as const;

export function filterJobs(jobs: Job[], filters: JobFilterValues): Job[] {
  return jobs.filter((job) => {
    if (filters.area && job.area !== filters.area) return false;
    if (filters.industry && job.industry !== filters.industry) return false;
    if (filters.shift && job.shift !== filters.shift) return false;
    if (filters.beginnerFriendly && !job.beginnerFriendly) return false;
    if (filters.highPay && !job.highPay) return false;
    if (filters.pickup && !job.pickup) return false;
    if (filters.dailyPayAvailable && !job.dailyPayAvailable) return false;
    return true;
  });
}

/* ── ページコピー ── */

export const JOBS_PAGE = {
  title: "あなたに合うお仕事を探す",
  description:
    "千葉エリアを中心に、LINKが厳選したキャバクラの求人をご紹介します。掲載していない店舗も多数あるため、希望条件に合う求人はLINEでお気軽にご相談ください。",
  lineDetailNote: "詳しい条件や面接状況はLINEでご案内します",
  storeLineLabel: "LINEで詳細を聞く",
  detailLineLabel: "この求人についてLINEで相談する",
  bottomCtaTitle: "掲載店舗以外もご相談ください",
  bottomCtaDescription:
    "ご希望の条件に合う求人を、専任コンシェルジュが無料でご案内します。",
} as const;
