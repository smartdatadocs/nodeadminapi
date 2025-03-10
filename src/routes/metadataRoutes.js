const express = require('express');
const { getAllMetadata, saveMetadata } = require('../controllers/metadataController');

const router = express.Router();

router.get('/getAllMetadata', getAllMetadata);
router.post('/saveMetadata', saveMetadata);

module.exports = router;