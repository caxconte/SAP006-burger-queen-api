const { Router } = require('express');
const { getExample, getOtherExample, teste } = require('../controller/exampleController');

const router = Router();

// aqui vai as requisições
router.get('/', getExample);
router.get('/teste', teste);
router.get('/other', getOtherExample);

module.exports = router;
