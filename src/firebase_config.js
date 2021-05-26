import firebase from "firebase";

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCsoUCsrXRqHNO1pC233U4zNCg1fX1L_UU",
    authDomain: "task-manager-98753.firebaseapp.com",
    projectId: "task-manager-98753",
    storageBucket: "task-manager-98753.appspot.com",
    messagingSenderId: "252188674054",
    appId: "1:252188674054:web:1dc70a40e6b102026b5b87"
  };
  // Initialize Firebase
  const myApp = firebase.initializeApp(firebaseConfig);

  export const db = myApp.firestore();
  export const firebaseAuth = myApp.auth();

 