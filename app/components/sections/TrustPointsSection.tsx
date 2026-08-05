import { BRAND_GUIDE, TRUST_POINTS, type TrustPointIcon } from "@/app/lib/constants";
import { BrandGuide } from "@/app/components/brand/BrandGuide";
import { FadeInOnScroll } from "@/app/components/ui/FadeInOnScroll";
import { SectionShell } from "@/app/components/ui/SectionShell";
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
    <SectionShell ariaLabel="安心してご相談いただける理由" tone="white" compact connect>
      <FadeInOnScroll>
        <ul className="grid grid-cols-2 gap-3.5 lg:grid-cols-4 lg:gap-4">
          {TRUST_POINTS.map((point, index) => (
            <li key={point.label}>
              <FadeInOnScroll delay={index * 60}>
                <div className="brand-card flex min-h-[5.5rem] flex-col items-center justify-center gap-2.5 px-3 py-4 sm:min-h-[6rem]">
                  <span className="icon-wrap flex h-10 w-10 items-center justify-center rounded-2xl border border-border/80 bg-[#fff9f7]">
                    <TrustPointIconGraphic icon={point.icon} />
                  </span>
                  <span className="text-center text-sm font-medium leading-snug text-text">
                    {point.label}
                  </span>
                </div>
              </FadeInOnScroll>
            </li>
          ))}
        </ul>
      </FadeInOnScroll>

      <BrandGuide message={BRAND_GUIDE.afterTrust} variant="wink" className="mt-6 sm:mt-8" />
    </SectionShell>
  );
}
