const express = require('express');

const app = express();
const cors = require('cors');

const usersRouter = require('./server/routes/usersRouter');

app.use('/users', usersRouter);

app.use(cors());

module.exports = app;
