import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCm2BNNThtcVAvg495uebQ8B1gIp7Q5nS8",
    authDomain: "gring-1f1b6.firebaseapp.com",
    projectId: "gring-1f1b6",
    storageBucket: "gring-1f1b6.appspot.com",
    messagingSenderId: "1031078241302",
    appId: "1:1031078241302:web:bf19169664f8ce1f3f4137"
  };


// Firebase'i başlatma
const app = initializeApp(firebaseConfig);

// Firestore'u başlatma
const db = getFirestore(app);

export { db };