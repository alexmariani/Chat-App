const express = require('express');
const bodyParser = require('body-parser');
const socketConnect = require('./config/socket');
const { roomRouter } = require('./routes/RoomRoutes');
const { SERVER_PORT } = require('./config/devconfig');
const { userRouter } = require('./routes/UserRoutes');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(
	cors({
		origin: ['http://localhost:10800']
	})
);
app.use('/room', roomRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
	res.status(200).send('Hello world!!');
});

app.post('/signin', (req, res) => {
	const { username, password } = req.body;
	return username === 'admin' && password === 'password' ? res.status(200).send('OK') : res.status(403).send('Non autorizzato');
});

app.listen(SERVER_PORT, async () => {
	await socketConnect();
	console.log(`Server started at http://localhost:${SERVER_PORT}`);
});

module.exports = app;
