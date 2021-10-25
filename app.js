const express = require('express');

const app = express();
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('./server/routes/usersRouter');
const ordersRouter = require('./server/routes/ordersRouter');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productsRouter = require('./server/routes/productsRouter');

app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);

app.use(cors());

module.exports = app;
