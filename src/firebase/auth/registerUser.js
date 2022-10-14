
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../app';

const registerUser = async (name, password, email) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    updateProfile(userCredential.user, { displayName: name});
  })
  .catch((error) => {
    console.log(error);
  });
}

export default registerUser;