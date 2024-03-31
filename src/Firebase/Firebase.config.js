// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPDIxT9Uz2W351mO_PQ-8WnXoyA-2japU",
  authDomain: "auth-moha-milon-1210e.firebaseapp.com",
  projectId: "auth-moha-milon-1210e",
  storageBucket: "auth-moha-milon-1210e.appspot.com",
  messagingSenderId: "616630494766",
  appId: "1:616630494766:web:b68d2de69061a13eb2e1bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth