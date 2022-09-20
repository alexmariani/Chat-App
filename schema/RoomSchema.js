const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
	id: String,
	name: String,
	persons: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
	owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

const room=mongoose.model('Room',roomSchema);

module.exports = room;
