import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBJuAPQRVjgps96q3rye6spA18at4vTCIY",
  authDomain: "ch-482f8.firebaseapp.com",
  projectId: "ch-482f8",
  storageBucket: "ch-482f8.appspot.com",
  messagingSenderId: "779704351098",
  appId: "1:779704351098:web:b3773a09ccf83a3cfffec3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //real-time db in firebase
const auth = firebase.auth();

export { db, auth };
