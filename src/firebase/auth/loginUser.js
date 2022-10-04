import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../app';

const login = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Flash sign in message
    console.log(auth.currentUser);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export default login;
