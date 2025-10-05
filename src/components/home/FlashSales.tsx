import HeadingSection from "../shard/HeadingSection";
import Container from "../layout/Container";
import CountdownTimer from "./countdown-timer";
import { ProductCard } from "./poduct-card";
import { FLASH_SALES } from "@/constants/products";
import Button from "../ui/buttons/Button";

const FlashSales = () => {
  return (
    <Container className="mt-14.5 border-b-[0.5px] border-border">
      <HeadingSection title="Today's" subTitle="Flash Sales" className="mb-10">
        <CountdownTimer />
      </HeadingSection>

      {/* Products Carousel */}
      <div className="-mr-[10%]">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2">
          {FLASH_SALES.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="min-w-[250px] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full my-12 flex justify-center items-center">
        <Button variant="primary" size="lg">
          View All Products
        </Button>
      </div>
    </Container>
  );
};

export default FlashSales;
