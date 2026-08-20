import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/app/components/ui/Container";
import { SITE_NAME } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: { absolute: `ページが見つかりません｜${SITE_NAME}` },
  description:
    "お探しのページは見つかりませんでした。千葉のキャバクラ・夜職求人はLINKの求人一覧からご確認ください。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="mb-2 text-xs font-medium tracking-widest text-muted uppercase">
        404
      </p>
      <h1 className="font-serif text-2xl text-charcoal sm:text-3xl">
        ページが見つかりません
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        お探しのページは移動または削除された可能性があります。求人一覧から再度お探しください。
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-ui)] border border-[#e8e6e4] bg-surface px-6 text-sm font-medium text-charcoal transition-colors hover:border-pink hover:bg-pink-light/50"
        >
          トップへ戻る
        </Link>
        <Link
          href="/jobs"
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-ui)] border border-pink-dark bg-surface px-6 text-sm font-medium text-pink-dark transition-colors hover:border-pink hover:bg-pink-light"
        >
          求人一覧を見る
        </Link>
      </div>
    </Container>
  );
}
