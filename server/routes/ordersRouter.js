const express = require('express');

const router = express.Router();

// RETORNA TODOS OS USERS
router.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'Usando o GET no ordersRouter',
  });
});

// INSERE UM USER
router.post('/', (req, res, next) => {
  res.status(201).send({
    message: 'Usando o POST no ordersRouter',
  });
});

// RETORNA OS DADOS DE UM USER
router.get('/:orderId', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Usando o GET de um usuário específico',
    user_id: id,
  });
});

// ALTERA OS DADOS DE UM USER
router.put('/:orderId', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Usando o PUT de um usuário específico',
    user_id: id,
  });
});

// DELETA UM USUARIO
router.delete('/:orderId', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Usando o DELETE de um usuário específico',
    user_id: id,
  });
});

module.exports = router;
