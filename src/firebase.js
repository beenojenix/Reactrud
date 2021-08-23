import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyDLjPZPQIltqbdc8zvh85NG2A04guKOpz4",
    authDomain: "react-crud-751cd.firebaseapp.com",
    databaseURL: "https://react-crud-751cd-default-rtdb.firebaseio.com",
    projectId: "react-crud-751cd",
    storageBucket: "react-crud-751cd.appspot.com",
    messagingSenderId: "766625083818",
    appId: "1:766625083818:web:f0091d5c4741e03e1b3bd3"
  };
  // Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);

 firebase.analytics();

 export default fireDb.database().ref();