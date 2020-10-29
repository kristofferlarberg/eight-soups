import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";

import { withFirebase } from "../Firebase";
import { MainTemplate } from "../../styles/templates";

import * as ROUTES from "../../constants/routes";

const Main = styled.main`
  ${MainTemplate}
`;

const SignUpPage = () => (
  <Main>
    <h1>SignUp</h1>
    <SignUpForm />
  </Main>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUpFormBase = (props) => {
  const [input, setInput] = useState({ ...INITIAL_STATE });
  const [error, setError] = useState(null);
  const history = useHistory();
  const firebase = props.firebase;

  const isInvalid =
    input.passwordOne !== input.passwordTwo ||
    input.passwordOne === "" ||
    input.email === "" ||
    input.username === "";

  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    const { username, email, passwordOne } = input;

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then((authUser) => {
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
        name="username"
        value={input.username}
        onChange={onChange}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={input.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={input.passwordOne}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordTwo"
        value={input.passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
