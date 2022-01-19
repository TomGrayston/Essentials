// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzV8qTupFfmYOZXHQp3KiJEWC5jIFrpUM",
    authDomain: "summer-presence-335320.firebaseapp.com",
    projectId: "summer-presence-335320",
    storageBucket: "summer-presence-335320.appspot.com",
    messagingSenderId: "354405648516",
    appId: "1:354405648516:web:ef0e7a20b1e8ad0ba55ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();