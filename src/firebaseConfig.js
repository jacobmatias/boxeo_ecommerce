// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Importamos la instancia de nuestra base de datos
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQDcrc19LmkXx-kwzqbtxkaF1uLYR-6cQ",
  authDomain: "ecommerce-boxeo.firebaseapp.com",
  projectId: "ecommerce-boxeo",
  storageBucket: "ecommerce-boxeo.appspot.com",
  messagingSenderId: "264992670890",
  appId: "1:264992670890:web:6c269c128022ad77767cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Inicializamos una variable con nuestra base de datos
export const db=getFirestore(app)
