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

export const BRAND_GUIDE = {
  afterTrust:
    "不安なことは、ひとつずつ一緒に整理していきましょう。相談だけでも、気軽にお声がけください。",
  strengths:
    "千葉エリアに詳しいコンシェルジュが、あなたの希望に合わせて店舗をご案内します。",
} as const;

/** Hero メインビジュアル（面談風景） */
export const HERO_IMAGE = {
  src: "/images/hero/hero-cat.png",
  alt: "猫のコンシェルジュが相談者を丁寧に案内している",
  width: 1536,
  height: 1024,
} as const;

/* ── ご利用者の声 ── */

export const REVIEWS_SECTION = {
  eyebrow: "Voice",
  title: "ご相談者の声",
  description:
    "LINKを通じてお仕事を始めた方の、リアルな感想です。",
  supporting: "※掲載内容はイメージです。実際の声は順次更新予定です。",
  note: "※個人が特定されないよう、イニシャルとエリアのみ掲載しています。",
  items: [
    {
      id: "review-1",
      initial: "M",
      name: "M.K さん",
      meta: "20代 · 千葉エリア",
      time: "21:14",
      message:
        "面接前に時給のリアルなラインを教えてもらえて、当日びっくりすることがなく安心でした。",
    },
    {
      id: "review-2",
      initial: "A",
      name: "A.S さん",
      meta: "20代 · 船橋エリア",
      time: "19:42",
      message:
        "未経験でも働きやすいお店を紹介してもらえました。LINEだけで完結するのも助かりました。",
    },
    {
      id: "review-3",
      initial: "R",
      name: "R.N さん",
      meta: "30代 · 柏エリア",
      time: "22:08",
      message:
        "自分で探していた時より、店の雰囲気や条件の説明が丁寧で、納得してから進められました。",
    },
  ],
} as const;

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
  eyebrow: "Explore",
  title: "LINK厳選のおすすめ求人",
  description:
    "まずは、現在ご案内可能な求人の一部をご覧ください。",
  supporting: "気になるお店は、LINEで詳しい条件をご案内します。",
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
  | "interview"
  | "paySystem"
  | "mediation"
  | "fit";

export const REAL_INFO_SECTION = {
  title: "面接まで行って条件が変わる、そんな心配は不要です。",
  description:
    "求人サイトには目を引く高時給が並びますが、実際に面接へ行くと「条件が違う」と説明されることも珍しくありません。LINKでは、紹介前にリアルな条件をお伝えします。",
  closing:
    "自分一人で探すより、事前に知ってから選べる。掲載時給と実際の条件のギャップで後悔しないために、コンシェルジュが正直にお伝えします。",
  ctaLead: "求人票では分からない情報を、LINEで丁寧にご案内します。",
  buttonLabel: "LINEでリアルな条件を聞く",
  items: [
    {
      title: "掲載時給と、実際に貰えるラインは違うことがある",
      description:
        "他サイトでは過剰に高い時給が並ぶ一方、面接で理由をつけられ、想定の半分近い条件にされるケースも。LINKでは採用されやすい時給帯や平均ラインを、紹介前にお伝えします。",
      icon: "salary" as const,
    },
    {
      title: "面接当日まで、条件のズレを知らないまま進まない",
      description:
        "「体験入店後に決まる」「条件により異なる」など、曖昧な説明のまま足を運ぶ必要はありません。事前に確認できることを、一つひとつ整理してご案内します。",
      icon: "interview" as const,
    },
    {
      title: "バック・控除・ノルマなど、稼ぎ方のリアルも先に",
      description:
        "求人票に載らない給与システムの詳細も、入店前にご説明。働き始めてから「聞いていなかった」と困らないよう、確認できることは先に共有します。",
      icon: "paySystem" as const,
    },
    {
      title: "お店とのトラブルも、LINKが間に入れる",
      description:
        "自分で応募すると、店舗とのやり取りは一対一になりがちで、対処が難しいことも。LINK経由なら、困ったことがあってもコンシェルジュが間に入り、相談に乗れます。",
      icon: "mediation" as const,
    },
    {
      title: "あなたに本当に合う店舗か、一緒に見極める",
      description:
        "採用基準や店内の雰囲気、未経験でも働きやすいかまで。条件の数字だけでなく、人として合うかどうかも含めてご提案します。",
      icon: "fit" as const,
    },
  ],
} as const;

export type MascotVariant = "pointing" | "wink" | "invite";

export const MASCOT_IMAGES = {
  pointing: {
    src: "/images/mascot/cat-pointing.png",
    alt: "猫のコンシェルジュがポイントを案内している",
    width: 1024,
    height: 1024,
  },
  wink: {
    src: "/images/mascot/cat-wink.png",
    alt: "猫のコンシェルジュが応援している",
    width: 1024,
    height: 1024,
  },
  invite: {
    src: "/images/mascot/cat-invite.png",
    alt: "猫のコンシェルジュが案内している",
    width: 1024,
    height: 1024,
  },
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
  ctaLead: "特典の詳細や対象条件は、LINEでお気軽にご確認ください。",
  ctaLabel: "LINEで無料相談する",
  ctaNote: "相談だけでも大歓迎です。",
} as const;

export const CAMPAIGNS = [
  {
    id: "referral",
    title: "お友達紹介特典",
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
    title: "ドレスプレゼント",
    description:
      "対象店舗へご入店いただいた方へ、ドレスをプレゼント。初期費用を抑えてスタートできます。",
    bullets: ["対象店舗限定", "条件はコンシェルジュよりご案内"],
    icon: "dress" as const,
  },
  {
    id: "concierge",
    title: "無料コンシェルジュ相談",
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
  brandMessage: "あなたのペースで、あなたに合うお店を。",
  title: "ここまで読んでくださったあなたへ",
  description:
    "「自分に合うお店が分からない」「条件のリアルが不安」——そんな気持ちから、始めてみませんか。",
  ctaLead: "求人票では分からない情報も、LINEで丁寧にお伝えします。",
  reassurance: "相談無料 · 無理な勧誘はありません",
  guideMessage:
    "はじめての方も、お気軽にメッセージをください。猫コンシェルジュがお待ちしています。",
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
