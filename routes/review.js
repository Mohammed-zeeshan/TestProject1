const express = require("express");

const router = express.Router();

const path = require('path');

const reviewController = require('../controllers/review');

router.get('/', reviewController.getreviews);

router.get('/addreview', reviewController.getpostreview);

router.post('/addreview', reviewController.postreview);

router.post('/searchreview', reviewController.searchreview);

module.exports = router;