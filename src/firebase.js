import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBJwTCQ2JN923SYQHVuIJKrnuqxXXvlcw",
  authDomain: "svelte-demo-bcox.firebaseapp.com",
  databaseURL: "https://svelte-demo-bcox.firebaseio.com",
  projectId: "svelte-demo-bcox",
  storageBucket: "svelte-demo-bcox.appspot.com",
  messagingSenderId: "816994228973",
  appId: "1:816994228973:web:1a1d4026b7ffd0df",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
