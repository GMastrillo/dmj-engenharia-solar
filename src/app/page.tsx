import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { FourPillars } from "@/components/sections/four-pillars";
import { PromoBanner } from "@/components/sections/promo-banner";
import { SolarArchitect } from "@/components/sections/solar-architect";
import { DfPortfolio } from "@/components/sections/df-portfolio";
import { WhyDmj } from "@/components/sections/why-dmj";
import { SocialProof } from "@/components/sections/social-proof";
import { FaqContact } from "@/components/sections/faq-contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      <Header />
      <HeroSection />
      <FourPillars />
      <PromoBanner />
      <SolarArchitect />
      <DfPortfolio />
      <WhyDmj />
      <SocialProof />
      <FaqContact />
      <Footer />
    </main>
  );
}
