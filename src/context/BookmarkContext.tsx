import {
  collection,
  onSnapshot
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { useAuth } from "./AuthContext";

type BookmarkContextType = {
  bookmarkedIds: Set<string>;
};

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setBookmarkedIds(new Set());
      return;
    }

    const ref = collection(db, "users", user.uid, "bookmarks");

    const unsub = onSnapshot(ref, (snap) => {
      const ids = new Set(snap.docs.map((d) => String(d.id)));
      setBookmarkedIds(ids);
    });

    return () => unsub();
  }, [user]);

  return (
    <BookmarkContext.Provider value={{ bookmarkedIds }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error("useBookmarks must be inside BookmarkProvider");
  return ctx;
};
