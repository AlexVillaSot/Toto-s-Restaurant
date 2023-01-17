import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXTPMnfx6pyDjcV5u2OH9GNiJBbEQSm4I",
  authDomain: "toto-s-restaurant.firebaseapp.com",
  databaseURL: "https://toto-s-restaurant-default-rtdb.firebaseio.com",
  projectId: "toto-s-restaurant",
  storageBucket: "toto-s-restaurant.appspot.com",
  messagingSenderId: "1095933645151",
  appId: "1:1095933645151:web:30708943c36072d638e6ea",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
