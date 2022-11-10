import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuA3AmJQOeTHMhLLBjTBx-RM1_vl5P954",
  authDomain: "disneyplus-clone-a8190.firebaseapp.com",
  projectId: "disneyplus-clone-a8190",
  storageBucket: "disneyplus-clone-a8190.appspot.com",
  messagingSenderId: "1023172635489",
  appId: "1:1023172635489:web:144dc2526b4e74bcc3f320"
};

//   // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;

