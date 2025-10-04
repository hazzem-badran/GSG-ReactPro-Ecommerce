import React from "react";

interface NewArrivalProductsProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  buttonText?: string;
  className?: string;
  imgClassName?: string;
  gradientClass?: string;
}

const NewArrivalProducts: React.FC<NewArrivalProductsProps> = ({
  title,
  description,
  image,
  alt,
  buttonText = "Shop Now",
  className,
  imgClassName,
  gradientClass = "bg-gradient-to-t from-black/60 to-transparent",
}) => {
  return (
    <div className={`relative bg-black text-white rounded-lg overflow-hidden ${className}`}>
      <img
        src={image}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain ${imgClassName || ""}`}
      />
      <div className={`absolute inset-0 ${gradientClass}`} />
      <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-2">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-xs md:text-sm text-text max-w-xs">{description}</p>
        <button className="text-xs md:text-sm font-semibold underline underline-offset-4">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NewArrivalProducts;