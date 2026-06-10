
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-4a7d2.firebaseapp.com",
  projectId: "interview-agent-4a7d2",
  storageBucket: "interview-agent-4a7d2.firebasestorage.app",
  messagingSenderId: "293893190746",
  appId: "1:293893190746:web:db7558be9467d780e99463"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}