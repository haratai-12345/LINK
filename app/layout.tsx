import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Footer } from "@/app/components/layout/Footer";
import { Header } from "@/app/components/layout/Header";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { SITE_NAME } from "@/app/lib/constants";
import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  HOME_SEO,
  SITE_URL,
} from "@/app/lib/seo";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  weight: ["400", "500"],
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_SEO.title,
    template: `%s｜${SITE_NAME}`,
  },
  description: HOME_SEO.description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationJsonLd = buildOrganizationJsonLd();
  const webSiteJsonLd = buildWebSiteJsonLd();

  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={[organizationJsonLd, webSiteJsonLd]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
