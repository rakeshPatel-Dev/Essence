import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react"
import { useContext, useState, useRef } from "react"
import RecipeCard from "../components/RecipeCard"
import { RecipeDataContext } from "../context/RecipeDataProvider"

import { SelectCuisine } from "@/components/recipeSelection/SelectCuisine"
import { SelectMealType } from "@/components/recipeSelection/SelectMealType"
import SelectDifficulty from "@/components/recipeSelection/SelectDifficulty"
import SelectCookingTime from "@/components/recipeSelection/SelectCookingTime"
import { SelectCalories } from "@/components/recipeSelection/SelectCalories"
import { RecipeSort } from "@/components/recipeSelection/RecipeSort"
// import { RecipePagination } from "@/components/recipeSelection/Pagination"

const Recipes = () => {
  const context = useContext(RecipeDataContext)
  const [openFilters, setOpenFilters] = useState(false)
  const scrollContainerRef = useRef(null)
  const [loadMore, setLoadMore] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  // Data fetching
  if (!context) {
    throw new Error("Recipes must be wrapped in RecipeDataProvider")
  }
  const { recipeData, loading, error } = context

  // Error and loading state
  if (loading) return <p className="text-center mt-20">Loading recipes...</p>
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>

  const filteredRecipe = recipeData.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery.toLowerCase())) ||
    r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Load more button
  const handleLoadMore = () => {
    setLoadMore(prev => prev + 6);
  }

  // Displaying Count number
  const displayCount = Math.min(loadMore, filteredRecipe.length);

  return (
    <div className="flex flex-col bg-[#f4f2f1] dark:bg-[#191b1f] text-slate-900 dark:text-slate-100">
      {/* ================= FIXED HEADER ================= */}
      <header className="shrink-0 bg-[#f4f2f1] dark:bg-[#191b1f] border-b border-black/5 dark:border-white/10 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              All Recipes
            </h2>
            <p className="text-lg text-neutral-600 p-4 mb-2 max-w-2xl text-center">Browse our extensive recipe collection! Find inspiration for any meal, skill level, or craving – start cooking today!</p>

            <div className="w-full max-w-2xl relative">
              <div className="absolute inset-y-0 left-5 flex items-center text-gray-400">
                <Search />
              </div>
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                }}
                type="text"
                placeholder="Search by recipe name, ingredient, or keyword..."
                className="w-full h-14 bg-white dark:bg-[#2C2F33] rounded-full pl-14 pr-6 text-lg focus:ring-2 focus:ring-[#2c6e72] shadow outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 min-h-0 flex">
        <div className="max-w-7xl mx-auto w-full flex gap-6 px-6">
          {/* ================= FIXED SIDEBAR ================= */}
          <aside className="hidden  lg:block shrink-0 w-72">
            <div className="sticky no-scrollbar top-6 p-6 border-r border-black/5 dark:border-white/10 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="font-display text-xl font-bold mb-8">Filters</h3>

              <div className="space-y-8 pb-6">
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

          {/* ================= MOBILE SIDEBAR ================= */}
          <aside
            className={`
              lg:hidden no-scrollbar fixed top-0 bottom-0 left-0 z-50 w-72
              bg-[#f4f2f1] dark:bg-[#191b1f]
              transform transition-transform duration-300
              ${openFilters ? "translate-x-0" : "-translate-x-full"}
              overflow-y-auto
              border-r border-black/5 dark:border-white/10
            `}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#f4f2f1] dark:bg-[#191b1f] pb-4 z-10">
                <h3 className="font-display text-xl font-bold">Filters</h3>
                <button
                  className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setOpenFilters(false)}
                  aria-label="Close filters"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-8 pb-6">
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

          {/* ================= RECIPE CONTENT AREA ================= */}
          <section className="flex-1 min-w-0 flex flex-col">
            {/* FIXED CONTROLS BAR */}
            <div className="shrink-0 flex items-center justify-between py-4 border-b border-black/5 dark:border-white/10 bg-[#f4f2f1] dark:bg-[#191b1f] z-20">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {/* {filteredRecipe.length} {loadMore} */} {displayCount}
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

            {/* SCROLLABLE RECIPE GRID */}
            <div
              ref={scrollContainerRef}
              className="flex-1 min-h-0 overflow-y-auto py-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredRecipe.slice(0, loadMore).map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>

              {/* PAGINATION AT BOTTOM OF SCROLL */}
              <div className="mt-12 flex flex-col items-center pb-6">
                <button
                  onClick={handleLoadMore}
                  className="px-12 py-4 cursor-pointer hover:scale-105 active:scale-95 bg-[#2c6e72] text-white rounded-full font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-3">
                  Discover More Recipes
                  <ChevronDown />
                </button>

                {/* <div className="mt-8">
                  <RecipePagination />
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ================= MOBILE FILTER BUTTON ================= */}
      <button
        onClick={() => setOpenFilters(!openFilters)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#2c6e72] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 font-bold hover:opacity-90 transition-opacity"
      >
        <SlidersHorizontal size={18} />
        Filters
      </button>

      {/* MOBILE OVERLAY */}
      {openFilters && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpenFilters(false)}
        />
      )}
    </div>
  )
}

export default Recipes