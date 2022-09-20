const room = require('../schema/RoomSchema');
const { getUniqueId } = require('../utils/UniqueId');

const createRoom = async (req, res) => {
	const { name, owner } = req.body;
	const roomObj = { id: getUniqueId(), name: name, persons: [owner], messages: [], owner: owner };
	await room
		.create(roomObj)
		.then(() => res.status(201).send('Richiesta evasa con successo'))
		.catch(e => res.status(500).send(e.getMessage()));
};

const deleteRoom = async (req, res) => {
	const { id } = req.url;
	await room
		.deleteOne({ id: id })
		.then(() => res.status(200).send('Richiesta evasa con successo'))
		.catch(e => res.status(500).send(e.getMessage()));
};

const getAllRooms = async (req, res) => {
	await room
		.find()
		.then(rooms => res.status(200).json(rooms))
		.catch(e => res.status(500).send('Qualcosa è andato storto'));
};

module.exports = { creaRoom: createRoom, deleteRoom, getAllRooms };
