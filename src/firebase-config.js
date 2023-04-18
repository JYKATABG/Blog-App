import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAclhxUKlDeZM26benJH6-3nLMZrvWhkuI",
    authDomain: "blogproject-react.firebaseapp.com",
    projectId: "blogproject-react",
    storageBucket: "blogproject-react.appspot.com",
    messagingSenderId: "986437891880",
    appId: "1:986437891880:web:e43cc464116376260ec21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();