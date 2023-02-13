// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// import {getR}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bkWpnAxOuyq7zIBVmM1W8Xq33fyhl40",
  databaseURL: "https://realtime-chat-app-5ce48-default-rtdb.firebaseio.com",
  authDomain: "realtime-chat-app-5ce48.firebaseapp.com",
  projectId: "realtime-chat-app-5ce48",
  storageBucket: "realtime-chat-app-5ce48.appspot.com",
  messagingSenderId: "939188027087",
  appId: "1:939188027087:web:904b9aa76117209be841ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
// export const database = getFirestore();
// export const database = getDatabase();
