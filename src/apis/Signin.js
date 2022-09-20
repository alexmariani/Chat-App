import axios from 'axios'
import configData from '../config/dev.config.json'

const { SERVER_URL, SERVER_PORT } = configData;

const SignIn = ({ username, password, setIsAuthenticated }) =>
	axios
		.post(`${SERVER_URL}:${SERVER_PORT}/signin`, { username, password })
		.then(res => {
			if (res.status === 200) {
				console.log('autenticato');
				setIsAuthenticated(true);
			} else console.log('Login errato');
		})
		.catch(e => console.error(e));

export default SignIn;
