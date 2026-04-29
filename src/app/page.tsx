import AboutSection from "@/components/AboutSection";
import CoverageAreaSection from "@/components/CoverageAreaSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FloatingActions from "@/components/FloatingActions";
import FacilitiesGallerySection from "@/components/FacilitiesGallerySection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SpecializedICUSection from "@/components/SpecializedICUSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <div className="bg-white">
        <FacilitiesGallerySection />
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <SpecializedICUSection />
        <CoverageAreaSection />
        <FAQSection />
        <ContactSection />
      </div>

      <FloatingActions />
      {/* Ensure space so floating buttons never overlap content */}
      <div className="h-24 md:hidden" aria-hidden="true" />
    </div>
  );
}
