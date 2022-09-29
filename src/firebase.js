import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAZwoV0Vr82Wv7L4d5JJ3e6ftsIFsJcd3E",
  authDomain: "data-dashboard-ec2d1.firebaseapp.com",
  projectId: "data-dashboard-ec2d1",
  storageBucket: "data-dashboard-ec2d1.appspot.com",
  messagingSenderId: "490976240120",
  appId: "1:490976240120:web:d4018c40a81e2709b5f60d",
  measurementId: "G-43PJY64NYB"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }