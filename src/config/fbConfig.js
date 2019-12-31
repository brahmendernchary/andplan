import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyADN84n_QHA_vWDItMsudddW13NJGOlInY",
  authDomain: "andplan-926cd.firebaseapp.com",
  databaseURL: "https://andplan-926cd.firebaseio.com",
  projectId: "andplan-926cd",
  storageBucket: "andplan-926cd.appspot.com",
  messagingSenderId: "1017436799615",
  appId: "1:1017436799615:web:5158ec07551a46aaccf54a",
  measurementId: "G-Y9C8E5EXX3"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;