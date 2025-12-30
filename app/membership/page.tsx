import { MembershipHero } from "./components/MembershipHero";
import { MembershipBenefitsSection } from "./components/MembershipBenefitsSection";
import { MemberBenefitsSection } from "./components/MemberBenefitsSection";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white">
      <MembershipHero />
      <MembershipBenefitsSection />
      <MemberBenefitsSection />
    </main>
  );
}

