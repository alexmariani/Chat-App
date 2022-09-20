const express = require('express');
const { creaRoom, deleteRoom, getAllRooms } = require('../controller/RoomController');
const router = express.Router();

router.post('/crea', creaRoom);
router.delete('/elimina/:id', deleteRoom);
router.get('/', getAllRooms);

module.exports = { roomRouter: router };
