// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKzR1l2r8YOkeWMIX2jcB6scaw0YNtetU",
    authDomain: "simple-react-authentication100.firebaseapp.com",
    projectId: "simple-react-authentication100",
    storageBucket: "simple-react-authentication100.appspot.com",
    messagingSenderId: "714017057660",
    appId: "1:714017057660:web:0628fef06338a8dd5c52f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;