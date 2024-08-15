// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7rtNTaXh8hxjJbTeJLDd0q2UlgSkBeo4",
  authDomain: "coffeeshop-6d1cb.firebaseapp.com",
  projectId: "coffeeshop-6d1cb",
  storageBucket: "coffeeshop-6d1cb.appspot.com",
  messagingSenderId: "178506234922",
  appId: "1:178506234922:web:dc04fefb53e93069595753",
  measurementId: "G-JSRVZKGWZ5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
const analytics = getAnalytics(app);
