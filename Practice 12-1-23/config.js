// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBYoEpDB4WnDNsHQefGs_qBHKkyz19ArMM",
  authDomain: "practice-adc61.firebaseapp.com",
  projectId: "practice-adc61",
  storageBucket: "practice-adc61.appspot.com",
  messagingSenderId: "892450035636",
  appId: "1:892450035636:web:e31731d749d3ca658e84e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
