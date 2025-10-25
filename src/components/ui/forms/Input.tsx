import clsx from "clsx";
import React, { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  variant?: "default" | "underline" | "disabled";
  className?: string;
};

const Input: React.FC<Props> = ({
  type,
  variant = "default",
  className,
  ...props
}) => {
  const baseStyles =

  "w-full font-poppins outline-none text-black placeholder:text-text-1 text-base";

  const variantStyles = {
    default:
      "h-12 px-4 py-3 rounded-md border border-gray-300 bg-white focus:border-black",
    underline:
      "h-12 py-3 px-0 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-black",
    disabled:
      "opacity-50 cursor-not-allowed pointer-events-none",
  };

  return (
    <input
      type={type}
      data-slot="input"
      className={clsx(
        baseStyles,
        variantStyles[variant],
        "selection:bg-btn-1 selection:text-black",
        className
      )}
      {...props}
    />
  );
};

export default Input;
