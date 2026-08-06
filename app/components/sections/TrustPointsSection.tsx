import { TRUST_POINTS, type TrustPointIcon } from "@/app/lib/constants";
import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { SectionShell } from "@/app/components/ui/SectionShell";
import {
  CircleCheck,
  MapPinned,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

function TrustPointIconGraphic({ icon }: { icon: TrustPointIcon }) {
  const className = "h-4 w-4 text-champagne";

  switch (icon) {
    case "free":
      return <CircleCheck className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "shield":
      return <ShieldCheck className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "line":
      return <MessageCircle className={className} strokeWidth={1.5} aria-hidden="true" />;
    case "area":
      return <MapPinned className={className} strokeWidth={1.5} aria-hidden="true" />;
  }
}

export function TrustPointsSection() {
  return (
    <SectionShell ariaLabel="安心してご相談いただける理由" tone="white" compact connect>
      <FadeInOnScroll>
        <ul className="trust-points">
          {TRUST_POINTS.map((point, index) => (
            <li key={point.label}>
              <FadeInOnScroll delay={index * 60}>
                <div className="trust-points__item">
                  <TrustPointIconGraphic icon={point.icon} />
                  <span>{point.label}</span>
                </div>
              </FadeInOnScroll>
            </li>
          ))}
        </ul>
      </FadeInOnScroll>
    </SectionShell>
  );
}
