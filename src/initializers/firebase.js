// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAYOHNDf5-aBtlECLFW0V-CID8r0Y8WiU",
  authDomain: "inicio-de-sesion-a36ba.firebaseapp.com",
  projectId: "inicio-de-sesion-a36ba",
  storageBucket: "inicio-de-sesion-a36ba.appspot.com",
  messagingSenderId: "786971332908",
  appId: "1:786971332908:web:39403a9b525d826d1d5c89",
  measurementId: "G-7Z5RN1K0FB"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
// const signInWithGoogle = () => auth.signInWithPopup(provider);

provider.setCustomParameters({ prompt: 'select_account' });

export default firebase;