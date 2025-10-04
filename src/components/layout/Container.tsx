import type React from "react";
import type { UIProps } from "../../types/common";
import clsx from "clsx";

const Container: React.FC<UIProps> = ({ children, className }) => {
  return (
    <div className={clsx("w-[95%] md:w-[85%] lg:w-[80%] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
