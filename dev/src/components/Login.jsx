import React, {useState} from 'react';

export default function Login() {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');

	function handleSubmission(e) {
		e.preventDefault();
		console.log('Submitted!');
	}

	function handleEmailChange(e) {
		setEnteredEmail(e.target.value);
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
						onChange={handleEmailChange}
						value={enteredEmail}
					/>
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
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
