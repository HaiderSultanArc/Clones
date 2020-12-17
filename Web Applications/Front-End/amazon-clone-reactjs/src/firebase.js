import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAh_Qwa6vm6k700eCupzdDqrRbITktTJIg",
    authDomain: "clone-ama-zon-reactjs.firebaseapp.com",
    databaseURL: "https://clone-ama-zon-reactjs.firebaseio.com",
    projectId: "clone-ama-zon-reactjs",
    storageBucket: "clone-ama-zon-reactjs.appspot.com",
    messagingSenderId: "609580978860",
    appId: "1:609580978860:web:802fff50c1efb8aeca0509",
    measurementId: "G-M24QEJS6X2"
});

const auth = firebase.auth();

export { auth };
