import Gamepad from "@/assets/images/products/gamepad.png";
import Badge from "@/components/Badge";
import EYE from "@/assets/icons/eye.png";
import Heart from "@/assets/icons/heart-small.png";
import Button from "@/components/ui/buttons/Button";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    discount?: number;
    isNew?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-[270px] min-w-[240px] h-[350px] flex flex-col  group overflow-hidden">
      {/* Image Container */}
      <div className="relative flex-1 bg-[#ebebeb] flex items-center justify-center p-6">
        {/* Badges */}
        {product.discount && (
          <Badge variant="discount" value={`-${product.discount}%`} />
        )}
        {product.isNew && <Badge variant="new" value="New" />}

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-8.5 w-8.5 rounded-full flex items-center justify-center p-0!"
          >
            <img src={Heart} alt="Heart" className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8.5 w-8.5 rounded-full flex items-center justify-center p-0!"
          >
            <img src={EYE} alt="EYE" className="h-6 w-6" />
          </Button>
        </div>

        {/* Product Image */}
        <img
          src={Gamepad}
          alt={product.name}
          className="max-h-[160px] w-auto object-contain"
        />

        {/* Add to Cart Button */}
        <div
          className="absolute bottom-0 left-0 right-0
              opacity-0
              group-hover:opacity-100
             transition-opacity duration-300 ease-in-out rounded-b-2xl             
             "
        >
          <Button className="w-full rounded-none rounded-b-lg bg-primary hover:bg-primary/90 font-medium!">
            Add To Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-3">
          <span className="text-secondary-2 font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.073 3.292a1
               1 0 00.95.69h3.462c.969 0 1.371 1.24.588 
               1.81l-2.8 2.034a1 1 0 00-.364 
               1.118l1.073 3.292c.3.921-.755 1.688-1.54 
               1.118l-2.8-2.034a1 1 0 00-1.175 
               0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.072-3.292a1 
               1 0 00-.364-1.118L2.977 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
               1 0 00.951-.69l1.072-3.292z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}
