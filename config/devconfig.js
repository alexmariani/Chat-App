const dotenv = require('dotenv');
dotenv.config();
const { SOCKET_PORT,SERVER_PORT, CLIENT_PORT, DB_URL } = process.env;
module.exports = { SOCKET_PORT, CLIENT_PORT, DB_URL,SERVER_PORT };
