import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCSGxUwqhBcKfLIfgC51-aiuv1B-XoQkX8",
  authDomain: "ar-gardening-5eeb1.firebaseapp.com",
  databaseURL: "https://ar-gardening-5eeb1.firebaseio.com",
  projectId: "ar-gardening-5eeb1",
  storageBucket: "ar-gardening-5eeb1.appspot.com",
  messagingSenderId: "461196396366",
  appId: "1:461196396366:web:7b5b3f8ea9c5ad8303801f"
};

if (firebase.apps.length === 0) {
  let connection = firebase.initializeApp(firebaseConfig);
    // console.log(connection);
}


export { firebase };