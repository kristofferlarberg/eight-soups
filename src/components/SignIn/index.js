import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { compose } from 'recompose';
import styled from 'styled-components/macro';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
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

const SignInPage = () => (
	<Container>
		<Heading>Logga in</Heading>
		<SignInForm />
		<PasswordForgetLink />
		<SignUpLink />
	</Container>
);

const INITIAL_STATE = {
	email: '',
	password: '',
};

const SignInFormBase = (props) => {
	const [input, setInput] = useState({ ...INITIAL_STATE });
	const [error, setError] = useState(null);
	const history = useHistory();
	const firebase = props.firebase;

	const isInvalid = input.password === '' || input.email === '';

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
		<Form onSubmit={onSubmit}>
			<Input
				name="email"
				value={input.email}
				onChange={onChange}
				type="text"
				placeholder="Email Address"
			/>
			<Input
				name="password"
				value={input.password}
				onChange={onChange}
				type="password"
				placeholder="Password"
			/>
			<ButtonGreen disabled={isInvalid} text="Logga in" type="submit" />
			{error && <Info>{error.message}</Info>}
		</Form>
	);
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
