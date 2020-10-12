import React, { Component, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { compose } from "recompose";

import FirebaseContext, { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const SignUpFormBase = () => {
  const [input, setInput] = useState({ ...INITIAL_STATE });
  const history = useHistory();
  const firebase = React.useContext(FirebaseContext);
  console.log(React.useContext(FirebaseContext));
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
        setInput({ error });
      });

    event.preventDefault();
    
  };



  const onChange = (event) => {
    setInput({ [event.target.name]: event.target.value });
  };

  const isInvalid =
    input.passwordOne !== input.passwordTwo ||
    input.passwordOne === "" ||
    input.email === "" ||
    input.username === "";
  
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

      {input.error && <p>{firebase.error.message}</p>}
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
