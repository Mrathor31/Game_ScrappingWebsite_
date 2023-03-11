// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjYyfyurWI-wO-ROh75EukWscwW0sB-TA",
    authDomain: "gaming-search-website.firebaseapp.com",
    projectId: "gaming-search-website",
    storageBucket: "gaming-search-website.appspot.com",
    messagingSenderId: "1010929731935",
    appId: "1:1010929731935:web:a3b80746057b6a514bceea",
    measurementId: "G-L7NXZ2X3C1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore(app);

