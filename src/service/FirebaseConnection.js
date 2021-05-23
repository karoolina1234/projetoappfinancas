import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBH2ZL1DXn1BsxRom5b-kk-24riU5TX5O8",
    authDomain: "financas-8778b.firebaseapp.com",
    databaseURL: "https://financas-8778b-default-rtdb.firebaseio.com",
    projectId: "financas-8778b",
    storageBucket: "financas-8778b.appspot.com",
    messagingSenderId: "83922707186",
    appId: "1:83922707186:web:339edf23920941bb99266b",
    measurementId: "G-KRFRSW0M1Z"
  };
  // Initialize Firebase

  if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();}

  export default firebase;