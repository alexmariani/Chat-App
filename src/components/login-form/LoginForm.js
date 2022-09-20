import React from 'react'
import SignIn from '../../apis/Signin'
import { GetUserContext } from '../../provider/UserProvider'
import './LoginForm.css'

const LoginForm = () => {
	const { username, setUsername, password, setPassword,setIsAuthenticated } = GetUserContext();
	return (
		<div className="form">
			<div className="card-form">
				<span className="login-text">Login Form</span>
				<input type="text" className="input" onChange={e => setUsername(e.target.value)} placeholder="Inserisci il tuo username"></input>
				<input type="password" className="input" onChange={e => setPassword(e.target.value)} placeholder="Inserisci la tua password"></input>
				<button className="submit" onClick={() => SignIn({ username, password,setIsAuthenticated })}>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
