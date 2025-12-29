import AlphaHeroSection from "./about-us/components/AlphaHeroSection";
import { DirectionAwareHoverDemo } from "./homepage/components/DirectionAwareHoverDemo";
import { FounderSection } from "./homepage/components/FounderSection";
import { WhoWeAreSection } from "./homepage/components/WhoWeAreSection";
import { AlphaCircleMaskSection } from "./homepage/components/AlphaCircleMaskSection";
import { AlphaAdvantageMarquee } from "./homepage/components/AlphaAdvantageMarquee";
import { AlphaPillarsHover } from "./homepage/components/AlphaPillarsHover";
import { AlphaLogosMarquee } from "./homepage/components/AlphaLogosMarquee";
import { GlobalExpansionBento } from "./homepage/components/GlobalExpansionBento";
import { GlobalExpansionCard } from "./homepage/components/GlobalExpansionCard";


export default function Home() {
  return (
    <main className="p-0 m-0 overflow-x-hidden bg-black">
      <AlphaHeroSection />
      <DirectionAwareHoverDemo />
      <FounderSection />
      <WhoWeAreSection />
      <AlphaCircleMaskSection />
      <AlphaAdvantageMarquee />
      <AlphaPillarsHover />
      <GlobalExpansionCard />
      <GlobalExpansionBento />
      {/* <AlphaLogosMarquee /> */}
    </main>
  );
}
