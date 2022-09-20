import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SignIn from '../../apis/Signin'
import { login } from '../../slice/UserSlice'
import './LoginForm.css'

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [credentialError, setCredentialError] = useState('');
	const dispatch = useDispatch();

	const loginAction = () => {
		const result = SignIn({ username, password });
		result.then(() => {dispatch(login({ username, password }));setCredentialError('')}).catch(e => setCredentialError('Username o password errati'));
	};

	return (
		<div className="form">
			<div className="card-form">
				<span className="login-text">Login Form</span>
				<input type="text" className="input" onChange={e => setUsername(e.target.value)} placeholder="Inserisci il tuo username"></input>
				<input type="password" className="input" onChange={e => setPassword(e.target.value)} placeholder="Inserisci la tua password"></input>
				<div className='danger'>{credentialError}</div>
				<button className="submit" onClick={loginAction}>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
