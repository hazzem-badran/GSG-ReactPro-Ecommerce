import clsx from "clsx";
import React, { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: string;
  className?: string;
};

const Input: React.FC<Props> = ({ type, className, ...props }) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={clsx(
        // Base layout
        "w-full min-w-0 h-9 pl-1 py-1 rounded-md  font-poppins outline-none",

        // Colors from Tailwind config
        "bg-bg text-text border-secondary placeholder:text-text1 selection:bg-primary selection:text-btn1 dark:bg-secondary1",

        // Focus state
        // "focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px]",

        // Invalid state
        // "aria-invalid:border-destructive aria-invalid:ring-destructive/30",

        // Disabled state
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",

        className
      )}
      {...props}
    />
  );
};

export default Input;
