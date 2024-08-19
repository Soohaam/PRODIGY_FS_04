import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f12c9.firebaseapp.com",
  projectId: "reactchat-f12c9",
  storageBucket: "reactchat-f12c9.appspot.com",
  messagingSenderId: "172753320813",
  appId: "1:172753320813:web:a4c7eaaad53e6041227864"
};

console.log(import.meta.env.VITE_API_KEY);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app) 
export const storage = getStorage(app) 