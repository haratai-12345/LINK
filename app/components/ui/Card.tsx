import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** 控えめなアクセント背景を付与 */
  accent?: boolean;
};

export function Card({ children, className = "", accent = false }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-lg)] border border-border bg-surface p-[var(--space-3)] shadow-[var(--shadow-sm)] sm:p-[var(--space-4)] ${
        accent ? "bg-accent-soft/40" : ""
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
