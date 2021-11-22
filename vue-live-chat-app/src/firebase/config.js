import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyyHgjeDUeCTgoq1oHpLo94fwnPi-EMzc",
    authDomain: "ninja-firebase-1c1e6.firebaseapp.com",
    projectId: "ninja-firebase-1c1e6",
    storageBucket: "ninja-firebase-1c1e6.appspot.com",
    messagingSenderId: "79029241123",
    appId: "1:79029241123:web:d13e9388b786da79553896"
  };

  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, timestamp, projectAuth }