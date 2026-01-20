import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function SelectCalories() {
  const [range, setRange] = useState<[number, number]>([200, 400])

  return (
    <div className="space-y-4">


      <Slider
        defaultValue={range}
        min={120}
        max={550}
        step={10}
        onValueChange={(value) => setRange(value as [number, number])
        }
        className="
        **:[[role=slider]]:border-[#2c6e72]
        **:[[role=slider]]:bg-[#2c6e72]
        **:[[role=slider]]:ring-[#2c6e72]
        [&_.bg-primary]:bg-[#2c6e72]
      "
      />
      <div className="mt-3 flex justify-between text-xs font-semibold text-gray-500">
        <span>{range[0]} calories</span>
        <span>{range[1]} calories</span>
      </div>
    </div>
  )
}
