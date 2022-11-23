// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoB3GsZf1RixHDS_OXuvv0bzwY74VOpRc",
  authDomain: "crwn-clothing-db-997ea.firebaseapp.com",
  projectId: "crwn-clothing-db-997ea",
  storageBucket: "crwn-clothing-db-997ea.appspot.com",
  messagingSenderId: "107873338989",
  appId: "1:107873338989:web:6c0cedfa5ffe5a8b4ea164",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (er) {
      console.log(er);
    }
  } else {
    return userDocRef;
  }
};
