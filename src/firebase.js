import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTNX5nZN7o_YkCB3qaNJdWuw6nr5LOyXs",
  authDomain: "netflix-clone-40b12.firebaseapp.com",
  projectId: "netflix-clone-40b12",
  storageBucket: "netflix-clone-40b12.appspot.com",
  messagingSenderId: "600741375130",
  appId: "1:600741375130:web:b2edb0b397b499652fc323",
};

// version 9.16.0 code
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db, firebaseApp };
//export default db;
