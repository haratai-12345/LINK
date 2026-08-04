export const SITE_NAME = "LINK";
export const SITE_TAGLINE = "千葉ナイトコンシェルジュ";
export const SITE_DESCRIPTION =
  "千葉で夜職・黒服を探すなら。専任コンシェルジュが、希望条件に合うお店を無料でご紹介します。";

/** 仮のLINE公式アカウントURL（本番URL確定後に差し替え） */
export const LINE_URL = "https://line.me/R/ti/p/@placeholder";

export const LINE_CTA_LABEL = "LINEで無料相談する";

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "求人を探す", href: "#jobs" },
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

export const HERO_EYEBROW = "千葉でキャバクラ、ガールズバーを探すなら♡";

export const HERO_HEADLINE = {
  lines: ["あなたに", "ピッタリの", "お店", "見つけます。"] as const,
  highlight: "ピッタリ",
};

export const HERO_DESCRIPTION =
  "専任コンシェルジュが、希望条件に合うお店を完全無料でご紹介。面接から入店後まで丁寧にサポートします。";

export const HERO_TRUST_ITEMS = [
  "完全無料",
  "安心サポート",
  "高待遇求人多数",
] as const;

export const HERO_MICROCOPY = {
  line1: "24時間受付中",
  line2: "お気軽にご相談ください",
};

export const HERO_IMAGE = {
  src: "/images/hero/hero-cat.png",
  alt: "猫のコンシェルジュが相談者を丁寧に案内している",
  width: 1536,
  height: 1024,
} as const;

/* ── Flow ── */

export type FlowStep = {
  step: string;
  title: string;
  description: string;
  imageSrc: string;
};

export const FLOW_STEPS: FlowStep[] = [
  {
    step: "01",
    title: "LINE相談",
    description: "まずはLINEで希望条件を送るだけ",
    imageSrc: "/images/flow/step-01.png",
  },
  {
    step: "02",
    title: "条件に合う店舗紹介",
    description: "あなたに合うお店をご提案",
    imageSrc: "/images/flow/step-02.png",
  },
  {
    step: "03",
    title: "面接・体験入店",
    description: "日程調整や面接対策もサポート",
    imageSrc: "/images/flow/step-03.png",
  },
  {
    step: "04",
    title: "お仕事スタート",
    description: "入店後もフォロー",
    imageSrc: "/images/flow/step-04.png",
  },
];

/* ── Campaign ── */

export const CAMPAIGNS = [
  {
    id: "referral",
    badge: "紹介キャンペーン",
    title: "紹介した方・紹介された方",
    highlight: "PayPay 1,000円",
    note: "LINE追加後、面接予定が確定した場合",
    variant: "pink" as const,
  },
  {
    id: "bonus",
    badge: "入店祝い",
    title: "入店祝い金",
    highlight: "最大20万円",
    note: "規定の出勤日数達成後に進呈",
    variant: "gold" as const,
  },
] as const;

/* ── Search tags ── */

export const SEARCH_TAGS = [
  "黒服求人 千葉",
  "ボーイ求人 船橋",
  "ドライバー求人 千葉",
  "寮あり",
  "高収入",
  "未経験OK",
  "日払いOK",
] as const;
