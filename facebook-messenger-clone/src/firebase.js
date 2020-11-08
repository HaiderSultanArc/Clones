import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOc4-55BGcmjjEKlE5RYUJQW2x3GD9PG4",
    authDomain: "clone-messenger-reactjs.firebaseapp.com",
    databaseURL: "https://clone-messenger-reactjs.firebaseio.com",
    projectId: "clone-messenger-reactjs",
    storageBucket: "clone-messenger-reactjs.appspot.com",
    messagingSenderId: "802682033775",
    appId: "1:802682033775:web:78640be8c4a25e26815f9a",
    measurementId: "G-NRN23ZB27P"
});

const db = firebaseApp.firestore();

export default db;