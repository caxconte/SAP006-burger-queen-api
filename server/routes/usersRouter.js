const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'Usando o GET no usersRouter',
  });
});

router.post('/', (req, res, next) => {
  res.status(201).send({
    message: 'Usando o POST no usersRouter',
  });
});

router.get('/:uid', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Usando o GET de um usuário específico',
    user_id: id,
  });
});

router.put('/:uid', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Usando o PUT de um usuário específico',
    user_id: id,
  });
});

router.delete('/:uid', (req, res, next) => {
  const id = req.params.uid;
  res.status(200).send({
    mensagem: 'Usando o DELETE de um usuário específico',
    user_id: id,
  });
});

module.exports = router;
