import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5Z3HER_2bANB-BpnKzDX2NnzFQlxqkbc",
  authDomain: "roboticsreact.firebaseapp.com",
  projectId: "roboticsreact",
  storageBucket: "roboticsreact.appspot.com",
  messagingSenderId: "278462772868",
  appId: "1:278462772868:web:d53a07a754935664dab4d1",
  measurementId: "G-8Z72CY0GQH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const blogsCollection = collection(db, "blogs")