"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LineButton } from "@/app/components/ui/LineButton";
import {
  LINE_URL,
  NAV_ITEMS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/app/lib/constants";
import { MobileMenu } from "./MobileMenu";

function isNavActive(pathname: string, href: string): boolean {
  if (href.startsWith("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow] duration-200 ${
          isScrolled
            ? "border-border/80 bg-surface/95 shadow-[var(--shadow-sm)] backdrop-blur-sm"
            : "border-transparent bg-ivory/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto grid h-[var(--header-height)] w-full max-w-[var(--content-max-width)] grid-cols-[auto_1fr_auto] items-center gap-2 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex shrink-0 flex-col justify-center gap-0.5 py-1"
            aria-label={`${SITE_NAME} ${SITE_TAGLINE} トップへ`}
          >
            <span className="font-serif text-lg leading-none tracking-[0.1em] text-text">
              {SITE_NAME}
            </span>
            <span className="text-[0.625rem] leading-none tracking-wide text-muted">
              {SITE_TAGLINE}
            </span>
          </Link>

          <nav
            className="hidden justify-center gap-0.5 lg:flex"
            aria-label="メインナビゲーション"
          >
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-sm px-2.5 py-1.5 text-[0.6875rem] tracking-wide transition-colors xl:px-3 xl:text-xs ${
                    active
                      ? "font-medium text-pink-dark"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <LineButton
              href={LINE_URL}
              compact
              className="hidden sm:inline-flex"
            />

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface text-text lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              >
                {isMenuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        id={menuId}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        pathname={pathname}
      />
    </>
  );
}
