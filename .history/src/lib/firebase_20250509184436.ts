// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUd-vS7RUczcNvcE_ZJRwgoI5fY_wOFyM",
    authDomain: "aquastori-chatbot.firebaseapp.com",
    projectId: "aquastori-chatbot",
    storageBucket: "aquastori-chatbot.firebasestorage.app",
    messagingSenderId: "447670164927",
    appId: "1:447670164927:web:69c74ea877e173e627950a",
    measurementId: "G-SKY1PSQ7V8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);