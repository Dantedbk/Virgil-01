const express = require('express');
const router = express.Router();

const { getAPIData } = require('../controllers/apiController');

router.get('/', async (req, res) => {
  await getAPIData(req, res);
});

module.exports = router;
