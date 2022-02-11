import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA-qq5bgZOtjKVSlI7E6t3TcNweOs7t8UU",
  authDomain: "crwn-db-cb103.firebaseapp.com",
  projectId: "crwn-db-cb103",
  storageBucket: "crwn-db-cb103.appspot.com",
  messagingSenderId: "881569981238",
  appId: "1:881569981238:web:a8ae9b8ac4d857483c0997",
  measurementId: "G-GE5FNJJ128"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase