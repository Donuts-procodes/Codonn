// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; // TO STORE THE DATA
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBioAfHiJIv4D6kEi-k49NKgWYjCRbzH4g",
  authDomain: "codonn-ide.firebaseapp.com",
  projectId: "codonn-ide",
  storageBucket: "codonn-ide.firebasestorage.app",
  messagingSenderId: "296971631066",
  appId: "1:296971631066:web:7e9f7ff0d46f8a24f668e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
