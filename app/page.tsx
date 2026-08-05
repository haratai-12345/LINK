import { Hero } from "@/app/components/sections/Hero";
import { TrustPointsSection } from "@/app/components/sections/TrustPointsSection";
import { FeaturedJobsSection } from "@/app/components/sections/FeaturedJobsSection";
import { StrengthsSection } from "@/app/components/sections/StrengthsSection";
import { RealInfoSection } from "@/app/components/sections/RealInfoSection";
import { FlowSection } from "@/app/components/sections/FlowSection";
import { CampaignSection } from "@/app/components/sections/CampaignSection";
import { BottomLineCtaSection } from "@/app/components/sections/BottomLineCtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustPointsSection />
      <FeaturedJobsSection />
      <StrengthsSection />
      <RealInfoSection />
      <FlowSection />
      <CampaignSection />
      <BottomLineCtaSection />
    </>
  );
}
