export const SITE_NAME = "LINK";
export const SITE_TAGLINE = "千葉ナイトコンシェルジュ";
export const SITE_DESCRIPTION =
  "千葉で夜職を探すなら。専任コンシェルジュが、希望条件に合うお店を無料でご紹介します。";

/** 仮のLINE公式アカウントURL（本番URL確定後に差し替え） */
export const LINE_URL = "https://line.me/R/ti/p/@placeholder";

export const LINE_CTA_LABEL = "LINEで無料相談する";

/** 求人一覧ページ */
export const JOBS_PAGE_PATH = "/jobs";

export const JOBS_PROMO = {
  title: "LINK厳選の求人を見る",
  description:
    "掲載している求人以外にもご紹介可能な店舗があります。まずは公開中の求人をご覧ください。",
  buttonLabel: "求人一覧を見る",
} as const;

export const HERO_JOBS_BUTTON_LABEL = "求人を見る";

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "求人を探す", href: JOBS_PAGE_PATH },
  { label: "LINKの強み", href: "#strengths" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "よくある質問", href: "#faq" },
  { label: "店舗様へ", href: "#for-shops" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "プライバシーポリシー", href: "#privacy" },
  { label: "利用規約", href: "#terms" },
  { label: "店舗様の採用担当者様へ", href: "#for-shops" },
];

/* ── Hero ── */

export const HERO_EYEBROW = "千葉で夜職を探すなら";

export const HERO_HEADLINE = {
  before: "あなたに",
  highlight: "ピッタリ",
  after: "のお仕事、見つけます。",
};

export const HERO_DESCRIPTION =
  "千葉エリアのキャバクラ・ガールズバーなどの求人を、専任コンシェルジュが無料でご案内します。希望条件や不安なことも、LINEで気軽にご相談ください。";

export const HERO_REASSURANCE = "無理な勧誘はありません";

/* ── Hero直後：安心ポイント ── */

export type TrustPointIcon = "free" | "shield" | "line" | "area";

export const TRUST_POINTS: ReadonlyArray<{
  label: string;
  icon: TrustPointIcon;
}> = [
  { label: "相談無料", icon: "free" },
  { label: "無理な勧誘なし", icon: "shield" },
  { label: "LINEで相談完結", icon: "line" },
  { label: "千葉エリアに特化", icon: "area" },
];

/* ── おすすめ求人 ── */

export const FEATURED_JOBS = {
  title: "LINK厳選のおすすめ求人",
  description:
    "まずは、現在ご案内可能な求人の一部をご覧ください。",
  viewAllLabel: "求人をもっと見る",
} as const;

/* ── LINKの強み ── */

export type StrengthIcon =
  | "map"
  | "gift"
  | "search"
  | "calendar"
  | "sparkles"
  | "support";

export const STRENGTHS_SECTION = {
  title: "LINKの強み",
  description:
    "掲載されている求人を見るだけでなく、希望条件に合わせたご提案も行っています。",
  items: [
    {
      title: "千葉エリアの店舗情報に精通",
      description:
        "千葉・船橋・柏など、エリアごとの店舗情報を把握したコンシェルジュが対応します。",
      icon: "map" as const,
    },
    {
      title: "希望条件に合う店舗をご提案",
      description:
        "時給や勤務日数、店内の雰囲気まで、希望を伺ってご提案します。",
      icon: "search" as const,
    },
    {
      title: "面接日程の調整もサポート",
      description:
        "面接や体験入店の日程調整など、進め方の相談もお任せください。",
      icon: "calendar" as const,
    },
    {
      title: "掲載外の求人もご案内",
      description:
        "サイトに載っていない店舗も多数あります。条件に合う求人をお探しします。",
      icon: "sparkles" as const,
    },
    {
      title: "入店後も継続サポート",
      description:
        "お仕事を始めたあとも、困ったことがあればご相談いただけます。",
      icon: "support" as const,
    },
  ],
} as const;

/* ── リアルな情報 ── */

export type RealInfoIcon =
  | "salary"
  | "criteria"
  | "paySystem"
  | "shift"
  | "fit";

export const REAL_INFO_SECTION = {
  title: "求人票の数字だけでは、選びません。",
  description:
    "高く見える条件よりも、働き始めてから後悔しないためのリアルな情報を。",
  closing:
    "「掲載時給は高かったのに、面接に行ったら条件が違った」というミスマッチを減らすことが、LINKの役割です。",
  buttonLabel: "LINEでリアルな条件を聞く",
  items: [
    {
      title: "実際の平均時給や採用されやすい時給帯",
      description:
        "掲載時給だけでなく、実際に採用されやすい帯域や平均ラインもお伝えします。",
      icon: "salary" as const,
    },
    {
      title: "店舗ごとの採用基準や求められる雰囲気",
      description:
        "見た目や年齢、性格など、店舗が求めるイメージも事前に共有します。",
      icon: "criteria" as const,
    },
    {
      title: "バック、控除、ノルマなどの給与システム",
      description:
        "給与の仕組みや控除、ノルマの有無など、稼ぎ方のリアルもご説明します。",
      icon: "paySystem" as const,
    },
    {
      title: "シフトや出勤日数などの働き方",
      description:
        "週何日からOKか、終電や送りの条件など、働き方の詳細も確認できます。",
      icon: "shift" as const,
    },
    {
      title: "応募者の経験や雰囲気に本当に合う店舗かどうか",
      description:
        "未経験・Wワークなど、あなたの状況に合うかどうかも一緒に見極めます。",
      icon: "fit" as const,
    },
  ],
} as const;

export const HERO_IMAGE = {
  src: "/images/hero/hero-cat.png",
  alt: "猫のコンシェルジュが相談者を丁寧に案内している",
  width: 1536,
  height: 1024,
} as const;

/* ── Flow ── */

export const FLOW_SUBTITLE =
  "相談からお仕事開始まで、専任コンシェルジュがサポートします。";

export type FlowStep = {
  step: string;
  title: string;
  description: string;
  alt: string;
  imageSrc: string;
  width: number;
  height: number;
};

export const FLOW_STEPS: FlowStep[] = [
  {
    step: "01",
    title: "LINEで相談",
    description: "希望条件や不安なことを、LINEで気軽にお送りください。",
    alt: "STEP 01 LINEで相談",
    imageSrc: "/flow/flow-step1.jpg",
    width: 735,
    height: 490,
  },
  {
    step: "02",
    title: "条件に合うお店をご紹介",
    description: "ヒアリング内容をもとに、合いそうな店舗をご提案します。",
    alt: "STEP 02 条件に合うお店をご紹介",
    imageSrc: "/flow/flow-step2.jpg",
    width: 776,
    height: 489,
  },
  {
    step: "03",
    title: "面接・体験入店",
    description: "日程調整や準備の相談もサポート。自分のペースで進められます。",
    alt: "STEP 03 面接・体験入店",
    imageSrc: "/flow/flow-step3.jpg",
    width: 748,
    height: 478,
  },
  {
    step: "04",
    title: "お仕事スタート",
    description: "入店後も困ったことがあれば、引き続きLINEでご相談いただけます。",
    alt: "STEP 04 お仕事スタート",
    imageSrc: "/flow/flow-step4.jpg",
    width: 747,
    height: 481,
  },
];

/* ── Campaign ── */

export type CampaignIcon = "referral" | "dress" | "concierge";

export const CAMPAIGN_SECTION = {
  eyebrowEn: "LINK LIMITED BENEFITS",
  title: "LINK限定特典",
  description: "お仕事探しをもっと安心に、もっとお得に。",
  ctaLabel: "LINEで無料相談する",
  ctaNote: "相談だけでも大歓迎です。",
} as const;

export const CAMPAIGNS = [
  {
    id: "referral",
    title: "🎁 お友達紹介特典",
    description: "条件達成で、紹介した方・紹介された方の双方へお祝い特典をご用意しています。",
    bullets: [
      "紹介した方も対象",
      "紹介された方も対象",
      "詳細条件は面談時にご案内",
    ],
    icon: "referral" as const,
  },
  {
    id: "dress",
    title: "👗 ドレスプレゼント",
    description:
      "対象店舗へご入店いただいた方へ、ドレスをプレゼント。初期費用を抑えてスタートできます。",
    bullets: ["対象店舗限定", "条件はコンシェルジュよりご案内"],
    icon: "dress" as const,
  },
  {
    id: "concierge",
    title: "💬 無料コンシェルジュ相談",
    description: "希望条件に合う店舗を、リアルな情報とともにご案内します。",
    bullets: [
      "リアルな採用基準",
      "給与システム・平均時給",
      "店舗の雰囲気",
      "未経験でも働きやすい店舗",
    ],
    icon: "concierge" as const,
  },
] as const;

/* ── ページ最下部 CTA ── */

export const BOTTOM_LINE_CTA = {
  title: "自分に合うお店を、一緒に探しませんか？",
  description:
    "希望エリアや働き方をLINEで送るだけで、専任コンシェルジュがご案内します。",
  reassurance: "相談無料・無理な勧誘はありません",
} as const;

/* ── Search tags ── */

export const SEARCH_TAGS = [
  "キャバクラ 千葉",
  "ガールズバー 船橋",
  "ラウンジ 柏",
  "寮あり",
  "高収入",
  "未経験OK",
  "日払いOK",
] as const;
