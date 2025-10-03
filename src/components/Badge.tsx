import clsx from "clsx";
import React from "react";

type Props = {
  variant: "discount" | "new";
  value: string;
  className?: string;
};

const Badge: React.FC<Props> = ({ variant, value, className }) => {
  const baseStyles =
    "absolute top-3 left-3 w-14 h-6.5 flex items-center justify-center text-white text-xs rounded";
  const variantStyles = {
    discount: "bg-secondary-2 ",
    new: "bg-green-500",
  };
  return (
    <div className={clsx(baseStyles, variantStyles[variant], className)}>
      {value}
    </div>
  );
};

export default Badge;
