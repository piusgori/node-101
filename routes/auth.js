const express = require('express');
const authController = require('../controllers/auth');

const authRouter = express.Router();

authRouter.post('/register', authController.register);

module.exports = authRouter;