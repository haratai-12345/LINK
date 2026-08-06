import { Hero } from "@/app/components/sections/Hero";
import { TrustPointsSection } from "@/app/components/sections/TrustPointsSection";
import { ConciergeSection } from "@/app/components/sections/ConciergeSection";
import { RealInfoSection } from "@/app/components/sections/RealInfoSection";
import { StrengthsSection } from "@/app/components/sections/StrengthsSection";
import { ReviewsSection } from "@/app/components/sections/ReviewsSection";
import { FeaturedJobsSection } from "@/app/components/sections/FeaturedJobsSection";
import { FlowSection } from "@/app/components/sections/FlowSection";
import { CampaignSection } from "@/app/components/sections/CampaignSection";
import { BottomLineCtaSection } from "@/app/components/sections/BottomLineCtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustPointsSection />
      <ConciergeSection />
      <RealInfoSection />
      <StrengthsSection />
      <ReviewsSection />
      <FeaturedJobsSection />
      <FlowSection />
      <CampaignSection />
      <BottomLineCtaSection />
    </>
  );
}
