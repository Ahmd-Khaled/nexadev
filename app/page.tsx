import AboutUs from "@/components/Home/AboutUs";
import ContactUs from "@/components/Home/ContactUs";
import CTASection from "@/components/Home/CTASection";
import CTOWords from "@/components/Home/CTOWords";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/Home/Hero2";
import OurProjects from "@/components/Home/OurProjects";
import OurTeam from "@/components/Home/ourTeam";
import PricingPlans from "@/components/Home/PricingPlans";
import Services from "@/components/Home/Services";
import WhatsAppCall from "@/components/Shared/WhatsAppCall";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero2 />
      <Services />
      <AboutUs />
      <OurProjects />
      <OurTeam />
      <CTOWords />
      <PricingPlans />
      <CTASection />
      <ContactUs />
      <div className="fixed bottom-4 inset-e-6 z-50">
        <WhatsAppCall />
      </div>
    </main>
  );
}
