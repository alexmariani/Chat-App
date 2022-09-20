import React from 'react'
import LoginForm from '../components/login-form/LoginForm'
import { UserProvider } from '../provider/UserProvider'

const Login = () => {
	return (
		<>
			<div className="container">
				<UserProvider>
					<LoginForm></LoginForm>
				</UserProvider>
			</div>
		</>
	);
};



export default Login;
