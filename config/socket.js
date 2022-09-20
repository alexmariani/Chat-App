const { Server } = require('socket.io');
const { CLIENT_PORT, SOCKET_PORT } = require('./devconfig');
const { createServer } = require('http');
const connectToMongo = require('./mongo');
const app = require('..');

const httpServer = createServer(app);

const socketConnect = () => {
	/**
	 * TODO => Costruzione server per scambio messaggio tra client e server
	 */
	const io = new Server(httpServer, {
		cors: {
			origin: `http://localhost:/${CLIENT_PORT}`
		}
	});

	/**
	 * TODO => Server in ascolto sull'evento 'Connection' + passaggio di callback per gestire l'azione da eseguire
	 */
	io.on('connection', socket => {
		console.log(`client id:${socket.id} connected`);

		socket.on('send_msg', ({ user, newMessage, room }) => {
			console.log(`User:${JSON.stringify(user)} nuovo messaggio:${newMessage} registrato dalla room :${JSON.stringify(room)}`);
		});

		socket.on('disconnect', reason => {
			console.log(`disconnect ${socket.id} due to ${reason}`);
		});
	});

	httpServer.listen(SOCKET_PORT, async () => {
		await connectToMongo();
		console.log(`Socket started at http://localhost:${SOCKET_PORT}/`);
	});
};

module.exports = socketConnect;
