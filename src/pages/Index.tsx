import AlertBanner from "@/components/AlertBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import EmotionalSection from "@/components/EmotionalSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import RationalSection from "@/components/RationalSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#080809] text-foreground overflow-x-hidden">
      {/* AlertBanner removed per user request */}
      <Header />
      <main>
        <div className="section-dark">
          <HeroSection />
        </div>

        <div className="section-divider" />

        <div className="section-alt">
          <VideoSection />
        </div>

        <div className="section-divider" />

        <div className="section-dark">
          <EmotionalSection />
        </div>

        <div className="section-divider" />

        <div className="section-alt">
          <ServicesSection />
        </div>

        <div className="section-divider" />

        <div className="section-dark">
          <ProcessSection />
        </div>

        <div className="section-divider" />

        <div className="section-alt">
          <RationalSection />
        </div>

        <div className="section-divider" />

        <div className="section-dark">
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
