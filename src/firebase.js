import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxy_eahjAaf-9o_iKX7C39Gne6gridyPg",
  authDomain: "game-namelink.firebaseapp.com",
  projectId: "game-namelink",
  storageBucket: "game-namelink.appspot.com",
  messagingSenderId: "87892917512",
  appId: "1:87892917512:web:fa42b62ee13358b9e1c0bd",
  measurementId: "G-JGPHP8VYJ1",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
