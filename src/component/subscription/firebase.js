

import firebase from 'firebase/compat/app';

// import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwB93zbkN3Z9fezsRvbVNngI4fr2EaB2E",
    authDomain: "acciojob-test-app.firebaseapp.com",
    projectId: "acciojob-test-app",
    storageBucket: "acciojob-test-app.appspot.com",
    messagingSenderId: "766086160502",
    appId: "1:766086160502:web:1afa3dc9888f6bbc24bf57"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;
    