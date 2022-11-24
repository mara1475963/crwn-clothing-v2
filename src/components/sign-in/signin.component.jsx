import React from "react";

import {
  auth,
  SignInWithGooglePopup,
  SignInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUp from "../sign-up/sign-up.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>Sign in component</h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
