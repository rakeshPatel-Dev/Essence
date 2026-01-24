import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";


type Difficulty = "all" | "Easy" | "Medium";

const SelectDifficulty = ({
  value,
  onChange,
}: {
  value: Difficulty;
  onChange: (value: Difficulty) => void;
}) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={(v) => onChange(v as Difficulty)}
      className="flex gap-2"
    >
      {["all", "Easy", "Medium"].map((level) => (
        <label
          key={level}
          className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition
          ${value === level
              ? "border-[#eecd2b] bg-[#eecd2b]/10 text-[#eecd2b]"
              : "border-gray-300 hover:border-[#eecd2b]"
            }`}
        >
          <RadioGroupItem value={level} className="hidden" />
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </label>
      ))}
    </RadioGroup>
  );
};

export default SelectDifficulty
