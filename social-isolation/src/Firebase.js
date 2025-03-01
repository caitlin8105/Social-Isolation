// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb9sCY1D3UUZOHDwkwhFBkjPN4T4wU8nA",
  authDomain: "social-isolation-data.firebaseapp.com",
  projectId: "social-isolation-data",
  storageBucket: "social-isolation-data.firebasestorage.app",
  messagingSenderId: "874956194019",
  appId: "1:874956194019:web:9f05ec2c5be861d60785d6",
  measurementId: "G-H32FDNX3TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authorization = getAuth(app);
const database = getFirestore(app);
export { auth, db };
export default app;
