const express = require('express');

const app = express();
const cors = require('cors');

const usersRouter = require('./server/routes/usersRouter');

const productsRouter = require('./server/routes/productsRouter');

app.use('/users', usersRouter);

app.use('/products', productsRouter);

app.use(cors());

module.exports = app;
