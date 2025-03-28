const express = require('express');
const router = express.Router();

const OcorrenciasController = require('../controllers/ocorrencias');

router.get('/ocorrencias', OcorrenciasController.listarOcorrencias);

module.exports = router;