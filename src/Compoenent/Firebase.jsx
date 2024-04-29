import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBsE2eCixeUv6Az4Cv-9Brmh9AwvazgnmE",
    authDomain: "prime-world-d2005.firebaseapp.com",
    projectId: "prime-world-d2005",
    storageBucket: "prime-world-d2005.appspot.com",
    messagingSenderId: "899208140747",
    appId: "1:899208140747:web:1dbeb4b52c261f65df084e",
    measurementId: "G-BKJ5L3PEPV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };