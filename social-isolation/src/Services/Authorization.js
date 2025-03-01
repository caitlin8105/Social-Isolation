import { auth, db } from "..\Firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

/**
 * Registers a new user with email, password, and username.
 * @param {string} username - The chosen username.
 * @param {string} email - The user's email address.
 * @param {string} password - The chosen password.
 * @returns {Promise<void>}
 */

export const signUpUser = async (username, email, password) => {
  try {
    // Create user account in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile with username
    await updateProfile(user, { displayName: username });

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
      createdAt: new Date()
    });

    console.log("User registered successfully:", user);
  } catch (error) {
    console.error("Sign-up error:", error.message);
    throw error;
  }
};
