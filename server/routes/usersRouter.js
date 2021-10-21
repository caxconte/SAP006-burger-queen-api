const express = require('express');

const router = express.Router();
const models = require('../db/models');

// RETORNA TODOS OS USERS
router.get('/', async (req, res, next) => {
  const users = await models.users.findAll();
  return res.send(users);
});

// INSERE UM USER
router.post('/', (req, res, next) => {
  res.status(201).send({
    message: 'Usuário foi criado',
  });
});

// RETORNA OS DADOS DE UM USER
router.get('/:uid', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Dados de um usuário',
    user_id: id,
  });
});

// ALTERA OS DADOS DE UM USER
router.put('/:uid', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Alterando dados de um usuário',
    user_id: id,
  });
});

// DELETA UM USUARIO
router.delete('/:uid', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Usuário deletado',
    user_id: id,
  });
});

module.exports = router;
