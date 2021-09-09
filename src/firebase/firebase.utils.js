import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAh0ESM6UMtQHztg2C2mA50CyNLMtp5Z-M",
    authDomain: "crwn-db-6b4a0.firebaseapp.com",
    projectId: "crwn-db-6b4a0",
    storageBucket: "crwn-db-6b4a0.appspot.com",
    messagingSenderId: "284021025223",
    appId: "1:284021025223:web:faac86c77c6a2d1f68d1e2",
    measurementId: "G-16CJNMBD9N"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;