// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaaSSG_DcCObP2nuYAIz9XuFXx2AN1dzU",
  authDomain: "facebook-clone-c9135.firebaseapp.com",
  databaseURL: "https://facebook-clone-c9135.firebaseio.com",
  projectId: "facebook-clone-c9135",
  storageBucket: "facebook-clone-c9135.appspot.com",
  messagingSenderId: "815255903355",
  appId: "1:815255903355:web:e10d9234313f3750b5d6de",
  measurementId: "G-8MDXR5KEK4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
