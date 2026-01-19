import { useContext, useMemo, useState } from "react";
import { Search, Heart, Star, ArrowUpRight } from "lucide-react";
import { RecipeDataContext } from "../context/RecipeDataProvider";

const PAGE_SIZE = 9;

const Recipes = () => {
  const { recipeData } = useContext(RecipeDataContext);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  /* ---------------- FILTER + SEARCH ---------------- */
  const filteredRecipes = useMemo(() => {
    return recipeData.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [recipeData, query]);

  /* ---------------- PAGINATION ---------------- */
  const totalResults = filteredRecipes.length;
  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  const visibleRecipes = filteredRecipes.slice(
    0,
    page * PAGE_SIZE
  );

  const canLoadMore = page < totalPages;

  /* ---------------- UI ---------------- */
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-12">
      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          All Recipes
        </h1>

        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search recipes..."
            className="w-full h-14 pl-14 pr-6 rounded-full bg-white dark:bg-surface-dark shadow focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
      </div>

      {/* ---------- META ---------- */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {visibleRecipes.length}
          </span>{" "}
          of{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {totalResults}
          </span>{" "}
          recipes
        </p>
      </div>

      {/* ---------- GRID ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {visibleRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow hover:shadow-2xl transition-all"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <button className="absolute top-4 right-4 size-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white">
                <Heart size={18} />
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl leading-tight">
                  {recipe.name}
                </h3>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex items-center justify-between border-t">
              <div className="flex items-center gap-1 text-primary">
                <Star size={16} fill="currentColor" />
                <span className="font-bold text-sm">
                  {recipe.rating}
                </span>
              </div>

              <ArrowUpRight className="text-gray-400 group-hover:text-primary transition" />
            </div>
          </div>
        ))}
      </div>

      {/* ---------- LOAD MORE ---------- */}
      {canLoadMore && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-12 py-4 bg-primary text-white rounded-full font-bold shadow hover:shadow-xl transition"
          >
            Discover More Recipes
          </button>
        </div>
      )}

      {/* ---------- PAGINATION ---------- */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`size-10 rounded-full font-bold transition ${page === i + 1
                  ? "bg-primary text-white"
                  : "border hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </main>
  );
};

export default Recipes;
