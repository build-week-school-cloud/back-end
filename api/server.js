const express = require('express');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const trainingsRouter = require('../trainings/trainings-router');
const volunteersRouter = require('../volunteers/volunteers-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/trainings', authenticate, trainingsRouter);
server.use('/api/volunteers', authenticate, volunteersRouter);

module.exports = server;