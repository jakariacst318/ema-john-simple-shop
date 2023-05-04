// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-tHOOmgZ7PEh--pfB8pOCJ6yA_qPqnUg",
  authDomain: "ema-john-firebase-auth-f8bab.firebaseapp.com",
  projectId: "ema-john-firebase-auth-f8bab",
  storageBucket: "ema-john-firebase-auth-f8bab.appspot.com",
  messagingSenderId: "99101802834",
  appId: "1:99101802834:web:665e1d681181b6c9047a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;