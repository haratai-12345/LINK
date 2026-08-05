import Link from "next/link";
import { Container } from "@/app/components/ui/Container";
import { LineButton } from "@/app/components/ui/LineButton";
import {
  FOOTER_LINKS,
  LINE_CTA_LABEL,
  LINE_URL,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/app/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container section className="!py-[var(--space-6)] sm:!py-[var(--space-8)]">
        <div className="flex flex-col gap-[var(--space-6)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="font-serif text-xl tracking-[0.12em] text-text">
                {SITE_NAME}
              </p>
              <p className="text-sm text-muted">{SITE_TAGLINE}</p>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                千葉エリアの夜職求人を、専任コンシェルジュが無料でご紹介します。
              </p>
            </div>

            <LineButton href={LINE_URL} className="shrink-0 self-start sm:self-auto">
              {LINE_CTA_LABEL}
            </LineButton>
          </div>

          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border pt-[var(--space-4)]">
            <p className="text-xs tracking-wide text-muted">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
