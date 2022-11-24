import React from "react";
import { useState } from "react";

import "./sign-in.styles.css";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  SignInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/formi-input.component";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    setFormFields(defaultFields);
  };
  const handleSubmit = async (e) => {
    try {
      const { user } = await SignInWithGooglePopup(email, password);
      console.log(user);

      resetFormField();
    } catch (err) {
      console.log(err);
    }
  };

  const SignInWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormField();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("user not found");
          break;
        default:
          console.log(err);
      }
      console.log(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have acc?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={SignInWithGoogle} buttonType="google">
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
