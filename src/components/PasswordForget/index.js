import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

const PasswordForgetFormBase = (props) => {
  const [input, setInput] = useState({ ...INITIAL_STATE });
  const [error, setError] = useState(null);
  const firebase = props.firebase;

  const isInvalid = input.email === "";

  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    const { email } = input;

    firebase
      .doPasswordReset(email)
      .then(() => {
        setInput({ ...INITIAL_STATE });
      })
      .catch((error) => {
        setError(error);
      });

    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={input.email}
          onChange={onChange}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
