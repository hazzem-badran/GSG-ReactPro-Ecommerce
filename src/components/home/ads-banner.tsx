import Button from "../ui/buttons/Button";
import Container from "../layout/Container";
import { Body, H2 } from "../ui/typography";
import CountdownTimer from "./countdown-timer";
import AdsImg from "./ads-img";

const AdsBanner = () => {

  return (
    <Container>
      <div className="bg-black w-full text-white p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div>
            <Body className="text-green-400 !font-semibold mb-4">
              Categories
            </Body>
            <H2 className="text-white ">Enhance Your Music Experience</H2>
          </div>

          {/* Countdown */}
          <CountdownTimer variant="circles"  />

          <Button size="lg" className="!bg-btn-1 text-white">
            Buy Now!
          </Button>
        </div>

        <AdsImg/>

        
      </div>
    </Container>
  );
};

export default AdsBanner;