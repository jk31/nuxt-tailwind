import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiNEXwT1YC-_-xcebSwZMGSQxafMPOtT0",
  authDomain: "fir-test-d7b30.firebaseapp.com",
  projectId: "fir-test-d7b30",
  storageBucket: "fir-test-d7b30.appspot.com",
  messagingSenderId: "106568738370",
  appId: "1:106568738370:web:370e4176e02b9dded7afdb",
  measurementId: "G-V4H8860HYW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth Observer
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("#### ONAUTH OBSERVER LOGGED IN");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    console.log("#### ONAUTH OBSERVER LOGGED OUT");
    // User is signed out
    // ...
  }
});

// FireStore
const db = firebase.firestore();

export default ({ app }, inject) => {
  inject("firebase", firebase);
  inject("db", db);
};
