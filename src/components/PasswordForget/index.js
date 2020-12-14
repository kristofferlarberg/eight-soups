import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
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

const PasswordForgetPage = () => (
	<Container>
		<Heading>Återställ lösenord</Heading>
		<PasswordForgetForm />
	</Container>
);

const INITIAL_STATE = {
	email: '',
	error: null,
};

const PasswordForgetFormBase = (props) => {
	const [input, setInput] = useState({ ...INITIAL_STATE });
	const [error, setError] = useState(null);
	const firebase = props.firebase;

	const isInvalid = input.email === '';

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
		<Form onSubmit={onSubmit}>
			<Input
				name="email"
				value={input.email}
				onChange={onChange}
				type="text"
				placeholder="Email Address"
			/>
			<ButtonGreen
				disabled={isInvalid}
				text="Återställ"
				type="submit"
			/>

			{error && <Info>{error.message}</Info>}
		</Form>
	);
};

const PasswordForgetLink = () => (
	<Info>
		<Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
	</Info>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
