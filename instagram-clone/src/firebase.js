// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCzK4CUAP7Pce6JxnrhsL6tngy00gT0s7o",
    authDomain: "clone-instagram-reactjs.firebaseapp.com",
    databaseURL: "https://clone-instagram-reactjs.firebaseio.com",
    projectId: "clone-instagram-reactjs",
    storageBucket: "clone-instagram-reactjs.appspot.com",
    messagingSenderId: "294042424038",
    appId: "1:294042424038:web:9804c70d7aa55bc9512127",
    measurementId: "G-V2JS8X5E28"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};

// export default db;