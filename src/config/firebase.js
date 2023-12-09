// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLfo_-lLl6AeXtYPVZApwcQdlAtgKobnM",
  authDomain: "portfolio-a5a91.firebaseapp.com",
  projectId: "portfolio-a5a91",
  storageBucket: "portfolio-a5a91.appspot.com",
  messagingSenderId: "147866628697",
  appId: "1:147866628697:web:d6343d2723dd8670fd3748",
  measurementId: "G-WGTGBWEQZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);