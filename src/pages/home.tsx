import Header from "@/components/ui/navigation/header";
import HeroSection from "@/components/home/HeroSection";
import FlashSales from "@/components/home/FlashSales";
import Categories from "@/components/home/Categories";
import BestSelling from "@/components/home/best-selling";
import AdsBanner from "@/components/home/ads-banner";
import ExploreProducts from "@/components/home/explore-products";
import NewArrival from "@/components/home/new-arrival";
import Services from "@/components/home/services";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <FlashSales />
      <Categories />
      <BestSelling />
      <AdsBanner />
      <ExploreProducts/>
      <NewArrival />
      <Services />
    </div>
  );
};

export default Home;
