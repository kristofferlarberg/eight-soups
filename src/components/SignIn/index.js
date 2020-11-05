import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components/macro";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </>
);

const INITIAL_STATE = {
  email: "",
  password: "",
};

const SignInFormBase = (props) => {
  const [input, setInput] = useState({ ...INITIAL_STATE });
  const [error, setError] = useState(null);
  const history = useHistory();
  const firebase = props.firebase;

  const isInvalid = input.password === "" || input.email === "";

  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    const { email, password } = input;

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setInput({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setError(error);
      });

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={input.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={input.password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
