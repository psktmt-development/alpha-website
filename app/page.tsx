import AlphaHeroSection from "./about-us/components/AlphaHeroSection";
import { DirectionAwareHoverDemo } from "./homepage/components/DirectionAwareHoverDemo";
import { FounderSection } from "./homepage/components/FounderSection";
import { WhoWeAreSection } from "./homepage/components/WhoWeAreSection";
import { AlphaCircleMaskSection } from "./homepage/components/AlphaCircleMaskSection";
import { AlphaAdvantageMarquee } from "./homepage/components/AlphaAdvantageMarquee";
import { AlphaPillarsHover } from "./homepage/components/AlphaPillarsHover";
import { OurMembersSection } from "./homepage/components/OurMembersSection";
import { AlphaLogosMarquee } from "./homepage/components/AlphaLogosMarquee";
import { GlobalExpansionBento } from "./homepage/components/GlobalExpansionBento";
import { GlobalExpansionCard } from "./homepage/components/GlobalExpansionCard";
import { UpcomingEventPopup } from "@/components/ui/upcoming-event-popup";


export default function Home() {
  return (
    <main className="p-0 m-0 overflow-x-hidden bg-white">
      {/* Spacer for sticky alert bar (h-12 md:h-14 = 48px mobile, 56px desktop) */}
      <div className="h-12 md:h-14" />
      <UpcomingEventPopup />
      <AlphaHeroSection />
      <DirectionAwareHoverDemo />
      <FounderSection />
      <WhoWeAreSection />
      <AlphaCircleMaskSection />
      <AlphaAdvantageMarquee />
      <AlphaPillarsHover />
      <OurMembersSection />
      <GlobalExpansionCard />
      <GlobalExpansionBento />
      {/* <AlphaLogosMarquee /> */}
    </main>
  );
}
