// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa6WGm6lDEryuEQbbMuAQz9HZsLqMepNM",
  authDomain: "fire-contact-5031.firebaseapp.com",
  databaseURL: "https://fire-contact-5031-default-rtdb.firebaseio.com",
  projectId: "fire-contact-5031",
  storageBucket: "fire-contact-5031.appspot.com",
  messagingSenderId: "618980222887",
  appId: "1:618980222887:web:e1a3395bdde474f59ef882"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

