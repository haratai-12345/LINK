import { Hero } from "@/app/components/sections/Hero";
import { FlowSection } from "@/app/components/sections/FlowSection";
import { CampaignSection } from "@/app/components/sections/CampaignSection";
import { SearchTags } from "@/app/components/sections/SearchTags";

export default function Home() {
  return (
    <>
      <Hero />
      <FlowSection />
      <CampaignSection />
      <SearchTags />
    </>
  );
}
