// userController.js
const express = require('express');
const router = express.Router();
const User = require('../model/user');
const CrudController = require('./crud.controller');

const UserRepository = require("../repository/user.repository");
const UserService = require("../service/user.service");


const userRepository = new UserRepository();
const userService = new UserService(userRepository);


const userController = new CrudController(User,userService);

router.get('/users', userController.find);
router.post('/users', userController.create);
router.get('/users/:id', userController.read);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;