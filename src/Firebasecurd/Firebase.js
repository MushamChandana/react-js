
import firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyCNDwxVel7je3JPvGzXu44MV-z2CCYdv4w",
    authDomain: "reactjs-8ab9e.firebaseapp.com",
    databaseURL: "https://reactjs-8ab9e-default-rtdb.firebaseio.com",
    projectId: "reactjs-8ab9e",
    storageBucket: "reactjs-8ab9e.appspot.com",
    messagingSenderId: "741988961918",
    appId: "1:741988961918:web:e256e7913140591790122f"
  };
  
  // Initialize Firebase
  var firebaseDB = firebase.initializeApp(firebaseConfig);
  export default firebaseDB.database().ref();