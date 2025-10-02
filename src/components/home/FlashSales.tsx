import HeadingSection from "../shard/HeadingSection";
import Container from "../layout/Container";
import CountdownTimer from "./countdown-timer";

const FlashSales = () => {
  return (
    <div className="mt-24">
      <Container>
        <HeadingSection title="Today's" subTitle="Flash Sales">
          <CountdownTimer />
        </HeadingSection>
      </Container>
    </div>
  );
};

export default FlashSales;
