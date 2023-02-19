// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "cbt-auth.firebaseapp.com",
  projectId: "cbt-auth",
  storageBucket: "cbt-auth.appspot.com",
  messagingSenderId: "626986384829",
  appId: "1:626986384829:web:beeef03acf89cafc3466d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export const db = getFirestore(app)

export {auth}

// export function signUp(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
// }