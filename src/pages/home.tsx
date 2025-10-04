import Header from "@/components/ui/navigation/header";
import HeroSection from "@/components/home/HeroSection";
import FlashSales from "@/components/home/FlashSales";
import Categories from "@/components/home/Categories";
import BestSelling from "@/components/home/best-selling";
import AdsBanner from "@/components/home/ads-banner";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSelling />
      <AdsBanner />
    </div>
  );
};

export default Home;
