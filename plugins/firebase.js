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
