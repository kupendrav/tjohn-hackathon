import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import StatsSection from "@/components/sections/StatsSection";
import JobsSection from "@/components/sections/JobsSection";
import CTASection from "@/components/sections/CTASection";
import GSAPProvider from "@/components/animations/GSAPProvider";

export default function HomePage() {
  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <StatsSection />
          <LanguagesSection />
          <JobsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}
