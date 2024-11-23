import React, {useState} from 'react';
import Input from './Input.jsx';

export default function Login() {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [enteredPassword, setEnteredPassword] = useState('');

	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});
	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');

	function handleSubmission(e) {
		e.preventDefault();
		// console.log(`'enteredEmail: ${enteredEmail}`);
		// console.log(`'enteredPassword: ${enteredPassword}`);
		console.log(`'enteredEmail: ${enteredValues.email}`);
		console.log(`'enteredPassword: ${enteredValues.password}`);
	}

	function handleInputChange(e, identifier) {
		setEnteredValues((prevState) => ({
			...prevState,
			[identifier]: e.target.value ?? null,
		}));
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: false,
		}));
	}

	function handleEmailChange(e) {
		setEnteredEmail(e.target.value);
	}
	function handlePasswordChange(e) {
		setPasswordEmail(e.target.value);
	}

	function handleInputBlur(identifier) {
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: true,
		}));
	}

	return (
		<form onSubmit={handleSubmission}>
			<h2>Login</h2>

			<div className='control-row'>
				<Input
					label='Email'
					type='email'
					error={emailIsInvalid && 'Email Wrong'}
					onBlur={() => handleInputBlur('email')}
					onChange={(e) => handleInputChange(e, 'email')}
					value={enteredValues.email}
				/>
				<Input
					label='Password'
					id='password'
					type='password'
					name='password'
					error={''}
					onBlur={() => handleInputBlur('password')}
					onChange={(e) => handleInputChange(e, 'password')}
					value={enteredValues.password}
				/>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
