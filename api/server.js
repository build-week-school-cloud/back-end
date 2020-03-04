const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const trainingsRouter = require('../trainings/trainings-router');
const volunteersRouter = require('../volunteers/volunteers-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(isAdmin);

server.use('/api/auth', authRouter);
server.use('/api/student', authenticate, checkRole, volunteersRouter);
server.use('/api/volunteer', authenticate, checkRole, volunteersRouter, trainingsRouter);
server.use('/api/admin', authenticate, checkRole('Administrator'), trainingsRouter);

function checkRole(role){
    return (req, res, next) => {
      if (
        req.decodedToken &&
        req.decodedToken.role &&
        req.decodedToken.role.toLowerCase() === role) {
        next();
      } else {
        res.status(403).json({you: "shall not pass"});
      }
    }
  }

// function isAdmin(req, res, next) {
//     if (req.decodedToken && 
//         req.decodedToken.role.toLowerCase() === 'administrator' 
//     )  {
//         next();
//     } else {
//         res.send('You are not an authorized administrator!'); 
//     }  
// }
// function isStudent(req, res, next) {
//     if (req.decodedToken && 
//         req.decodedToken.role.toLowerCase() === 'student')  {
//         next();
//     } else {
//         res.send('You are not a student!'); 
//     }
// }

// function isVolunteer(req, res, next) {
//     if (req.decodedToken && 
//         req.decodedToken.role.toLowerCase() === 'volunteer')  {
//         next();
//     } else {
//         res.send('You are not an authorized volunteer!'); 
//     }
    
// }

  
// if Users.Role = admin, return admin home
// 3 middlewares
// isAdmin, isStudent, isVolunteer 

module.exports = server;