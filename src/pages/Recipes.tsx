import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"
import { useContext, useState } from "react"
import RecipeCard from "../components/RecipeCard"
import { RecipeDataContext } from "../context/RecipeDataProvider"

import { SelectCuisine } from "@/components/recipeSelection/SelectCuisine"
import { SelectMealType } from "@/components/recipeSelection/SelectMealType"
import SelectDifficulty from "@/components/recipeSelection/SelectDifficulty"
import SelectCookingTime from "@/components/recipeSelection/SelectCookingTime"
import { SelectCalories } from "@/components/recipeSelection/SelectCalories"
import { RecipeSort } from "@/components/recipeSelection/RecipeSort"
import { RecipePagination } from "@/components/recipeSelection/Pagination"

const Recipes = () => {
  const context = useContext(RecipeDataContext)
  const [openFilters, setOpenFilters] = useState(false)

  if (!context) {
    throw new Error("Recipes must be wrapped in RecipeDataProvider")
  }

  const { recipeData, loading, error } = context

  if (loading) return <p className="text-center mt-20">Loading recipes...</p>
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>

  return (
    <div className=" bg-[#f4f2f1] dark:bg-[#191b1f] text-slate-900 dark:text-slate-100">
      {/* ================= HEADER (STICKY) ================= */}
      <header className="sticky top-0 z-40 bg-[#f4f2f1] dark:bg-[#191b1f] border-b border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              All Recipes
            </h2>

            <div className="w-full max-w-2xl relative">
              <div className="absolute inset-y-0 left-5 flex items-center text-gray-400">
                <Search />
              </div>
              <input
                type="text"
                placeholder="Search by recipe name, ingredient, or keyword..."
                className="w-full h-14 bg-white dark:bg-[#2C2F33] rounded-full pl-14 pr-6 text-lg focus:ring-2 focus:ring-[#2c6e72] shadow"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN LAYOUT ================= */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="flex h-full gap-10">
          {/* ================= SIDEBAR ================= */}
          <aside
            className={`
              fixed lg:sticky top-10 inset-y-0 left-0 z-50 w-72
              bg-[#f4f2f1] dark:bg-[#191b1f]
              transform transition-transform duration-300
              ${openFilters ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0
            `}
          >
            <div className=" sticky top-10 p-6 border-r border-black/5 dark:border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-xl font-bold">Filters</h3>
                <button
                  className="lg:hidden text-sm font-bold"
                  onClick={() => setOpenFilters(false)}
                >
                  Close
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Difficulty
                  </h4>
                  <SelectDifficulty />
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Cooking Time
                  </h4>
                  <SelectCookingTime />
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Calories <span className="lowercase">(per serving)</span>
                  </h4>
                  <SelectCalories />
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Cuisine
                  </h4>
                  <SelectCuisine />
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Meal Type
                  </h4>
                  <SelectMealType />
                </div>
              </div>
            </div>
          </aside>

          {/* ================= RECIPES SCROLL AREA ================= */}
          <section className="flex-1 h-full overflow-y-auto pr-2">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6 sticky top-0 z-10 bg-[#f4f2f1] dark:bg-[#191b1f] py-4">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {recipeData.length}
                </span>{" "}
                results
              </p>

              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Sort by:
                </span>
                <RecipeSort />
              </div>
            </div>

            {/* Grid */}
            <div className="grid overflow-y-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {recipeData.slice(0, 6).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex flex-col items-center">
              <button className="px-12 py-4 bg-[#2c6e72] text-white rounded-full font-bold shadow-lg hover:opacity-90 flex items-center gap-3">
                Discover More Recipes
                <ChevronDown />
              </button>

              <div className="mt-8">
                <RecipePagination />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ================= MOBILE FILTER BUTTON ================= */}
      <button
        onClick={() => openFilters ? setOpenFilters(false) : setOpenFilters(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#2c6e72] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 font-bold"
      >
        <SlidersHorizontal size={18} />
        Filters
      </button>
    </div>
  )
}

export default Recipes
