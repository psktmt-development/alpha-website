"use client";

import { MembersGrid } from "./components/MembersGrid";
import { MembershipHero } from "../membership/components/MembershipHero";
import { MembershipBenefitsSection } from "../membership/components/MembershipBenefitsSection";
import { MembershipIdentitySection } from "../membership/components/MembershipIdentitySection";
import { MemberBenefitsSection } from "../membership/components/MemberBenefitsSection";

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <MembershipHero />
      <MembershipIdentitySection />
      <MemberBenefitsSection />
      <MembershipBenefitsSection />
      <MembersGrid />
    </main>
  );
}

