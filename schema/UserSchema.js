const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	username: String,
	password: String,
	isOnline: Boolean,
	rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }]
});

const user = mongoose.model('User', userSchema);

module.exports = user;
