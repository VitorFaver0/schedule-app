import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPQROTDGn7SnM_GzkWmzYl8IaF_W2mgt0",
  authDomain: "schedule-app-47fa4.firebaseapp.com",
  projectId: "schedule-app-47fa4",
  storageBucket: "schedule-app-47fa4.appspot.com",
  messagingSenderId: "567659468244",
  appId: "1:567659468244:web:e56b26ce286731aedef241",
  measurementId: "G-LXSYNZNEY9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
