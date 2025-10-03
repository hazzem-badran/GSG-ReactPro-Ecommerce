import HeadingSection from "../shard/HeadingSection";
import Container from "../layout/Container";
import CountdownTimer from "./countdown-timer";
import { ProductCard } from "./poduct-card";
import { PRODUCTS } from "@/constants/products";

const FlashSales = () => {
  return (
    <div className="mt-14.5">
      <Container>
        <HeadingSection
          title="Today's"
          subTitle="Flash Sales"
          className="mb-22"
        >
          <CountdownTimer />
        </HeadingSection>
      </Container>

      {/* Products Carousel */}
      <div className="ml-[10%]">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2">
          {PRODUCTS.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="min-w-[250px] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
