// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAENzZPreoceHJ7KQMiphbm9QMomTxRnqY",
  authDomain: "quizcup-4a23b.firebaseapp.com",
  projectId: "quizcup-4a23b",
  storageBucket: "quizcup-4a23b.firebasestorage.app",
  messagingSenderId: "7570426872",
  appId: "1:7570426872:web:70f7fd11ce6649a459e40d",
  measurementId: "G-K8VN1YPCXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export { app, auth };
