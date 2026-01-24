import { Slider } from "@/components/ui/slider";

type Props = {
  value: number;
  onChange: (value: number) => void;
  max?: number;
};

const SelectCookingTime = ({
  value,
  onChange,
  max = 180,
}: Props) => {
  return (
    <div>
      <div className="px-1">
        <Slider
          min={0}
          max={max}
          step={5}
          value={[value]}
          onValueChange={(v) => onChange(v[0])}
          className="
            **:[[role=slider]]:border-[#eecd2b]
            **:[[role=slider]]:bg-[#eecd2b]
            **:[[role=slider]]:ring-[#eecd2b]
            [&_.bg-primary]:bg-[#eecd2b]
          "
        />
      </div>

      <div className="mt-3 text-xs font-semibold text-gray-500">
        Up to <span className="text-gray-900 dark:text-white">{value}</span> min
      </div>
    </div>
  );
};

export default SelectCookingTime;
