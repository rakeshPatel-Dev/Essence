import { useMemo, useState } from "react";
import type { RecipeCardProps } from "../components/RecipeCard";

const PAGE_SIZE = 9;

export function useRecipes(recipes: RecipeCardProps[]) {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return recipes.filter(r =>
      r.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [recipes, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = filtered.slice(
    0,
    page * PAGE_SIZE
  );

  return {
    recipes: paginated,
    total: filtered.length,
    page,
    totalPages,
    setPage,
    setQuery,
  };
}
