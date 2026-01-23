import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Flame
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { RecipeCardProps } from "../RecipeCard";
import { FaStar } from "react-icons/fa";
import { BookmarkRecipe } from "../BookmarkRecipe";
import { Link } from "react-router-dom";

interface HeroProps {
  recipes: RecipeCardProps["recipe"][];
}

const AUTO_SLIDE_MS = 10000;
const POPULAR_THRESHOLD = 70;

const Hero = ({ recipes }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  /** ✅ Popular recipes (single source of truth) */
  const popularRecipes = useMemo(
    () => recipes.filter(r => r.reviewCount >= POPULAR_THRESHOLD),
    [recipes]
  );

  const hasRecipes = popularRecipes.length > 0;
  const recipe = hasRecipes ? popularRecipes[index] : null;

  const recipeSlug = (recipe?.name)?.split(" ").join("-");

  /** ✅ Reset index if list shrinks */
  useEffect(() => {
    if (index >= popularRecipes.length) {
      setIndex(0);
    }
  }, [popularRecipes.length, index]);

  /** ✅ Auto slide */
  useEffect(() => {
    if (!hasRecipes || paused) return;

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % popularRecipes.length);
    }, AUTO_SLIDE_MS);

    return () => clearInterval(timer);
  }, [paused, hasRecipes, popularRecipes.length]);

  if (!recipe) return null;

  return (
    <section
      className="relative overflow-hidden rounded-2xl h-130 md:h-150 flex items-end"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `
            linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.3)),
            url(${recipe.image})
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 max-w-2xl text-white">
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[#A88E6A]/15 border border-[#A88E6A]/30">
          <BadgeCheck size={16} /> Chef's Choice
        </span>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
          {recipe.name}
        </h1>

        <p className="text-neutral-300 mb-4">
          {recipe.ingredients.length} ingredients •{" "}
          {recipe.instructions.length} steps • Best for {recipe.mealType}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold mb-8">
          <span>{recipe.cuisine}</span>

          <span className="inline-flex items-center gap-1">
            <Clock size={16} /> {recipe.prepTimeMinutes} mins
          </span>

          <span className="inline-flex items-center gap-1">
            <Flame size={16} /> {recipe.caloriesPerServing} cal
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* View recipe */}
          <Link to={`/recipe/${recipeSlug}`}>
            <button className="bg-[#eecd2b] cursor-pointer active:scale-95  hover:bg-[#245c5f] px-8 h-12 rounded-xl font-bold flex items-center gap-2 transition-all">
              View Recipe <ArrowRight />
            </button>
          </Link>
          {/* Bookmark recipe */}
          <BookmarkRecipe recipe={{
            id: recipe.id,
            title: recipe.name,
            image: recipe.image
          }} text="Save the Choice" />
        </div>
      </div>

      {/* Rating Badge */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-2 rounded-xl text-sm font-semibold text-white">
        <FaStar className="text-yellow-400" />
        {recipe.rating} · {recipe.reviewCount} likes
      </div>

      {/* Dots */}
      <div className="absolute hidden sm:flex bottom-6 left-1/2 -translate-x-1/2 gap-2 z-10">
        {popularRecipes.map((_, i) => (
          <button
            title="dots"
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
