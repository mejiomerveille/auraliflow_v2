import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ShowcaseSection } from "@/components/landing/ShowcaseSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { ClientsSection } from "@/components/landing/ClientsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import AppShowcase from "@/components/landing/AppShowcase";
import PricingSection2 from "@/components/landing/Price2";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ClientsSection />
        <ProblemSection/>
        <ServicesSection/>
        <FeaturesSection />
        <AppShowcase />
        {/* <HowItWorksSection /> */}
        <DemoSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <DownloadSection />
        <ComparisonSection/>
        {/* <PricingSection /> */}
        <PricingSection2/>
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
