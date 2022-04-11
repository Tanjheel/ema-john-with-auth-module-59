// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYrZPTETkSqRZN6nJU_KlpqG6KWTyxHlg",
    authDomain: "ema-john-simple-c224b.firebaseapp.com",
    projectId: "ema-john-simple-c224b",
    storageBucket: "ema-john-simple-c224b.appspot.com",
    messagingSenderId: "735140064831",
    appId: "1:735140064831:web:1be216a4038a70ff88528a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;