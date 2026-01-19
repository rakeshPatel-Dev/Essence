import RecipeCard from "./RecipeCard";
import type { RecipeCardProps } from "./RecipeCard";

const RecipeGrid = ({ recipes }: { recipes: RecipeCardProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
