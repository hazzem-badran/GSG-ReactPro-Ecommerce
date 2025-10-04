import clsx from "clsx";
import { Caption } from "../../ui/typography";
import { useCountdownTimer } from "./useCountdownTimer";

type CountdownVariant = "default" | "circles";

interface CountdownTimerProps {
  variant?: CountdownVariant;
  className?: string;
}

const CountdownTimer = ({
  variant = "default",
  className,
}: CountdownTimerProps) => {
  const { timeLeft, units } = useCountdownTimer();

  if (variant === "circles") {
    return (
      <div
        className={clsx(
          "flex flex-wrap gap-4 justify-center md:justify-start",
          className
        )}
      >
        {units.map((unit) => (
          <div
            key={unit}
            className="bg-white text-primary rounded-full h-16 w-16 flex flex-col items-center justify-center shadow-md"
          >
            <div className="text-xs font-semibold">
              {String(timeLeft[unit]).padStart(2, "0")}
            </div>
            <div className="text-[10px]">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={clsx("hidden md:flex items-center gap-4", className)}>
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