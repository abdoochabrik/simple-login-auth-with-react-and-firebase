import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyBbwNLmLXeFvTB-uSw3TDEuuLsYeQ1oF_0",
    authDomain: "cours-tp-725a8.firebaseapp.com",
    projectId: "cours-tp-725a8",
    storageBucket: "cours-tp-725a8.appspot.com",
    messagingSenderId: "623308667338",
    appId: "1:623308667338:web:4cbda9943bd8d32627f733"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;