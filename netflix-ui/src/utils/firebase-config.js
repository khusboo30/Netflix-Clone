
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBmU4Q3p2hz0KpSbo_rKmUmI2bP-s5VdFY",
  authDomain: "react-netflix-clone-b40d1.firebaseapp.com",
  projectId: "react-netflix-clone-b40d1",
  storageBucket: "react-netflix-clone-b40d1.appspot.com",
  messagingSenderId: "399469580257",
  appId: "1:399469580257:web:3bd5a6b5fdad87db66cca0",
  measurementId: "G-M3LVKQJTZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
