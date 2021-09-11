// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlK5eqZX911MAHx3w7OemnSWm7mMHSe5Y",
  authDomain: "discord-clone-14c52.firebaseapp.com",
  projectId: "discord-clone-14c52",
  storageBucket: "discord-clone-14c52.appspot.com",
  messagingSenderId: "533603496995",
  appId: "1:533603496995:web:8e89e5bea845c6c0e4ad96",
  measurementId: "G-WPKYX1VF4R"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};