import AboutUsSection from "./about-us-section";
import ContactUsSection from "./contact-us-section";
import HeroSection from "./hero-section";
import OurTeamSection from "./our-team-section";
import ReviewsSection from "./reviews-section";
import ServicesSection from "./services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <OurTeamSection />
      <ReviewsSection />
      <ContactUsSection />
    </main>
  );
}
