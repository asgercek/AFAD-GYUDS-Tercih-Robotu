// Firebase Configuration
// https://console.firebase.google.com adresinden alacağınız bilgileri buraya yapıştırın

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);

// Database referansı
const db = firebase.database();
const adaylarRef = db.ref('adaylar');
const sonuclarRef = db.ref('sonuclar');
