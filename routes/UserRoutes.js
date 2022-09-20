const express = require('express');
const { getAllUsers, createUser, deleteUser } = require('../controller/UserController');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/create', createUser);
router.delete('/delete/:id', deleteUser);

module.exports = { userRouter: router };
