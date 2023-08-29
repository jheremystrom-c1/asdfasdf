import firebase from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import 'https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js';
import 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';
import 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAnumdPaedPB8EquRSc3cgAKB9pZnLbU2g",
  authDomain: "project-11-ed233.firebaseapp.com",
  databaseURL: "https://project-11-ed233-default-rtdb.firebaseio.com",
  projectId: "project-11-ed233",
  storageBucket: "project-11-ed233.appspot.com",
  messagingSenderId: "1041633325551",
  appId: "1:1041633325551:web:05e872dcd03e9b9c14861a",
  measurementId: "G-KFMHH352GE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();

export { app, analytics, db };