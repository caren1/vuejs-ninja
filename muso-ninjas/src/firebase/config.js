import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB1hef8xHv4n88-OdLRFP1dvhAyRzQ2y5E",
    authDomain: "muso-ninjas-1794f.firebaseapp.com",
    projectId: "muso-ninjas-1794f",
    storageBucket: "muso-ninjas-1794f.appspot.com",
    messagingSenderId: "989049464638",
    appId: "1:989049464638:web:857c6af021dac24b73ee6f"
  };

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
