import { collection, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { useAuth } from "./AuthContext";

type Bookmark = {
  recipeId: string;
  createdAt: any; // Firestore timestamp
};

type BookmarkContextType = {
  bookmarkedIds: Set<string>;   // For fast lookup
  bookmarks: Bookmark[];        // For sorting/filtering
};

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    if (!user) {
      setBookmarkedIds(new Set());
      setBookmarks([]);
      return;
    }

    const ref = collection(db, "users", user.uid, "bookmarks");

    const unsub = onSnapshot(ref, (snap) => {
      const bookmarkList: Bookmark[] = snap.docs.map((d) => ({
        recipeId: String(d.id),
        createdAt: d.data().createdAt,
      }));

      setBookmarks(bookmarkList);
      setBookmarkedIds(new Set(bookmarkList.map((b) => b.recipeId)));
    });

    return () => unsub();
  }, [user]);

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds, bookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error("useBookmarks must be inside BookmarkProvider");
  return ctx;
};
