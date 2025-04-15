// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4sI2X8xPihr-mYqo76pOPcHfGtbFKqo",
  authDomain: "myfirstproject-514a8.firebaseapp.com",
  projectId: "myfirstproject-514a8",
  storageBucket: "myfirstproject-514a8.firebasestorage.app",
  messagingSenderId: "162425717735",
  appId: "1:162425717735:web:39243a0b4242ece048b342",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// je pn data fire store mde asel to fireDB mde store zala n Auth mdla auth mde
const fireDB = getFirestore(app)
const auth = getAuth(app)
export { fireDB, auth }
