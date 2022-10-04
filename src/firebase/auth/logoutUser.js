import { auth } from '../app';

const logoutUser =  () => { 
  if (auth.currentUser !== null) {
    auth.signOut();
  }
}

export default logoutUser;