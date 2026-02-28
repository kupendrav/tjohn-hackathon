import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GSAPProvider from "@/components/animations/GSAPProvider";
import FadeInView from "@/components/animations/FadeInView";
import AnimatedText from "@/components/animations/AnimatedText";

export default function CompanyPage() {
  const companies = [
    { name: "TechCorp Inc.", industry: "Technology", jobs: 12 },
    { name: "AI Solutions Ltd.", industry: "Artificial Intelligence", jobs: 8 },
    { name: "Enterprise Solutions", industry: "Enterprise Software", jobs: 5 },
    { name: "DesignHub Co.", industry: "Design", jobs: 7 },
    { name: "CloudFirst Inc.", industry: "Cloud Computing", jobs: 10 },
    { name: "StartupXYZ", industry: "Startups", jobs: 3 },
  ];

  return (
    <GSAPProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <AnimatedText text="Companies Hiring" tag="h1" className="text-3xl sm:text-4xl font-bold mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companies.map((company, i) => (
              <FadeInView key={company.name} direction="up" delay={i * 0.1}>
                <div className="border rounded-xl p-6 bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{company.industry}</p>
                  <p className="text-sm text-primary font-medium mt-3">{company.jobs} open positions</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </GSAPProvider>
  );
}