import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { RecipeDataContext } from "@/context/RecipeDataProvider";
import { useContext } from "react";



export function SelectMealType() {
  const context = useContext(RecipeDataContext);

  if (!context) {
    throw new Error("Home must be wrapped in RecipeDataProvider");
  }
  const { recipeData } = context;

  const MealTypes = [...new Set(recipeData.flatMap(item => item.mealType))];

  return (
    <RadioGroup defaultValue="All">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="all" id="all" />
        <Label htmlFor="all">All</Label>
      </div>
      {MealTypes.map((item, idx) => (
        <div key={idx + item} className="flex items-center gap-3">
          <RadioGroupItem value={item} id={`mealType-${idx}`} />
          <Label htmlFor={`mealType-${idx}`}>{item}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
