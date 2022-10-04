import getInitializedFirebaseApp from "./init";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const firebase = getInitializedFirebaseApp();

const db = getFirestore(firebase);
const auth = getAuth(firebase);

const UserAuthContext = createContext();

export { firebase, db, auth, UserAuthContext }

