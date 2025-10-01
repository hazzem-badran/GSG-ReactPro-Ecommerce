import type React from "react";
import type { UIProps } from "../../types/common";
import clsx from "clsx";

const Container: React.FC<UIProps> = ({ children, className }) => {
  return (
    <div className={clsx("w-4/5 my-0 mx-auto", className)}>{children}</div>
  );
};

export default Container;
