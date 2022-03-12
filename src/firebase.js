import "firebase.js"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-K92qCKjWln6T8xaxBSVwDTKA2HqQZgY",
  authDomain: "block-post-68d54.firebaseapp.com",
  projectId: "block-post-68d54",
  storageBucket: "block-post-68d54.appspot.com",
  messagingSenderId: "143665649231",
  appId: "1:143665649231:web:0571d89c8963b5e29c7c3a",
  measurementId: "G-8DWDZNX5E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app }; 