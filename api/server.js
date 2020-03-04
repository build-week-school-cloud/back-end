const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const adminRouter = require('../admin/admin-router');
const volunteersRouter = require('../volunteers/volunteers-router');
const userDb = require('../auth/users-model');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(isAdmin);

server.use('/api/auth', authRouter);
server.use('/api/admin', authenticate, isAdmin, adminRouter);

server.get("/", (req, res) => {
    res.json("It's alive!");
  });

function isAdmin (req, res, next){
    if (req.decodedToken.role === "administrator"){
        next()
    } else {
        res.status(400).json({message: "not an admin"})
    }
}

function isVolunteer (req, res, next){
    if (req.decodedToken.role === "volunteer"){
        next()
    } else {
        res.status(400).json({message: "not a volunteer"})
    }
}

function isStudent (req, res, next){
    if (req.decodedToken.role === "student"){
        next()
    } else {
        res.status(400).json({message: "not a student"})
    }
}

module.exports = server;