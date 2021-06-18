import "./Login.css";
import { Route, Link } from "react-router-dom";

const Login = () => {
	return (
		<Route>
			<div>
				<form className="login-form">
					<p className="login-form__heading">
						Enter Your Email and password to Log In
					</p>
					<input
						type="email"
						placeholder="Enter E-Mail"
						className="login-form__email"
					></input>
					<input
						type="password"
						placeholder="Enter Password"
						className="login-form__email"
					></input>
					<button type="submit" className="login-form__submit">
						Sign In
					</button>
					<p>Don't Have an Account?</p>
					<Link to="/signup">Sign Up</Link>
				</form>
			</div>
		</Route>
	);
};

export default Login;
