import './Signup.css';
import { useRef } from 'react';
import { Route, Link } from 'react-router-dom';

const Signup = () => {
	const form = useRef();
	const username = useRef();
	const email = useRef();
	const password = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		let data = {
			email: email.current.value,
			password: password.current.value,
			displayName: username.current.value,
		};
		fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCV9lDZXZLbrL-kWUYb1zB7neRvq1X9SBw',
			{
				method: 'POST',
				body: JSON.stringify({
					email: data.email,
					password: data.password,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then((res) => {
			if (res.ok) {
				res.json().then((data) => {
					console.log(data.idToken);
				});
			} else {
				let errorMessage = 'Authentication Failed';
				alert(errorMessage);
			}
		});
		form.current.reset();
	};

	return (
		<Route>
			<div>
				<form className='signup-form' onSubmit={submitHandler} ref={form}>
					<p className='signup-form__heading'>
						Set a Username, Enter Your Email and password to Sign Up.
					</p>
					<input
						type='text'
						placeholder='Set username'
						className='signup-form__username'
						ref={username}
						required
					></input>
					<input
						type='email'
						placeholder='Enter E-Mail'
						className='signup-form__email'
						ref={email}
						required
					></input>
					<input
						type='password'
						placeholder='Enter Password'
						className='signup-form__password'
						ref={password}
						required
					></input>
					<button type='submit' className='signup-form__submit'>
						Sign Up
					</button>
					<p>Already Have an Account?</p>
					<Link to='/login'>Log In</Link>
				</form>
			</div>
		</Route>
	);
};

export default Signup;
