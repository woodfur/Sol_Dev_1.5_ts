// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDet55GTgjXef9IxgujZa8clf90gKm9WsQ",
  authDomain: "soldev-aa9ae.firebaseapp.com",
  projectId: "soldev-aa9ae",
  storageBucket: "soldev-aa9ae.appspot.com",
  messagingSenderId: "505325435032",
  appId: "1:505325435032:web:a481c3d38335ec46be78ed",
  measurementId: "G-BF35E7YH2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);