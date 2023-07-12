import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnfbHFbXziDNJSvHDliCOnyeq6IBrSZtU",
  authDomain: "bookai-f1e89.firebaseapp.com",
  projectId: "bookai-f1e89",
  storageBucket: "bookai-f1e89.appspot.com",
  messagingSenderId: "548167899694",
  appId: "1:548167899694:web:a703fa212e73319486ddbf",
  measurementId: "G-8T0M4Q3Q8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Authentication

export default auth;
