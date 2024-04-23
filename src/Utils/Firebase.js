// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhNsDpngB_R8XcLSA_xjTvBNadrALgLRs",
  authDomain: "netflixgpt-ec59d.firebaseapp.com",
  projectId: "netflixgpt-ec59d",
  storageBucket: "netflixgpt-ec59d.appspot.com",
  messagingSenderId: "269406898012",
  appId: "1:269406898012:web:dd537531ea0254f05e2399",
  measurementId: "G-ZNF39J3C3L"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);