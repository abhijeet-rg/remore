import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaVLEcTNJ7HrTnYeBXfd0hgmrt2QaffHs",
  authDomain: "unix-interiors.firebaseapp.com",
  databaseURL: "https://unix-interiors-default-rtdb.firebaseio.com",
  projectId: "unix-interiors",
  storageBucket: "unix-interiors.appspot.com",
  messagingSenderId: "1026532401201",
  appId: "1:1026532401201:web:90bb419e9dff1d81ac7510",
  measurementId: "G-G7FZZE34HQ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
