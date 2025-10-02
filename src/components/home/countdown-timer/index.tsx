import { Caption } from "../../ui/typography";
import { useCountdownTimer } from "./useCountdownTimer";

const CountdownTimer = () => {
  const { timeLeft, units } = useCountdownTimer();

  return (
    <div className="hidden md:flex items-center gap-4">
      {units.map((unit, i) => (
        <div key={unit} className="flex items-center gap-4">
          <div className="text-center">
            <Caption className="mb-1">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </Caption>
            <div className="text-3xl font-bold">
              {String(timeLeft[unit]).padStart(2, "0")}
            </div>
          </div>
          {i < units.length - 1 && (
            <div className="text-3xl font-medium text-secondary-2">:</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;