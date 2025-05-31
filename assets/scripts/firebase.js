// scripts/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCCcMGE-aS5Gd9U4q16sdLF58MKo57M8Sw",
  authDomain: "eventify-f9d90.firebaseapp.com",
  projectId: "eventify-f9d90",
  storageBucket: "eventify-f9d90.appspot.com",
  messagingSenderId: "788683506483",
  appId: "1:788683506483:web:203d5b1972ef2d0735b446",
  measurementId: "G-GTNMLR544Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);