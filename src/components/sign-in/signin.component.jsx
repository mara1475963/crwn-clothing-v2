import React from "react";
import { SignInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign in component</h1>
      <button onClick={logGoogleUser}>Sign in with google Popup</button>
    </div>
  );
};

export default SignIn;
