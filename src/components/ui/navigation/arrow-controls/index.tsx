import Button from "../../buttons/Button";
import ArrowLeft from "@/assets/icons/arrow-left.png";
import ArrowRight from "@/assets/icons/arrow-right.png";

const ArrowControls = () => {
  return (
    <div className="flex gap-2">
      <Button variant="secondary" size="icon">
        <img src={ArrowLeft} alt="ArrowLeft" className="w-6 h-6" />
      </Button>
      <Button variant="secondary" size="icon">
        <img src={ArrowRight} alt="ArrowRight" className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ArrowControls;
