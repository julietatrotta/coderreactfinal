import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkGTWLw8fGN7u3DQ0reGTMCQCOWZ1M3kw",
    authDomain: "coderreact-3621d.firebaseapp.com",
    projectId: "coderreact-3621d",
    storageBucket: "coderreact-3621d.appspot.com",
    messagingSenderId: "672181275",
    appId: "1:672181275:web:971c2c599ee7e9ae5f1cbe"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db