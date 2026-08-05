import type { ReactNode } from "react";

type BrandCardProps = {
  children: ReactNode;
  className?: string;
};

export function BrandCard({ children, className = "" }: BrandCardProps) {
  return (
    <article
      className={`brand-card flex h-full w-full flex-col rounded-[var(--radius-ui)] border border-border bg-surface shadow-[var(--shadow-sm)] ${className}`.trim()}
    >
      {children}
    </article>
  );
}
