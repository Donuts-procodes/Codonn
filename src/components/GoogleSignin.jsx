import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

export default function GoogleSignin() {
  const navigate = useNavigate(); // Correct way to navigate

  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (user) {
        // Store user data in Firestore
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: user.displayName, // Fixed property name
          photo: user.photoURL,
        });

        // Show success toast
        toast.success("User Logged in Successfully!!", { position: "top-center" });

        // Navigate after Firestore operation completes
        navigate("/Home");
      }
    } catch (error) {
      toast.error(`Login Failed: ${error.message}`, { position: "top-center" });
    }
  }

  return (
    <div>
      <GoogleButton onClick={googleLogin} />
    </div>
  );
}
