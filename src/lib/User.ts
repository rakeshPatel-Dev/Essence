import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import type { User } from "firebase/auth";

export const saveUserIfNotExists = async (user: User) => {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date(),
    });
  }
};
