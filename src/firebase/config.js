import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY3syp1d7MOg9qofeFM3JkMDrUttWCag8",
  authDomain: "rmsports.firebaseapp.com",
  projectId: "rmsports",
  storageBucket: "rmsports.firebasestorage.app",
  messagingSenderId: "100203644249",
  appId: "1:100203644249:web:ab43e8720b469cf2a1b848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };