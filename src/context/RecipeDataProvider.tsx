import axios from "axios";
import { createContext, useEffect, useState } from "react";
import type { RecipeCardProps } from "../components/RecipeCard";

interface RecipeDataContextType {
  recipeData: RecipeCardProps[];
  loading: boolean;
  error: string | null;
}

export const RecipeDataContext =
  createContext<RecipeDataContextType | null>(null);

const RecipeDataProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState<RecipeCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const url = "https://dummyjson.com/recipes";

  const fetchRecipeData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(url);
      setRecipeData(res.data.recipes);
    } catch (err) {
      setError("Failed to fetch recipes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // auto fetch on mount
  useEffect(() => {
    fetchRecipeData();
  }, []);

  return (
    <RecipeDataContext.Provider
      value={{
        recipeData,
        loading,
        error,
      }}
    >
      {children}
    </RecipeDataContext.Provider>
  );
};

export default RecipeDataProvider;
