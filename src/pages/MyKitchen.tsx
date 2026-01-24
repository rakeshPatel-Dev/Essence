import {
  Clock,
  CookingPot,
  Plus,
  Search,
  SlidersHorizontal,
  Soup,
  UtensilsCrossed,
} from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useBookmarks } from "@/context/BookmarkContext";
import { useContext, useMemo, useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { RecipeDataContext } from "@/context/RecipeDataProvider";
import { Link } from "react-router-dom";

const PAGE_SIZE = 6;

const MyKitchen = () => {
  const { user } = useAuth();
  const { bookmarks } = useBookmarks();
  const context = useContext(RecipeDataContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"new" | "old">("new");

  if (!context) throw new Error("MyKitchen must be wrapped in RecipeDataProvider");

  const { recipeData, loading } = context;

  // 🔹 Map bookmarks to full recipes with bookmarkedAt
  const savedRecipes = useMemo(() => {
    if (!recipeData?.length || !bookmarks?.length) return [];

    const recipeMap = recipeData.reduce((acc, r) => {
      acc[r.id] = r;
      return acc;
    }, {} as Record<string, any>);

    const mapped = bookmarks
      .map((b) => {
        const recipe = recipeMap[b.recipeId];
        if (!recipe) return null; // recipe deleted
        return { ...recipe, bookmarkedAt: b.createdAt };
      })
      .filter(Boolean);

    // Sort by bookmark timestamp
    mapped.sort((a, b) =>
      sortOrder === "new"
        ? b.bookmarkedAt.seconds - a.bookmarkedAt.seconds
        : a.bookmarkedAt.seconds - b.bookmarkedAt.seconds
    );

    return mapped;
  }, [recipeData, bookmarks, sortOrder]);

  // 🔹 Search filter
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredRecipes = useMemo(() => {
    if (!normalizedQuery) return savedRecipes;
    return savedRecipes.filter((r) => {
      const nameMatch = r.name?.toLowerCase().includes(normalizedQuery);
      const ingredientMatch = Array.isArray(r.ingredients)
        ? r.ingredients.some((i) => i.toLowerCase().includes(normalizedQuery))
        : false;
      const tagMatch = Array.isArray(r.tags)
        ? r.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
        : false;
      return nameMatch || ingredientMatch || tagMatch;
    });
  }, [savedRecipes, normalizedQuery]);

  // 🔹 Pagination
  const paginatedRecipes = useMemo(() => filteredRecipes.slice(0, page * PAGE_SIZE), [
    filteredRecipes,
    page,
  ]);

  // 🔹 Stats
  const totalCookTime = savedRecipes.reduce((sum, r) => sum + (r.cookTimeMinutes || 0), 0);
  const totalServings = savedRecipes.reduce((sum, r) => sum + (r.servings || 0), 0);

  if (!user) return null;

  return (
    <div className="bg-[#f4f2f1] dark:bg-[#191b1f] min-h-screen">
      <main className="max-w-7xl mx-auto pt-10 px-4 pb-5">

        {/* HEADER */}
        <div className="flex items-center flex-col md:flex-row justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black">My Kitchen</h1>
            <p className="text-muted-foreground">All saved recipes with stats.</p>
          </div>
          <div className="w-full max-w-xl relative">
            <div className="absolute inset-y-0 left-5 flex items-center text-muted-foreground">
              <Search />
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search by recipe name, ingredient, or keyword..."
              className="w-full h-14 bg-white dark:bg-[#2C2F33] rounded-full pl-14 pr-6 text-base focus:ring-2 focus:ring-[#eecd2b] shadow outline-none"
            />
          </div>
        </div>

        {/* STATS */}
        <section className="flex flex-col gap-4 mb-12">
          <h3 className="text-2xl font-bold">Kitchen Stats</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <StatCard
              label="Saved Recipes"
              value={`${savedRecipes.length} recipes`}
              icon={<CookingPot />}
              desc="Collection of favorite recipes stored for easy access."
            />
            <StatCard
              label="Total Cook Time"
              value={`${totalCookTime} mins`}
              icon={<Clock />}
              desc="Total time needed to cook all saved recipes."
            />
            <StatCard
              label="Total Servings"
              value={`${totalServings} servings`}
              icon={<Soup />}
              desc="Total portions all recipes yield."
            />
          </div>
        </section>

        {/* SORT FILTER */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
          <div className="flex mb-4 items-center gap-2">
            <h3 className="text-2xl font-bold">Saved Recipes</h3>
            <p className="text-sm text-muted-foreground">(Showing {paginatedRecipes.length} of {savedRecipes.length} recipes)</p>
          </div>
          <div className="flex items-center justify-end gap-4">
            <SlidersHorizontal
              className="text-muted-foreground cursor-pointer"
              onClick={() => setSortOrder(sortOrder === "new" ? "old" : "new")}
            />
            <span className="text-sm text-muted-foreground">{sortOrder.toUpperCase()}</span>
            <Link to="/all-recipes">
              <Button className="cursor-pointer flex items-center gap-1">
                <Plus /> Add More
              </Button>
            </Link>
          </div>
        </div>

        {/* EMPTY STATE */}
        {!loading && savedRecipes.length === 0 && (
          <div className="py-20">
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <UtensilsCrossed className="text-[#eecd2b]" />
                </EmptyMedia>
                <EmptyTitle>No saved recipes</EmptyTitle>
                <EmptyDescription>
                  Start bookmarking recipes to build your kitchen.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Link to="/all-recipes">
                  <Button>Explore Recipes</Button>
                </Link>
              </EmptyContent>
            </Empty>
          </div>
        )}

        {/* RECIPES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* LOAD MORE */}
        {paginatedRecipes.length < filteredRecipes.length && (
          <div className="flex justify-center mt-12">
            <Button onClick={() => setPage((p) => p + 1)}>Load more</Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyKitchen;

/* ---------------- HELPERS ---------------- */
export interface CardStatsProps {
  label: string;
  value: string;
  icon: any;
  desc: string;
}

export const StatCard = ({ label, value, icon, desc }: CardStatsProps) => (
  <div className="p-4 sm:p-6 rounded-xl border">
    <div className="flex justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
        {icon}
      </div>
      <span className="text-xs bg-accent rounded max-h-8 text-muted-foreground px-2 py-2 font-bold">{value}</span>
    </div>
    <h3 className="font-bold text-lg">{label}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);
