// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import FIREBASE_CONFIG from "../constants/firbaseConfig";

const getInitializedFirebaseApp = () => {
  const app = initializeApp(FIREBASE_CONFIG);
  return app;
}

export default getInitializedFirebaseApp; 