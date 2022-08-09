import {getApp, getApps, initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCScsFoOwmFIxdRhaQ5crH1U3p649HZcMc",
  authDomain: "delivery-78d1b.firebaseapp.com",
  databaseURL: "https://delivery-78d1b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "delivery-78d1b",
  storageBucket: "delivery-78d1b.appspot.com",
  messagingSenderId: "1052606629662",
  appId: "1:1052606629662:web:98cb5f3d0211e1a5282b0f",
  measurementId: "G-Y038Y3S6KL"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }