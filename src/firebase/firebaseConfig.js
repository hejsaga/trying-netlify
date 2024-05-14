// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6WioiELMf5Cmr0syLK7z7c-Uak8fVZhA",
  authDomain: "authentication-9c05e.firebaseapp.com",
  projectId: "authentication-9c05e",
  storageBucket: "authentication-9c05e.appspot.com",
  messagingSenderId: "853654734780",
  appId: "1:853654734780:web:6f93af0fdc37d68c804db9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
