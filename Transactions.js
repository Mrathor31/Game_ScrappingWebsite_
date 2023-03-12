// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    addDoc,
    collection,
    Timestamp,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBjYyfyurWI-wO-ROh75EukWscwW0sB-TA",
    authDomain: "gaming-search-website.firebaseapp.com",
    databaseURL: "https://gaming-search-website-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gaming-search-website",
    storageBucket: "gaming-search-website.appspot.com",
    messagingSenderId: "1010929731935",
    appId: "1:1010929731935:web:a3b80746057b6a514bceea",
    measurementId: "G-L7NXZ2X3C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

async function search_bar(){
    const search = document.getElementById('search').value;
    const snapshot = db.collection('Gamedetails').doc(search);
    const doc = await snapshot.get();
    if(doc.exists){
        console.log("found");
    }
    else{
        console.log("not found");
    }
}

