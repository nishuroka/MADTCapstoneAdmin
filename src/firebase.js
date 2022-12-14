import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAJ9KgX1m_GpuLCN2FNk0QZmXps0o47C0U",
  authDomain: "capstone-b8565.firebaseapp.com",
  databaseURL: "https://capstone-b8565-default-rtdb.firebaseio.com",
  projectId: "capstone-b8565",
  storageBucket: "capstone-b8565.appspot.com",
  messagingSenderId: "934079324320",
  appId: "1:934079324320:web:6cb8724bc92468d2c2e9c5"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}