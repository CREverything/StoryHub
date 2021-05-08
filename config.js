import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD8dwGmnA8bq1mwqJo6Q3jBA3YKz2i1YXw",
  authDomain: "storyhub-5cc91.firebaseapp.com",
  projectId: "storyhub-5cc91",
  storageBucket: "storyhub-5cc91.appspot.com",
  messagingSenderId: "476264892096",
  appId: "1:476264892096:web:41f617e3f5d160863bcf25",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
