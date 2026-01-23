import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";

export const bookmarkRecipe = async (recipe: {
  id: string | number;
  title: string;
  image: string;
}) => {
  const user = auth.currentUser;
  if (!user) return;

  const recipeId = String(recipe.id); // 🔥 FIX

  await setDoc(
    doc(db, "users", user.uid, "bookmarks", recipeId),
    {
      recipeId,
      title: recipe.title,
      image: recipe.image,
      createdAt: new Date(),
    }
  );
};

export const removeBookmark = async (recipeId: string | number) => {
  const user = auth.currentUser;
  if (!user) return;

  await deleteDoc(
    doc(db, "users", user.uid, "bookmarks", String(recipeId))
  );
};
