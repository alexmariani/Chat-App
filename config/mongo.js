const { DB_URL } = require('./devconfig');

const mongoose = require('mongoose');

const connectToMongo = async () => {
	try {
		await mongoose
			.connect(`${DB_URL}`)
			.then(() => console.log('Connected!'))
			.catch(e => console.error(e));
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};
module.exports = connectToMongo;
