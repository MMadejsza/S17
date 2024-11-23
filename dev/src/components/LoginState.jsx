import React, {useState} from 'react';

export default function Login() {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [enteredPassword, setEnteredPassword] = useState('');

	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

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
	}

	function handleEmailChange(e) {
		setEnteredEmail(e.target.value);
	}
	function handlePasswordChange(e) {
		setPasswordEmail(e.target.value);
	}

	return (
		<form onSubmit={handleSubmission}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						onChange={(e) => handleInputChange(e, 'email')}
						value={enteredValues.email}
					/>
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						onChange={(e) => handleInputChange(e, 'password')}
						value={enteredValues.password}
					/>
				</div>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
