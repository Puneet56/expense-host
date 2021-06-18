import "./Signup.css";
import { Route, Link } from "react-router-dom";

const Signup = () => {
	return (
		<Route>
			<div>
				<form className="signup-form">
					<p className="signup-form__heading">
						Set a Username, Enter Your Email and password to Sign Up.
					</p>
					<input
						type="text"
						placeholder="Set username"
						className="signup-form__username"
					></input>
					<input
						type="email"
						placeholder="Enter E-Mail"
						className="signup-form__email"
					></input>
					<input
						type="password"
						placeholder="Enter Password"
						className="signup-form__email"
					></input>
					<button type="submit" className="signup-form__submit">
						Sign Up
					</button>
					<p>Already Have an Account?</p>
					<Link to="/login">Log In</Link>
				</form>
			</div>
		</Route>
	);
};

export default Signup;
