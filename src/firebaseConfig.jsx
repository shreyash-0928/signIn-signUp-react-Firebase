// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB15d3uy-YTEOQkHswC1YdpwB1SPk43MfQ",
  authDomain: "signinsignup-firebase-69b4a.firebaseapp.com",
  projectId: "signinsignup-firebase-69b4a",
  storageBucket: "signinsignup-firebase-69b4a.appspot.com",
  messagingSenderId: "323685413714",
  appId: "1:323685413714:web:fd58d30a74dc4c737f008b",
  measurementId: "G-FK17QSDFVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);