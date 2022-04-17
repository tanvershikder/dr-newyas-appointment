// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG0APgVgH9auUeAt8siHazeVNVdO9THS8",
  authDomain: "dr-newyas-appointment-servoce.firebaseapp.com",
  projectId: "dr-newyas-appointment-servoce",
  storageBucket: "dr-newyas-appointment-servoce.appspot.com",
  messagingSenderId: "58381843896",
  appId: "1:58381843896:web:6e2006f036512bbde8e34d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;