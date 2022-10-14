import getInitializedFirebaseApp from "./init";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';

const firebase = getInitializedFirebaseApp();

const db = getFirestore(firebase);
const auth = getAuth(firebase);

const UserAuthContext = createContext();

export { firebase, db, auth, UserAuthContext }

