const express = require('express');
const authRouter = require('../auth/router');
const userRouter = require('../users/router');
const instructorRouter = require('../instructor/router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/auth', authRouter);
server.use('/api/auth/classes', userRouter);
server.use('/api/auth/instructor', instructorRouter);

module.exports = server;
