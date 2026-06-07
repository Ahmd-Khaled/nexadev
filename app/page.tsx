import AboutUs from "@/components/Home/AboutUs";
import CTOWords from "@/components/Home/CTOWords";
import Hero from "@/components/Home/Hero";
import OurProjects from "@/components/Home/OurProjects";
import OurTeam from "@/components/Home/ourTeam";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurTeam />
      <CTOWords />
      <OurProjects />
    </div>
  );
}
