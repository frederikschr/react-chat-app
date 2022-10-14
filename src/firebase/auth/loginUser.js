import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../app';

const provider = new GoogleAuthProvider();

const googleUserLogin = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
}

const defaultUserLogin = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Flash sign in message
    console.log(auth.currentUser);
  })
  .catch((error) => {
    console.log(error)
   });  
}

export { googleUserLogin, defaultUserLogin};
