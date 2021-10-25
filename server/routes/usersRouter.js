const express = require('express');

const router = express.Router();
const models = require('../db/models');

// RETORNA TODOS OS USERS
router.get('/', async (req, res, next) => {
  models.users
    .findAll({
      attributes: {
        exclude: 'password',
      },
    })
    .then((response) => {
      // console.log(response);
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).json({
        code: error.code,
        error: error.message,
      });
    });
});

// INSERE UM USER
router.post('/', async (req, res, next) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;

  models.users
    .create({
      name,
      email,
      password,
      role,
      restaurant,
    })
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.status(400).json({
        code: error.code,
        error: error.message,
      });
    });
});

// RETORNA OS DADOS DE UM USER
router.get('/:uid', (req, res, next) => {
  models.users.findByPk(req.params.uid, {
    attributes: {
      exclude: 'password',
    },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).json({
        code: error.code,
        error: error.message,
      });
    });
});

// ALTERA OS DADOS DE UM USER
router.put('/:uid', (req, res, next) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;

  models.users
    .update({
      name,
      email,
      password,
      role,
      restaurant,
    },
    {
      where: {
        id: req.params.uid,
      },
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).json({
        code: error.code,
        error: error.message,
      });
    });
});

// DELETA UM USUARIO
router.delete('/:uid', (req, res, next) => {
  models.users.destroy({
    where: {
      id: req.params.uid,
    },
  })
    .then(() => {
      res.status(200).send({
        message: 'User successfully deleted!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        code: error.code,
        error: error.message,
      });
    });
});

module.exports = router;
