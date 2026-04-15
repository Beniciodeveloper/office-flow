import AlertBanner from "@/components/AlertBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import EmotionalSection from "@/components/EmotionalSection";
import LogicalSection from "@/components/LogicalSection";
import RationalSection from "@/components/RationalSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AlertBanner />
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <EmotionalSection />
        <LogicalSection />
        <RationalSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
