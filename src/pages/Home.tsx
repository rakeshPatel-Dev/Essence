import Hero from "../components/sections/Hero"
import "../index.css"
import { ArrowLeft, ArrowRight } from
  'lucide-react'
import { useContext, useRef } from "react";
import "../index.css";
import { RecipeDataContext } from "../context/RecipeDataProvider";
import RecipeCard from "../components/RecipeCard";
import CTA from "../components/sections/CTA";
import { Link } from "react-router-dom";



const Home = () => {

  const context = useContext(RecipeDataContext);

  if (!context) {
    throw new Error("Home must be wrapped in RecipeDataProvider");
  }

  const { recipeData, loading, error } = context;

  const easyRecipes = recipeData.filter((recipe) => recipe.difficulty === "Medium");

  const lowCaloryRecipes = recipeData.filter((recipe) => recipe.caloriesPerServing <= 300);

  // console.log(recipeData.filter((recipe) => recipe.caloriesPerServing >= 400));

  // const uniqueAges = [...new Set(recipeData.map(item => item.caloriesPerServing).sort())];

  // console.log(uniqueAges);

  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  if (loading) return <p className="text-center mt-20">Loading recipes...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="bg-[#f4f2f1] dark:bg-[#191b1f] font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="relative flex flex-col">
        <main className="mx-auto w-full max-w-7xl px-6 lg:px-12 py-8 space-y-20">
          {/* Hero Section: Recipe of the Day */}
          <Hero recipes={recipeData} />
          {/* Quick Filter Categories */}

          {/* Popular Recipes Carousel */}
          <section className="space-y-8">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-display text-3xl font-bold tracking-tight">
                Popular This Week
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollLeft(scrollRef1)}
                  title='Prev' className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#2C2F33] hover:bg-[#eecd2b] cursor-pointer active:scale-95 hover:scale-105 hover:text-white transition-all">
                  <ArrowLeft />
                </button>
                <button
                  onClick={() => scrollRight(scrollRef1)}
                  title='Next' className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#2C2F33] hover:bg-[#eecd2b] cursor-pointer active:scale-95 hover:scale-105 hover:text-white transition-all">
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div
              ref={scrollRef1}
              className="flex gap-8 overflow-x-auto no-scrollbar pb-6 px-2">
              {recipeData.slice(0, 10).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          {/* Easy to cooking */}
          <section className="space-y-8">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-display text-3xl font-bold tracking-tight">
                Easy to make Recipes
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollLeft(scrollRef2)}
                  title='Prev' className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#2C2F33] hover:bg-[#eecd2b] cursor-pointer active:scale-95 hover:scale-105 hover:text-white transition-all">
                  <ArrowLeft />
                </button>
                <button
                  onClick={() => scrollRight(scrollRef2)}
                  title='Next' className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#2C2F33] hover:bg-[#eecd2b] cursor-pointer active:scale-95 hover:scale-105 hover:text-white transition-all">
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div
              ref={scrollRef2}
              className="flex gap-8 overflow-x-auto no-scrollbar pb-6 px-2">
              {easyRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          {/* Low Calories */}
          <section className="space-y-8">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-display text-3xl font-bold tracking-tight">
                Recipes with low Calories
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollLeft(scrollRef3)}
                  title='Prev' className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#2C2F33] hover:bg-[#eecd2b] cursor-pointer active:scale-95 hover:scale-105 hover:text-white transition-all">
                  <ArrowLeft />
                </button>
                <button
                  onClick={() => scrollRight(scrollRef3)}
                  title='Next' className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-[#2C2F33] hover:bg-[#eecd2b] cursor-pointer active:scale-95 hover:scale-105 hover:text-white transition-all">
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div
              ref={scrollRef3}
              className="flex gap-8 overflow-x-auto no-scrollbar px-2">
              {lowCaloryRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          <div className=" max-w-3xl mx-auto p-2 text-center space-y-6">
            <h3 className="font-bold text-4xl">Want to cook more!</h3>
            <p className=" text-neutral-600 text-lg">Discover a wider range of culinary inspiration with our extensive recipe catalog – explore and start your cooking journey today!</p>
            <Link to="/all-recipes">
              <button className=" bg-[#eecd2b] text-white px-8 py-4 rounded-full font-bold hover:bg-[#eecd2b]/90 transition-all hover:scale-105 active:scale-95 cursor-pointer duration-150">Explore all recipes</button>
            </Link>
          </div>

          {/* Newsletter / CTA Section */}
          <CTA />
        </main>
      </div>
    </div>

  )
}

export default Home
