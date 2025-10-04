import Container from "../layout/Container";
import HeadingSection from "../shard/HeadingSection";
import { PRODUCTS } from "@/constants/products";
import { ProductCard } from "./poduct-card";
import Button from "../ui/buttons/Button";

const ExploreProducts = () => {
  return (
    <Container className="pb-17.5">
      <HeadingSection
        title="This Month"
        subTitle="Best Selling Products"
        className="mt-16.5 mb-10"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 justify-center">
        {PRODUCTS.slice(0, 8).map((product) => (
          <div className="min-w-[250px] ">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
      <div className="w-full my-12 flex justify-center items-center">
        <Button variant="primary" size="lg">
          View All Products
        </Button>
      </div>
    </Container>
  );
};

export default ExploreProducts;
