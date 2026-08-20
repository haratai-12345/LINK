import { getJobImageAlt } from "@/app/lib/job-image-alt";

export type JobDetailRow = {
  label: string;
  value: string;
};

export type JobDetailSection = {
  title: string;
  rows: JobDetailRow[];
};

export type JobStorePr = {
  sectionTitle?: string;
  paragraphs: string[];
  recommendationTitle: string;
  recommendations: string[];
};

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
  /** ページ固有のSEO title（未指定時は自動生成） */
  seoTitle?: string;
  /** ページ固有のSEO description（未指定時は自動生成） */
  seoDescription?: string;
  /** 求人公開日（YYYY-MM-DD）。未設定時は JobPosting JSON-LD を出力しない */
  datePosted?: string;
  /** 求人掲載期限（YYYY-MM-DD）。未設定時は出力しない */
  validThrough?: string;
  /** 指定時は標準セクションの代わりにこの内容を表示 */
  customDetailSections?: JobDetailSection[];
  storePr?: JobStorePr;
  /** 詳細ページのLINE注記（未指定時は JOBS_PAGE.lineDetailNote） */
  detailLineNote?: string;
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
  "alice": 1,
  "vellugue-funabashi": 1,
  "juliette-lounge": 1,
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
  {
    id: "alice",
    slug: "alice",
    name: "ALICE（アリス）",
    nameKana: "アリス",
    industry: "ガールズバー",
    area: "船橋",
    stations:
      "JR船橋駅 徒歩4分／京成船橋駅 徒歩1分／千葉県船橋市本町1-11-10",
    trialHourly: "3,500円〜6,000円",
    regularHourly: "3,500円〜6,000円",
    averageHourly: "3,500円〜6,000円",
    dailyPay: "可能（条件・規定あり）※全額日払いは応相談",
    businessHours: "19:30〜翌5:00 ※延長営業時は翌6:00まで／定休日なし",
    shift: "要確認 ※年齢目安18〜27歳程度",
    lastTrain: "可能",
    nonAlcohol: "要確認",
    dressRental:
      "あり（黒ショートパンツ・ワイシャツ・ヒール付き黒靴を店舗支給）",
    hairMake: "なし",
    transport:
      "あり ※深夜1:00〜始発時間帯／千葉県内中心・都内等遠方も相談可・専属ドライバー常駐",
    tattoo: "ワンポイント・可愛いデザイン等は相談可能",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: true,
    highPay: false,
  },
  {
    id: "vellugue-funabashi",
    slug: "vellugue-funabashi",
    name: "VELLUGUE Funabashi（ヴェルージュ船橋）",
    nameKana: "ヴェルージュ船橋",
    industry: "キャバクラ",
    area: "船橋",
    stations: "船橋駅",
    trialHourly: "3,500円〜10,000円",
    regularHourly: "3,500円〜10,000円",
    averageHourly: "要確認",
    dailyPay: "可能（5,000円〜10,000円）※時給分の全額日払いも応相談",
    businessHours: "19:00〜翌2:00",
    shift: "週1日〜OK",
    lastTrain: "可能",
    nonAlcohol: "要確認",
    dressRental: "ドレス・ショートドレス",
    hairMake: "あり・店内",
    transport: "あり",
    tattoo: "可能 ※勤務時は隠す必要あり",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: true,
    highPay: true,
    detailLineNote:
      "「詳しい給与条件を知りたい」「自分の場合いくらの時給になるか知りたい」など、細かい条件についてはLINEでご相談ください。",
    customDetailSections: [
      {
        title: "店舗情報",
        rows: [
          { label: "店舗名", value: "VELLUGUE Funabashi（ヴェルージュ船橋）" },
          { label: "業種", value: "キャバクラ" },
        ],
      },
      {
        title: "給与",
        rows: [
          { label: "本入時給", value: "3,500円〜10,000円" },
          { label: "保証期間", value: "1ヶ月〜6ヶ月" },
          {
            label: "日払い",
            value: "可能（5,000円〜10,000円）※時給分の全額日払いも応相談",
          },
        ],
      },
      {
        title: "各種バック",
        rows: [
          { label: "同伴バック", value: "5%〜30%" },
          { label: "本指名バック", value: "5%〜30%" },
          { label: "場内バック", value: "5%" },
          { label: "その他バック", value: "イベント等によるバックあり" },
        ],
      },
      {
        title: "勤務条件",
        rows: [
          { label: "営業時間", value: "19:00〜翌2:00" },
          { label: "定休日", value: "日曜日" },
          { label: "最低出勤日数", value: "週1日〜OK" },
          { label: "終電上がり", value: "可能" },
          { label: "勤務時の服装", value: "ドレス・ショートドレス" },
          { label: "ヘアメイク", value: "店内ヘアメイクあり" },
          { label: "送り", value: "あり" },
          {
            label: "送り範囲・料金",
            value: "20km圏内／5kmごとに500円",
          },
          { label: "送り時間", value: "24:00〜" },
          { label: "タトゥー", value: "可能 ※勤務時は隠す必要あり" },
          {
            label: "喫煙について",
            value:
              "待機中：喫煙可／フリー席・場内席：禁煙／本指名席：喫煙可",
          },
        ],
      },
      {
        title: "採用条件",
        rows: [
          {
            label: "年齢目安",
            value:
              "18歳〜35歳程度まで幅広く採用 ※18歳の採用は原則不可・条件により応相談 ※20歳未満の飲酒不可",
          },
          { label: "必要な身分証", value: "顔写真付き身分証明書" },
          {
            label: "キャストタイプ",
            value:
              "オールジャンル（お姉さん系・素人系・ギャル系など幅広く採用）",
          },
        ],
      },
      {
        title: "アクセス",
        rows: [
          { label: "エリア", value: "船橋" },
          { label: "最寄り駅", value: "船橋駅" },
          {
            label: "住所",
            value: "千葉県船橋市本町4丁目3-20 モリウチビル8F",
          },
        ],
      },
    ],
    storePr: {
      paragraphs: [
        "船橋エリアの高級店。",
        "客単価は3万円〜7万円程度と高めで、会社員・会社役員・経営者・ビジネスオーナーなどのお客様が中心です。",
        "フリーのお客様も多く、新規のお客様と接点を作りやすい環境です。",
        "キャストへのサポートにも力を入れており、客引きはありません。",
      ],
      recommendationTitle: "こんな方におすすめ",
      recommendations: [
        "高時給を狙いたい方",
        "客単価の高いお店で働きたい方",
        "フリーの多い環境で指名を増やしたい方",
        "高級感のある店舗で働きたい方",
        "お店のサポートを受けながら働きたい方",
      ],
    },
  },
  {
    id: "juliette-lounge",
    slug: "juliette-lounge",
    name: "Juliette Lounge（ジュリエット ラウンジ）",
    nameKana: "ジュリエットラウンジ",
    industry: "キャバクラ",
    area: "柏",
    stations: "JR柏駅 徒歩約5分",
    trialHourly: "4,000円〜8,000円",
    regularHourly: "4,000円〜8,000円",
    averageHourly: "6,000円",
    dailyPay: "5,000円〜 ※柔軟に対応可能",
    businessHours: "20:00〜翌4:00〜5:00",
    shift: "週3日〜",
    lastTrain: "可能",
    nonAlcohol: "可能",
    dressRental: "あり",
    hairMake: "あり・店内",
    transport: "あり ※範囲は応相談",
    tattoo: "可能",
    featured: false,
    pickup: true,
    dailyPayAvailable: true,
    beginnerFriendly: true,
    highPay: true,
    seoTitle:
      "Juliette Lounge（ジュリエット ラウンジ）の求人情報｜柏｜LINK",
    seoDescription:
      "柏・JR柏駅徒歩約5分のJuliette Lounge（ジュリエット ラウンジ）のキャバクラ求人情報。体入・本入時給4,000円〜8,000円、各種バック充実。私服勤務・終電上がり・ノンアル対応。LINKから無料相談できます。",
    customDetailSections: [
      {
        title: "店舗情報",
        rows: [
          {
            label: "店舗名",
            value: "Juliette Lounge（ジュリエット ラウンジ）",
          },
          { label: "業種", value: "キャバクラ" },
          { label: "エリア", value: "柏" },
          {
            label: "住所",
            value: "千葉県柏市柏2-8-16 レイヴェル31 5F",
          },
          { label: "アクセス", value: "JR柏駅から徒歩約5分" },
          { label: "営業時間", value: "20:00〜翌4:00〜5:00" },
          { label: "定休日", value: "なし（年中無休）" },
        ],
      },
      {
        title: "給与",
        rows: [
          { label: "体入時給", value: "4,000円〜8,000円" },
          { label: "本入時給", value: "4,000円〜8,000円" },
          { label: "平均時給", value: "6,000円" },
          { label: "保証期間", value: "2〜3ヶ月" },
          { label: "日払い", value: "5,000円〜 ※柔軟に対応可能" },
        ],
      },
      {
        title: "各種バック",
        rows: [
          { label: "同伴バック", value: "6,000円" },
          { label: "本指名バック", value: "2,000円" },
          { label: "場内バック", value: "500円" },
          { label: "ドリンクバック", value: "200円" },
          { label: "ボトルバック", value: "小計20%" },
        ],
      },
      {
        title: "勤務条件",
        rows: [
          { label: "出勤目安", value: "週3日〜 ※応相談" },
          { label: "終電上がり", value: "可能" },
          { label: "1時上がり", value: "可能" },
          {
            label: "服装",
            value:
              "私服勤務OK ※綺麗めなワンピースなど ※パンツスタイルNG",
          },
          { label: "レンタル衣装", value: "あり" },
          { label: "ヘアメイク", value: "店内ヘアメイクあり" },
          { label: "送り", value: "あり ※範囲は応相談" },
          { label: "送り開始", value: "24:00〜" },
          { label: "タトゥー", value: "可能" },
          { label: "ノンアルコール勤務", value: "可能" },
          { label: "待機中の携帯", value: "使用可能" },
          { label: "外立ち", value: "なし" },
        ],
      },
      {
        title: "採用条件",
        rows: [
          { label: "年齢目安", value: "18歳〜35歳" },
          { label: "歓迎するタイプ", value: "アナウンサー系・清楚系" },
          { label: "体入時の身分証", value: "顔写真付き身分証" },
          {
            label: "入店時の身分証",
            value:
              "顔写真付き身分証＋本籍地記載の住民票、またはパスポート",
          },
        ],
      },
      {
        title: "アクセス",
        rows: [
          { label: "エリア", value: "柏" },
          { label: "最寄り駅", value: "JR柏駅 徒歩約5分" },
          {
            label: "住所",
            value: "千葉県柏市柏2-8-16 レイヴェル31 5F",
          },
        ],
      },
    ],
    storePr: {
      sectionTitle: "Juliette Loungeの特徴",
      paragraphs: [
        "柏駅から徒歩圏内の好立地にある、豪華で広々とした店内が特徴のキャバクラ。",
        "高単価なお客様を重視しているため、高収入を目指しやすい環境が整っています。",
        "フリー接客でもバックが付くため、入店直後やまだ指名が少ない方でも収入につなげやすいのがポイント。",
        "私服勤務・終電上がり・ノンアル勤務にも対応しており、働き方について相談しやすい店舗です。",
      ],
      recommendationTitle: "こんな方におすすめ",
      recommendations: [
        "柏エリアで高収入を目指したい方",
        "清楚系・アナウンサー系の方",
        "フリーからもしっかり稼ぎたい方",
        "私服で働きたい方",
        "終電上がりを希望する方",
      ],
    },
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
  "船橋",
  "柏",
] as const;

export const FILTER_INDUSTRIES = ["キャバクラ", "ガールズバー"] as const;

export const FILTER_SHIFTS = ["週1日〜", "週2日〜", "週3日〜", "要確認"] as const;

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
  title: "千葉のキャバクラ・夜職求人一覧",
  description:
    "千葉エリアを中心に、LINKが厳選したキャバクラ・ガールズバーの求人をご紹介します。掲載していない店舗も多数あるため、希望条件に合う求人はLINEでお気軽にご相談ください。",
  lineDetailNote: "詳しい条件や面接状況はLINEでご案内します",
  storeLineLabel: "LINEで詳細を聞く",
  detailLineLabel: "この求人についてLINEで相談する",
  bottomCtaTitle: "掲載店舗以外もご相談ください",
  bottomCtaDescription:
    "ご希望の条件に合う求人を、専任コンシェルジュが無料でご案内します。",
} as const;
