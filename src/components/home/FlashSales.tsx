import HeadingSection from "../shard/HeadingSection";
import Container from "../layout/Container";
import CountdownTimer from "./countdown-timer";
import { ProductCard } from "./poduct-card";
import { PRODUCTS } from "@/constants/products";
import Button from "../ui/buttons/Button";

const FlashSales = () => {
  return (
    <div className="mt-14 ">
      <Container className="border-b-[0.5px] bp-amber-950">
        <HeadingSection
          title="Today's"
          subTitle="Flash Sales"
          className="mb-22"
        >
          <CountdownTimer />
        </HeadingSection>

        {/* Products Carousel */}
        <div className="-mr-[10%]">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-0">
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
        <div className="flex justify-center items-center my-14.5">
          <Button variant="primary" size="lg">
            View All Products
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FlashSales;
