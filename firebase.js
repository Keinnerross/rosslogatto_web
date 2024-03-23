import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCYorduT3l0OlH-gwiknKV4S9nIfA_EGv8",
    authDomain: "roogattoweb.firebaseapp.com",
    projectId: "roogattoweb",
    storageBucket: "roogattoweb.appspot.com",
    messagingSenderId: "438387301472",
    appId: "1:438387301472:web:56fe1086f75177c6b8b705",
    measurementId: "G-491XM2CV9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
