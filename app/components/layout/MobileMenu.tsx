"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { LineButton } from "@/app/components/ui/LineButton";
import { LINE_URL, NAV_ITEMS } from "@/app/lib/constants";

type MobileMenuProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
};

function isNavActive(pathname: string, href: string): boolean {
  if (href.startsWith("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ id, isOpen, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const els = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (els.length === 0) return;

      const first = els[0];
      const last = els[els.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-text/20"
        aria-label="メニューを閉じる"
        onClick={onClose}
      />

      <nav
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-border bg-surface shadow-[var(--shadow-md)]"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <p id={`${id}-title`} className="font-serif text-sm text-text">
            Menu
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border"
            aria-label="メニューを閉じる"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-3 py-3">
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded-md px-3 text-sm ${
                    active
                      ? "bg-pink-light font-medium text-pink-dark"
                      : "text-text hover:bg-pink-light/60"
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-border p-4">
          <LineButton href={LINE_URL} fullWidth onClick={onClose} />
        </div>
      </nav>
    </div>
  );
}
