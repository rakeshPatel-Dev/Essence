import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const SelectCookingTime = () => {

  const [timeRange, setTimeRange] = useState<[number, number]>([5, 15]);

  return (
    <div>
      <div className="px-1">
        <Slider
          min={0}
          max={55}
          step={5}
          value={timeRange}
          onValueChange={(value) =>
            setTimeRange(value as [number, number])
          }
          className="
        **:[[role=slider]]:border-[#eecd2b]
        **:[[role=slider]]:bg-[#eecd2b]
        **:[[role=slider]]:ring-[#eecd2b]
        [&_.bg-primary]:bg-[#eecd2b]
      "
        />
      </div>

      <div className="mt-3 flex justify-between text-xs font-semibold text-gray-500">
        <span>{timeRange[0]} min</span>
        <span>{timeRange[1]} min</span>
      </div>
    </div>
  )
}

export default SelectCookingTime
