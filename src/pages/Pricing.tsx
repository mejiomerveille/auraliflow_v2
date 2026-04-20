import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/landing/PricingSection";
import PricingSection2 from "@/components/landing/Price2";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <PricingSection2 />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
