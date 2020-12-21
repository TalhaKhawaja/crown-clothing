import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAn3os3v66YsTJP3X6WBQCEg6BFWp6s3xQ",
    authDomain: "crown-db-d97a2.firebaseapp.com",
    projectId: "crown-db-d97a2",
    storageBucket: "crown-db-d97a2.appspot.com",
    messagingSenderId: "850272321911",
    appId: "1:850272321911:web:b1fd1665332ea823362172",
    measurementId: "G-JY9QK7E2L0"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;