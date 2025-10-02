import Header from "@/components/ui/navigation/header";
import Container from "@/components/layout/Container";
import HeroSection from "@/components/home/HeroSection";
import FlashSales from "@/components/home/FlashSales";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <FlashSales />
    </div>
  );
};

export default Home;