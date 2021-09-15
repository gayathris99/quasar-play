import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyABwXuGf9fAAA3lX7a8HtlsvpgEqOT85F0",
  authDomain: "quasar-login-signup.firebaseapp.com",
  projectId: "quasar-login-signup",
  storageBucket: "quasar-login-signup.appspot.com",
  messagingSenderId: "743272333500",
  appId: "1:743272333500:web:038be6ef042462e8fb50b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth =  getAuth(app);
const firebaseDb = getFirestore(app);

export {firebaseAuth,firebaseDb}