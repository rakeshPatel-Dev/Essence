import { RecipeDataContext } from "@/context/RecipeDataProvider";
import {
  CheckCheck,
  Clock,
  CookingPot,
  Flame,
  Gauge,
  Users
} from "lucide-react";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { GiCampCookingPot } from "react-icons/gi";
import { BookmarkRecipe } from "@/components/BookmarkRecipe";
import { ShareButton } from "@/components/ActionBtns/ShareBtn";
import { PrintButton } from "@/components/ActionBtns/PrintBtn";

export interface Recipe {
  id: string;
  slug: string;

  // Core content
  name: string;
  image: string;

  // Classification
  tags: string[];
  cuisine: string;
  mealType: string[];
  difficulty: string;

  // Nutrition & rating
  caloriesPerServing: number;
  rating: number;        // 0 – 5
  reviewCount: number;

  // Time & serving
  prepTimeMinutes: number;      // minutes
  cookTimeMinutes: number;      // minutes
  servings: number;

  // Content
  ingredients: string[];
  instructions: string[];

  // Optional UX / meta
  isFeatured?: boolean;
  createdAt?: string;    // ISO date
  updatedAt?: string;    // ISO date
}


const RecipeDetails = () => {
  const { recipeSlug } = useParams();
  const context = useContext(RecipeDataContext);

  if (!context) {
    throw new Error("RecipeDetails must be wrapped in RecipeDataProvider");
  }

  const { recipeData, loading, error } = context;

  if (loading) {
    return <p className="text-center mt-20">Loading recipe...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  const recipe: Recipe = recipeData.find((r) => (r.name).split(" ").join("-") === recipeSlug);

  if (!recipe) {
    return (
      <p className="text-center mt-20 text-lg font-semibold">
        Recipe not found
      </p>
    );
  }

  return (
    <div className="bg-[#f4f2f1] dark:bg-[#191b1f] text-slate-900 dark:text-slate-100">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full aspect-4/3 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* TITLE + TAGS */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                {recipe.name}
              </h1>

              {recipe.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#2c6e72]/10 text-[#2c6e72] text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* RATING + META */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-[#e6e1df] dark:border-[#2d2422]">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-600" />
                <span className="text-2xl font-black text-[#2c6e72]">
                  {recipe.rating?.toFixed(1) || "0.0"}
                </span>
                <span className="text-sm text-[#86675f]">
                  ({recipe.reviewCount || 0} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#2c6e72]/10 text-xs font-bold">
                  <Gauge size={16} /> {recipe.difficulty}
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#f0ebea] dark:bg-[#2d2422] text-xs font-bold">
                  <CookingPot size={16} /> {recipe.cuisine}
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#f0ebea] dark:bg-[#2d2422] text-xs font-bold">
                  <Flame size={16} /> {recipe.caloriesPerServing} kcal
                </span>
              </div>
            </div>

            {/* Meal types */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-[#e6e1df] dark:border-[#2d2422]">
              <div className="flex items-center gap-2">
                <span className=" pr-4 font-bold text-[#86675f]">
                  Best for:
                </span>
                {recipe.mealType.map((type) => (
                  <span className="font-mono border-l px-2 bg-muted text-muted-foreground">{type}</span>
                ))}
              </div>
            </div>

            {/* QUICK INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoCard icon={<Clock />} label="Prep Time" value={`${recipe.prepTimeMinutes} min`} />
              <InfoCard icon={<GiCampCookingPot />} label="Cook Time" value={`${recipe.cookTimeMinutes} min`} />
              <InfoCard icon={<Users />} label="Servings" value={`${recipe.servings}`} />
            </div>

            {/* INSTRUCTIONS */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-black">Instructions</h3>

              {recipe.instructions?.length > 0 ? (
                recipe.instructions.map((step, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <span className="size-10 flex items-center justify-center rounded-full bg-[#2c6e72] text-white font-black">
                      {i + 1}
                    </span>
                    <p className="text-lg leading-relaxed">{step}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No instructions provided.</p>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="lg:sticky lg:top-24 flex flex-col gap-8">

              {/* ACTIONS */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#1d1615] shadow-xl">
                <BookmarkRecipe text="Save this Recipe" />

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <PrintButton />
                  <ShareButton title={recipe.name} />
                </div>

              </div>

              {/* INGREDIENTS */}
              <div className="p-6 rounded-xl bg-white dark:bg-[#1d1615] shadow-xl">
                <h3 className="text-2xl font-black mb-6">Ingredients</h3>

                {recipe.ingredients?.length > 0 ? (
                  <ul className="flex flex-col gap-4">
                    {recipe.ingredients.map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <CheckCheck />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">No ingredients listed.</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default RecipeDetails;

/* ------------------ HELPERS ------------------ */
interface InfoCardProps {
  icon: string;
  label: string;
  value: string
}

const InfoCard = ({ icon, label, value }: InfoCardProps) => (
  <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#f4f2f1] dark:bg-[#2d2422] border">
    <div className="text-[#2c6e72] mb-1">{icon}</div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-[#86675f]">
      {label}
    </span>
    <span className="text-lg font-bold">{value}</span>
  </div>
);

