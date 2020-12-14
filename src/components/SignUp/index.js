import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import {
	FormTemplate,
	InputTemplate,
	RegularH4Template,
} from '../../styles/templates';
import { ButtonGreen } from '../misc/Button';

const Container = styled.section`
	margin: 0 var(--halfspace) var(--lineheight) var(--halfspace);
	height: auto;
`;

const Heading = styled.h2`
	margin: var(--lineheight) 0 var(--lineheight) 0;
`;

const Form = styled.form`
	${FormTemplate}
`;

const Input = styled.input`
	${InputTemplate}
	margin-bottom: var(--lineheight);
	background-color: white;
`;

const Info = styled.h4`
	${RegularH4Template}
`;

const SignUpPage = () => (
	<Container>
		<Heading>Skapa konto</Heading>
		<SignUpForm />
	</Container>
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
		<Form onSubmit={onSubmit}>
			<Input
				name="username"
				value={input.username}
				onChange={onChange}
				type="text"
				placeholder="Full Name"
			/>
			<Input
				name="email"
				value={input.email}
				onChange={onChange}
				type="text"
				placeholder="Email Address"
			/>
			<Input
				name="passwordOne"
				value={input.passwordOne}
				onChange={onChange}
				type="password"
				placeholder="Password"
			/>
			<Input
				name="passwordTwo"
				value={input.passwordTwo}
				onChange={onChange}
				type="password"
				placeholder="Confirm Password"
			/>
				<ButtonGreen
					disabled={isInvalid}
					text="Skicka"
					type="submit"
				/>
			{error && <Info>{error.message}</Info>}
		</Form>
  );
};

const SignUpLink = () => (
  <Info>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </Info>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
