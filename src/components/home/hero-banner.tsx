import { Body, H1, Small } from "../ui/typography";
import Apple from "@/assets/images/apple-gray-logo.png";
import ArrowRight from "@/assets/icons/arrow-right-white.png";
import HeroImage from "@/assets/images/hero.png";
import Pa from "@/assets/images/pgnation.png";

const HeroBanner = () => {
  return (
    <div className="relative bg-black md:h-[340px] text-whtie rounded-lg p-8 md:p-12 flex items-center mt-10 overflow-hidden">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-4 text-white">
          <img
            src={Apple}
            alt="Apple"
            className="h-[49px] w-[40px] object-contain"
          />
          <Small>iPhone 14 Series</Small>
        </div>
        <H1>Up to 10% off Voucher</H1>

        <div className="flex flex-row items-center gap-2">
          <Body className="w-fit border-b-1 font-medium leading-6 text-white border-white">
            Shop Now
          </Body>
          <img src={ArrowRight} alt="ArrowRight" className="w-6 h-6 " />
        </div>
      </div>
      <div className="hidden lg:block flex-1">
        <img
          src={HeroImage}
          alt="iPhone 14"
          className="h-full w-auto object-cover transform scale-140 translate-x-[10px] translate-y-[15px]"
        />
      </div>
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-2.5">
        <img src={Pa} alt="" className="w-auto" />
      </span>
    </div>
  );
};

export default HeroBanner;
