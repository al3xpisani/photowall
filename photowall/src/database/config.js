import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBbMYi-SUDZxhNxSp6zLwFd4dCP4V8oT-w",
  authDomain: "photowall-489c0.firebaseapp.com",
  databaseURL: "https://photowall-489c0-default-rtdb.firebaseio.com",
  projectId: "photowall-489c0",
  storageBucket: "photowall-489c0.appspot.com",
  messagingSenderId: "407667172262",
  appId: "1:407667172262:web:9c98a5f99040e231f02567",
  measurementId: "G-4F9R1G1182"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.database()

export  default db