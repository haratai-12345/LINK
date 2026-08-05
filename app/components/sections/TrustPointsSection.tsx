import { Container } from "@/app/components/ui/Container";
import { TRUST_POINTS, type TrustPointIcon } from "@/app/lib/constants";
import {
  CircleCheck,
  MapPinned,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

function TrustPointIconGraphic({ icon }: { icon: TrustPointIcon }) {
  const className = "h-5 w-5 text-pink-dark";

  switch (icon) {
    case "free":
      return <CircleCheck className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "shield":
      return <ShieldCheck className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "line":
      return <MessageCircle className={className} strokeWidth={1.75} aria-hidden="true" />;
    case "area":
      return <MapPinned className={className} strokeWidth={1.75} aria-hidden="true" />;
  }
}

export function TrustPointsSection() {
  return (
    <section
      aria-label="安心してご相談いただける理由"
      className="bg-section-white pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-14 lg:pt-10"
    >
      <Container className="home-container !max-w-[75rem] !px-5 !py-0 lg:!px-8">
        <ul className="grid grid-cols-2 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <li
              key={point.label}
              className="flex min-h-[5.25rem] flex-col items-center justify-center gap-2 rounded-[18px] border border-border bg-surface px-3 py-3.5 shadow-[var(--shadow-sm)] sm:min-h-[5.75rem] sm:gap-2.5 sm:py-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-border/80 bg-[#fff9f7] sm:h-10 sm:w-10">
                <TrustPointIconGraphic icon={point.icon} />
              </span>
              <span className="text-center text-sm font-medium leading-snug text-text">
                {point.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
