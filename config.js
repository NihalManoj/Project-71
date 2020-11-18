import firebase from 'firebase'


// Initialize Firebase  
var firebaseConfig = {
  apiKey: "AIzaSyAyCNsHFRfEXazn8MXD9WNRdDxLskoUWr4",
  authDomain: "story-hub-realtime.firebaseapp.com",
  databaseURL: "https://story-hub-realtime.firebaseio.com",
  projectId: "story-hub-realtime",
  storageBucket: "story-hub-realtime.appspot.com",
  messagingSenderId: "255212372925",
  appId: "1:255212372925:web:bed76b5b83bd4a2d8148d4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.database();