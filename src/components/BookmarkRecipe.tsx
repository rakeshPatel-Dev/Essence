import { toast } from "sonner";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

import { useBookmarks } from "@/context/BookmarkContext";
import { bookmarkRecipe, removeBookmark } from "@/lib/bookmark";
import { useAuth } from "@/context/AuthContext";

interface BookmarkRecipeProps {
  recipe: {
    id: string;
    title: string;
    image: string;
  };
  text?: string;
}

export function BookmarkRecipe({ recipe, text }: BookmarkRecipeProps) {
  const { user } = useAuth();
  const { bookmarkedIds } = useBookmarks();
  const recipeIdString = String(recipe.id)
  const isBookmarked = bookmarkedIds.has(recipeIdString);

  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    if (!user) {
      toast.error("Login to save recipes");
      return;
    }

    if (loading) return; // 🚫 block spam clicks

    try {
      setLoading(true);

      if (isBookmarked) {
        await removeBookmark(recipe.id);
        toast.warning("Removed from My Kitchen");
      } else {
        await bookmarkRecipe(recipe);
        toast.success("Added to My Kitchen!");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ToggleGroup type="single" value={isBookmarked ? "saved" : ""}>
      <ToggleGroupItem
        value="saved"
        aria-label="Toggle bookmark"
        onClick={handleToggle}
        disabled={loading}
        className={`
          flex items-center gap-2
          bg-neutral-600/50 backdrop-blur-xl
          transition-all
          ${isBookmarked
            ? "data-[state=on]:bg-green-600/20"
            : ""
          }
        `}
      >
        {isBookmarked ? (
          <BsBookmarkFill className="h-5 w-5 text-green-600" />
        ) : (
          <BsBookmark className="h-5 w-5" />
        )}

        <span className="text-sm">
          {isBookmarked ? "Bookmarked" : text}
        </span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
