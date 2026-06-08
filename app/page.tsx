import AboutUs from "@/components/Home/AboutUs";
import ContactUs from "@/components/Home/ContactUs";
import CTASection from "@/components/Home/CTASection";
import CTOWords from "@/components/Home/CTOWords";
import Hero from "@/components/Home/Hero";
import OurProjects from "@/components/Home/OurProjects";
import OurTeam from "@/components/Home/ourTeam";
import PricingPlans from "@/components/Home/PricingPlans";
import Services from "@/components/Home/Services";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <OurProjects />
      <OurTeam />
      <CTOWords />
      <PricingPlans />
      <CTASection />
      <ContactUs />
    </div>
  );
}
