const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
	id: String,
	writer: { type: Schema.Types.ObjectId, ref: 'User' },
	body: String,
	date: Date,
	room: { type: Schema.Types.ObjectId, ref: 'Room' }
});

const message = mongoose.model('Message', messageSchema);

module.exports = message;
