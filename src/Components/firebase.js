// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyDaNVvbb3JaOLpKEkS73dB5TYYUkmn3Y",
  authDomain: "care-and-fair.firebaseapp.com",
  projectId: "care-and-fair",
  storageBucket: "care-and-fair.appspot.com",
  messagingSenderId: "1052744093012",
  appId: "1:1052744093012:web:32f2686b75ad9093568cc1",
  measurementId: "G-C39XX977BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)