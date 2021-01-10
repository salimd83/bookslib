import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1lbGxE330AysZujPJOKCUJo3RVbKCzaY",
  authDomain: "bookslib-5b5a0.firebaseapp.com",
  databaseURL: "https://bookslib-5b5a0.firebaseio.com",
  projectId: "bookslib-5b5a0",
  storageBucket: "bookslib-5b5a0.appspot.com",
  messagingSenderId: "244402065654",
  appId: "1:244402065654:web:3fa81742b8cb2948101cd7",
  measurementId: "G-D56KYL63YB",
};

firebase.initializeApp(firebaseConfig);


