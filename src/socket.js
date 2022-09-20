const { io } = require('socket.io-client');
const socket = io('http://localhost:20400', { transports: ['websocket'] });
export default socket;