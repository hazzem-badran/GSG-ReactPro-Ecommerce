import Header from "@/components/ui/navigation/header";
import Container from "@/components/layout/Container";
import HeroSection from "@/components/home/hero-section";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      
    </div>
  );
};

export default Home;