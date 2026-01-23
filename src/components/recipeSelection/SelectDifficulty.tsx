import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import { useState } from "react";

const SelectDifficulty = () => {

  const [difficulty, setDifficulty] = useState<"all" | "easy" | "medium">("all");


  return (
    <div>
      <RadioGroup
        value={difficulty}
        onValueChange={(value) =>
          setDifficulty(value as "all" | "easy" | "medium")
        }
        className="flex gap-2"
      >
        {["all", "easy", "medium"].map((level) => (
          <label
            key={level}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition
          ${difficulty === level
                ? "border-[#eecd2b] bg-[#eecd2b]/10 text-[#eecd2b]"
                : "border-gray-300 hover:border-[#eecd2b]"
              }`}
          >
            <RadioGroupItem value={level} className="hidden" />
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </label>
        ))}
      </RadioGroup>
    </div>

  )
}

export default SelectDifficulty
