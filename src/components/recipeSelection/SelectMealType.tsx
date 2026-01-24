import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export function SelectMealType({ value, onChange, options }: Props) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="space-y-3"
    >
      {options.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <RadioGroupItem
            value={item}
            id={`mealType-${item}`}
          />
          <Label htmlFor={`mealType-${item}`}>
            {item === "all" ? "All" : item}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
