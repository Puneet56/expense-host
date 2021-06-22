import './Login.css';
import { useRef } from 'react';
import { Route, Link } from 'react-router-dom';

const Login = ({ getLoginData }) => {
	const form = useRef();
	const email = useRef();
	const password = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		let data = {
			email: email.current.value,
			password: password.current.value,
		};
		fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCV9lDZXZLbrL-kWUYb1zB7neRvq1X9SBw',
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
					getLoginData(data.email);
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
				<form onSubmit={submitHandler} className='login-form' ref={form}>
					<p className='login-form__heading'>
						Enter Your Email and password to Log In
					</p>
					<input
						type='email'
						placeholder='Enter E-Mail'
						className='login-form__email'
						ref={email}
					></input>
					<input
						type='password'
						placeholder='Enter Password'
						className='login-form__password'
						ref={password}
					></input>
					<button type='submit' className='login-form__submit'>
						Log In
					</button>
					<p>Don't Have an Account?</p>
					<Link to='/signup'>Sign Up</Link>
				</form>
			</div>
		</Route>
	);
};

export default Login;
