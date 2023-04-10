// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR1y8ZYupXmSh5CiV3jcUXH4Dlf_UpdEc",
  authDomain: "email-password-auth-b9a5c.firebaseapp.com",
  projectId: "email-password-auth-b9a5c",
  storageBucket: "email-password-auth-b9a5c.appspot.com",
  messagingSenderId: "266705569514",
  appId: "1:266705569514:web:9a8d2926ce0f1df1cab993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;