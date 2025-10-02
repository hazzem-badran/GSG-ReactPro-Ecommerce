import type React from "react";
import { H2 } from "../ui/typography";
import ArrowControls from "../ui/navigation/arrow-controls";

type Props = {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
};

const HeadingSection: React.FC<Props> = ({ title, subTitle, children }) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded" />
        <span className="text-secondary2 font-semibold">{title}</span>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex items-end gap-16">
          <H2 className="font-bold">{subTitle}</H2>
          {children}
        </div>

        <ArrowControls />
      </div>
    </>
  );
};

export default HeadingSection;