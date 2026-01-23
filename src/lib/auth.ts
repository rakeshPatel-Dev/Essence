import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
    
  } catch (err) {
    console.error("Google sign-in error", err);
  }
};

export const logout = async () => {
  await signOut(auth);
};
