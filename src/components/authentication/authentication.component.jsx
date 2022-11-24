import React from "react";

import "./authentication.styles.scss";
import {
  auth,
  SignInWithGooglePopup,
  SignInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../sign-up/sign-up.component";
import SignIn from "../sign-in/sign-in.component";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div className="auth-containter">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
