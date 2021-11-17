import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "ninja-firebase-1c1e6.firebaseapp.com",
    projectId: "ninja-firebase-1c1e6",
    storageBucket: "ninja-firebase-1c1e6.appspot.com",
    messagingSenderId: "79029241123",
    appId: "1:79029241123:web:38cbbd5cd6173886553896"
  };

  firebase.initializeApp(firebaseConfig);
  
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }