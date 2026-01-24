import { Clock, Flame } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { BookmarkRecipe } from "./BookmarkRecipe";
import { Link } from "react-router-dom";

export interface RecipeCardProps {
  recipe: {
    id: string;
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    prepTimeMinutes: number;
    caloriesPerServing: number;
    tags: string[];
    length: number;
  }
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {

  const recipeSlug = (recipe.name).split(" ").join("-");
  // console.log(recipeSlug);

  return (
    <div className=" min-w-70 group space-y-4">
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
        {/* <button title="Bookmark" className="size-10 absolute z-10 right-3 top-3 rounded-full bg-white/50 dark:bg-[#191b1f]/50 backdrop-blur-md flex items-center justify-center text-white hover:text-[#eecd2b] cursor-pointer transition-all">

        </button> */}

        <div className="absolute z-10 right-3 top-3">
          <BookmarkRecipe recipe={{
            id: recipe.id,
            title: recipe.name,
            image: recipe.image
          }} />
        </div>

        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase text-[#eecd2b]">
            {recipe.cuisine}
          </span>
          <div className="flex items-center gap-1 text-sm font-medium">
            {/* <Star className="text-yellow-500 text-sm!" /> */}
            <FaStar className="text-yellow-500" />
            {recipe.rating}
          </div>
        </div>

        <h4 className="font-display text-xl cursor-pointer font-bold transition-all group-hover:text-[#eecd2b]">
          <Link to={`/recipe/${recipeSlug}`}>
            {recipe.name}
          </Link>
        </h4>

        {/* Tags */}
        <div>
          {recipe.tags.map((tag) => (
            <span key={recipe.id + tag}
              className="text-xs bg-muted backdrop-blur-3xl border rounded-full px-2 py-1 mr-2 inline-block mb-2 text-accent-foreground border-neutral-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-1">
            <Clock />
            {recipe.prepTimeMinutes}m
          </div>
          <div className="flex items-center gap-1">
            <Flame />
            {recipe.caloriesPerServing} kcal
          </div>
        </div>
      </div>
    </div>



  );
};

export default RecipeCard;
