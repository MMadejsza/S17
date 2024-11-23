function Input({label, id, error, ...props}) {
	return (
		<div className='control no-margin'>
			<label htmlFor='email'>{label}</label>
			<input
				id={id}
				{...props}
			/>
			{error && <p>{error}</p>}
		</div>
	);
}

export default Input;
