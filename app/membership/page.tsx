import { MembershipHero } from "./components/MembershipHero";
import { MembershipBenefitsSection } from "./components/MembershipBenefitsSection";
import { MemberBenefitsSection } from "./components/MemberBenefitsSection";
import { OurMembersGrid } from "./components/OurMembersGrid";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <MembershipHero />
      <MembershipBenefitsSection />
      <MemberBenefitsSection />
      <OurMembersGrid />
    </main>
  );
}

