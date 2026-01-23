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
        **:[[role=slider]]:border-[#eecd2b]
        **:[[role=slider]]:bg-[#eecd2b]
        **:[[role=slider]]:ring-[#eecd2b]
        [&_.bg-primary]:bg-[#eecd2b]
      "
      />
      <div className="mt-3 flex justify-between text-xs font-semibold text-gray-500">
        <span>{range[0]} calories</span>
        <span>{range[1]} calories</span>
      </div>
    </div>
  )
}
