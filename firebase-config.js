// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCSfpNxbRTwL2PErQrNW4UQ-B4zqhHkrVw",
  authDomain: "strefa-f41ef.firebaseapp.com",
  projectId: "strefa-f41ef",
  storageBucket: "strefa-f41ef.firebasestorage.app",
  messagingSenderId: "460055344104",
  appId: "1:460055344104:web:221886736a2ac85160ea5d",
  measurementId: "G-ZPP3H30M35"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

window.db = firebase.firestore();
window.auth = firebase.auth();

// Opcjonalnie: drugi projekt Firebase dla A/B klas
// window.db2 = firebase.initializeApp(SECOND_CONFIG, "secondary").firestore();
window.db2 = window.db2 || null;
