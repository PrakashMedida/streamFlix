// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP5OkB828MDt3rnXg6kzrRBtYXJu9ooxQ",
  authDomain: "streamflix-216ca.firebaseapp.com",
  projectId: "streamflix-216ca",
  storageBucket: "streamflix-216ca.appspot.com",
  messagingSenderId: "822091700241",
  appId: "1:822091700241:web:a14c9d17b707b83fc239b0",
  measurementId: "G-4GENSV0RBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();