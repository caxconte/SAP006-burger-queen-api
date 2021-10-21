// GET /products
// GET /products/:productid
// POST /products
// PUT /products/:productid
// DELETE /products/:productid

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //console.log(req.headers)
  res.status(200).send({
    message: 'Usando o GET no productsRouter',
  });
});

router.get('/:uid', (req, res, next) => {
    console.log('viado')
  res.status(200).send({
    message: 'Usando o POST no products-id-Router',
  });
});


module.exports = router;
