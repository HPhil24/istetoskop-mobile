// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCErmCsQaW_kH8owodZ0QXxJzF1d1B7uI",
  authDomain: "istetoskop.firebaseapp.com",
  projectId: "istetoskop",
  storageBucket: "istetoskop.appspot.com",
  messagingSenderId: "382439444581",
  appId: "1:382439444581:web:c65f8a7afde5e3f865368c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };