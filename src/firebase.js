import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA5nHAiSLyk6TLQR1I0xvsq6z7EuP5hKEA",
    authDomain: "challenge-cb568.firebaseapp.com",
    databaseURL: "https://challenge-cb568.firebaseio.com",
    projectId: "challenge-cb568",
    storageBucket: "challenge-cb568.appspot.com",
    messagingSenderId: "1025374821744",
    appId: "1:1025374821744:web:b31c0e6e06ba46d2d883b5",
    measurementId: "G-LR0019G41M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };