import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** セクション上下の余白を付与する */
  section?: boolean;
  className?: string;
};

const baseClassName =
  "mx-auto w-full max-w-[var(--content-max-width)] px-4 sm:px-6 lg:px-8";

export function Container({
  children,
  section = false,
  className = "",
}: ContainerProps) {
  const sectionClassName = section
    ? "py-[var(--space-8)] sm:py-[var(--space-10)] lg:py-[var(--space-12)]"
    : "";

  return (
    <div className={`${baseClassName} ${sectionClassName} ${className}`.trim()}>
      {children}
    </div>
  );
}
