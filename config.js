// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNaaoVVN0WDrbrTA1Kzx_FXCrvuW_4PKM",
    authDomain: "githubfirebase-aea2f.firebaseapp.com",
    projectId: "githubfirebase-aea2f",
    storageBucket: "githubfirebase-aea2f.appspot.com",
    messagingSenderId: "436481113669",
    appId: "1:436481113669:web:e69daf89161a264d33ed2c",
    measurementId: "G-LVLWK48DT7"
  };

  firebaseConfig.initializeApp(firebaseconfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  