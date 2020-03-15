const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();

server.use(helmet());
server.use(logger('tiny'));
server.use(express.json());
server.get('/', (req,res,next) =>{msg:`App is up and running now`});
server.use((req,res,next) => res.status(404).json({msg:'Route Not Found'}));
server.use((err,req,res,next) => res.status(500).json({msg:'Error 500-something wrong'}));

module.exports = server;