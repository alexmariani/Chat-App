import axios from 'axios'
import configData from '../config/dev.config.json'

const { SERVER_URL, SERVER_PORT } = configData;

const SignIn = ({ username, password }) => {
	return axios.post(`${SERVER_URL}:${SERVER_PORT}/signin`, { username, password });
};

export default SignIn;
