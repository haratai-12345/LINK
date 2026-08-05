import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";

export type SectionTone = "ivory" | "white" | "pink" | "muted";

type SectionShellProps = {
  id?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  tone?: SectionTone;
  connect?: boolean;
  compact?: boolean;
  children: ReactNode;
  className?: string;
};

const toneClass: Record<SectionTone, string> = {
  ivory: "bg-[linear-gradient(180deg,#fff9f7_0%,#ffffff_100%)]",
  white: "bg-section-white",
  pink: "bg-section-pink",
  muted: "bg-section-muted",
};

export function SectionShell({
  id,
  ariaLabelledBy,
  ariaLabel,
  tone = "white",
  connect = false,
  compact = false,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={`section-flow ${compact ? "section-flow--compact" : "home-section"} ${connect ? "section-flow--connect" : ""} ${toneClass[tone]} ${className}`.trim()}
    >
      <Container className="home-container relative !max-w-[72rem] !px-5 lg:!px-8">
        {children}
      </Container>
    </section>
  );
}
