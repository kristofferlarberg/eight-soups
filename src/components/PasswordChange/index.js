import React, { useState } from "react";
import styled from "styled-components/macro";

import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
};

const PasswordChangeForm = (props) => {
  const [input, setInput] = useState({ ...INITIAL_STATE });
  const [error, setError] = useState(null);
  const firebase = props.firebase;

  const isInvalid =
    input.passwordOne !== input.passwordTwo || input.passwordOne === "";

  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    const { passwordOne } = input;

    firebase
      .doPasswordUpdate(passwordOne)
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
        name="passwordOne"
        value={input.passwordOne}
        onChange={onChange}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={input.passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm New Password"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
    </>
  );
};

export default withFirebase(PasswordChangeForm);
