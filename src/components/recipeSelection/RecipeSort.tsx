import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function RecipeSort({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select sorting" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="rating-desc">Rating: High → Low</SelectItem>
        <SelectItem value="rating-asc">Rating: Low → High</SelectItem>

        <SelectItem value="prep-asc">Prep Time: Fast → Slow</SelectItem>
        <SelectItem value="prep-desc">Prep Time: Slow → Fast</SelectItem>

        <SelectItem value="ingredients-desc">
          Ingredients: More → Less
        </SelectItem>
        <SelectItem value="ingredients-asc">
          Ingredients: Less → More
        </SelectItem>

        <SelectItem value="instructions-desc">
          Instructions: More → Less
        </SelectItem>
        <SelectItem value="instructions-asc">
          Instructions: Less → More
        </SelectItem>

        <SelectItem value="people-desc">Most Rated</SelectItem>
        <SelectItem value="people-asc">Least Rated</SelectItem>
      </SelectContent>
    </Select>
  );
}
