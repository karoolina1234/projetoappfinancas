import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

 var firebaseConfig = {
  apiKey: "AIzaSyDGf9pPt4Gy4aikIuY6rZHszGrt6JveOvQ",
  authDomain: "meuapp-208f9.firebaseapp.com",
  projectId: "meuapp-208f9",
  storageBucket: "meuapp-208f9.appspot.com",
  messagingSenderId: "601084356857",
  appId: "1:601084356857:web:d34cd751325ddad3edda28",
  measurementId: "G-1B2TN4F468"
};
 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;