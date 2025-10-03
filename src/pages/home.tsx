import Header from "@/components/ui/navigation/header";
import HeroSection from "@/components/home/HeroSection";
import FlashSales from "@/components/home/FlashSales";
import Categories from "@/components/home/Categories";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <FlashSales />
      <Categories />
    </div>
  );
};

export default Home;