import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { saveUserIfNotExists } from "./User";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    await saveUserIfNotExists(result.user)
    return result.user;
    
  } catch (err) {
    console.error("Google sign-in error", err);
  }
};

export const logout = async () => {
  await signOut(auth);
};
