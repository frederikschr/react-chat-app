// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const getInitializedFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBitZ_1fb2GjHxXLHhNQEnWPGNiMvlBWlg",
    authDomain: "react-chat-app-b332e.firebaseapp.com",
    projectId: "react-chat-app-b332e",
    storageBucket: "react-chat-app-b332e.appspot.com",
    messagingSenderId: "46167127565",
    appId: "1:46167127565:web:261a84044539fc2cc04744",
    measurementId: "G-0BGBR2VR67"
  };
  const app = initializeApp(firebaseConfig);
  return app;
}

export default getInitializedFirebaseApp;