import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7be_bVD9sPuOWYC3ZP0aKGxA7XG8wPVE",
  authDomain: "tiktok-clone-reactjs.firebaseapp.com",
  projectId: "tiktok-clone-reactjs",
  storageBucket: "tiktok-clone-reactjs.appspot.com",
  messagingSenderId: "281948287904",
  appId: "1:281948287904:web:a578a454074c167f1beac5",
  measurementId: "G-2QQ497JXY7"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;