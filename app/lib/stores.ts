export type Store = {
  id: string;
  name: string;
  area: string;
  category: string;
  employmentType: string;
  salary: string;
  hours: string;
  features: string[];
  recommendPoints: [string, string, string];
  /** public 配下の画像パス。未設定時はプレースホルダー表示 */
  image: string;
  isPublished: boolean;
  /** 絞り込み用フラグ */
  beginnerFriendly: boolean;
  highPay: boolean;
  pickup: boolean;
  dormitory: boolean;
  dailyPay: boolean;
};

export const STORES: Store[] = [
  {
    id: "sample-sakura",
    name: "Club Sakura（仮）",
    area: "千葉駅前",
    category: "キャバクラ",
    employmentType: "体入・本入",
    salary: "時給 3,500円〜",
    hours: "20:00〜LAST",
    features: ["未経験歓迎", "送りあり", "高時給"],
    recommendPoints: [
      "駅近で通いやすく、初出勤までの不安を丁寧にフォロー",
      "ノルマが少なめで、未経験の方でも働きやすい雰囲気",
      "送り対応あり。終電後も安心して帰宅できます",
    ],
    image: "",
    isPublished: true,
    beginnerFriendly: true,
    highPay: true,
    pickup: true,
    dormitory: false,
    dailyPay: false,
  },
  {
    id: "sample-lumiere",
    name: "Girl's Bar Lumière（仮）",
    area: "船橋",
    category: "ガールズバー",
    employmentType: "週2〜OK",
    salary: "時給 2,800円〜",
    hours: "19:00〜24:00",
    features: ["週2〜OK", "日払いあり", "私服勤務可"],
    recommendPoints: [
      "週2日からOK。Wワークや学生さんにも人気",
      "日払い対応の相談可。急な出費にも柔軟",
      "落ち着いた店内で、はじめての夜職にも向いています",
    ],
    image: "",
    isPublished: true,
    beginnerFriendly: true,
    highPay: false,
    pickup: false,
    dormitory: false,
    dailyPay: true,
  },
  {
    id: "sample-grace",
    name: "Salon Grace（仮）",
    area: "柏",
    category: "ラウンジ",
    employmentType: "正社員・アルバイト",
    salary: "月給 28万円〜 / 時給 3,000円〜",
    hours: "18:00〜LAST",
    features: ["寮あり", "高待遇", "未経験歓迎"],
    recommendPoints: [
      "寮完備の相談可。遠方からのご応募もサポート",
      "高待遇の相談が可能。頑張り次第で収入アップ",
      "落ち着いた雰囲気で、はじめての夜職にも向いています",
    ],
    image: "",
    isPublished: true,
    beginnerFriendly: true,
    highPay: true,
    pickup: false,
    dormitory: true,
    dailyPay: false,
  },
];

/** 掲載許可のある店舗のみ返す */
export function getPublishedStores(): Store[] {
  return STORES.filter((store) => store.isPublished);
}

/** トップページ用：公開中の求人を最大件数まで返す */
export function getFeaturedStores(limit = 3): Store[] {
  return getPublishedStores().slice(0, limit);
}

/* ── 絞り込み ── */

export type StoreFilterKey =
  | "area"
  | "category"
  | "employmentType"
  | "beginnerFriendly"
  | "highPay"
  | "pickup"
  | "dormitory"
  | "dailyPay";

export type StoreFilterValues = {
  area: string;
  category: string;
  employmentType: string;
  beginnerFriendly: boolean;
  highPay: boolean;
  pickup: boolean;
  dormitory: boolean;
  dailyPay: boolean;
};

export const DEFAULT_STORE_FILTERS: StoreFilterValues = {
  area: "",
  category: "",
  employmentType: "",
  beginnerFriendly: false,
  highPay: false,
  pickup: false,
  dormitory: false,
  dailyPay: false,
};

export const FILTER_AREAS = ["千葉駅前", "船橋", "柏", "津田沼", "幕張"] as const;
export const FILTER_CATEGORIES = ["キャバクラ", "ガールズバー", "ラウンジ"] as const;
export const FILTER_EMPLOYMENT_TYPES = ["体入・本入", "週2〜OK", "正社員・アルバイト"] as const;

export function filterStores(
  stores: Store[],
  filters: StoreFilterValues,
): Store[] {
  return stores.filter((store) => {
    if (filters.area && store.area !== filters.area) return false;
    if (filters.category && store.category !== filters.category) return false;
    if (filters.employmentType && store.employmentType !== filters.employmentType)
      return false;
    if (filters.beginnerFriendly && !store.beginnerFriendly) return false;
    if (filters.highPay && !store.highPay) return false;
    if (filters.pickup && !store.pickup) return false;
    if (filters.dormitory && !store.dormitory) return false;
    if (filters.dailyPay && !store.dailyPay) return false;
    return true;
  });
}

/* ── ページコピー ── */

export const JOBS_PAGE = {
  title: "あなたに合うお仕事を探す",
  description:
    "千葉エリアを中心に、LINKが厳選したキャバクラ・ガールズバーなどの求人をご紹介します。掲載していない店舗も多数あるため、希望条件に合う求人はLINEでお気軽にご相談ください。",
  lineDetailNote: "詳しい条件や面接状況はLINEでご案内します",
  storeLineLabel: "LINEで詳細を聞く",
  bottomCtaTitle: "掲載店舗以外もご相談ください",
  bottomCtaDescription:
    "ご希望の条件に合う求人を、専任コンシェルジュが無料でご案内します。",
} as const;
