import { BEST_SELLERS, PRODUCTS } from "@/constants/products";
import Container from "../layout/Container";
import HeadingSection from "../shard/HeadingSection";
import { ProductCard } from "./poduct-card";

const BestSelling = () => {
  return (
    <Container className="pb-17.5">
      <HeadingSection
        title="This Month"
        subTitle="Best Selling Products"
        className="mt-16.5 mb-10"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 justify-center">
        {BEST_SELLERS.map((product) => (
          <div className="min-w-[250px] ">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BestSelling;
