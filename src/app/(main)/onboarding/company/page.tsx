import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";

export default function CompanyOnboardingPage() {
  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <FadeInView direction="up">
            <div className="text-center">
              <AnimatedText text="Company Onboarding" tag="h1" className="text-3xl font-bold mb-4" />
              <p className="text-muted-foreground">Set up your company profile to start posting jobs.</p>
            </div>
          </FadeInView>
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}