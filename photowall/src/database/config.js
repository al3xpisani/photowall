import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxx",
  authDomain: "photowall-489c0.firebaseapp.com",
  databaseURL: "https://photowallxxxxxxxxxxxx",
  projectId: "photowall-489c0",
  storageBucket: "photowall-489c0.appspot.com",
  messagingSenderId: "xxxxx",
  appId: "1:xxxx",
  measurementId: "xxxxxxx"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.database()

export  default db
