// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqx8XIKklGmzKIrUzvQSBCYK6lN0fN8Yo",
  authDomain: "users-axios-practice.firebaseapp.com",
  databaseURL: "https://users-axios-practice-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "users-axios-practice",
  storageBucket: "users-axios-practice.firebasestorage.app",
  messagingSenderId: "860101289892",
  appId: "1:860101289892:web:84bacb9db4c769dc4b8331"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export Auth
export const auth=getAuth(app);

export const db=getDatabase(app)

