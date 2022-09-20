const user = require('../schema/UserSchema');
const { getUniqueId } = require('../utils/UniqueId');

const getAllUsers = async (req, res) => {
	await user
		.find()
		.then(users => res.status(200).json(users))
		.catch(e => res.status(500).send(e));
};

const createUser = async (req, res) => {
	const { username, password, isOnline } = req.body;
	console.log(req.body);
	const id = getUniqueId();
	const userObj = { id, username, password, isOnline,rooms:[] };

	console.log(userObj);
	const userRes = await user
		.create(userObj)
		.then(() => res.status(201).send('Richiesta evasa con successo'))
		.catch(e => res.status(500).send(e));
	console.log(userRes);
};

const deleteUser = async (req, res) => {
	const { id } = req.params;
    console.log(id);
	await user
		.remove({ id })
		.then(() => res.status(200).send('Richiesta evasa con successo'))
		.catch(e => res.status(500).send(e));
};

module.exports = { getAllUsers, createUser, deleteUser };
