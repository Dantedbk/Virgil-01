const express = require('express');
const router = express.Router();
const { getAPIData } = require('../controllers/apiController');

router.get('/', async (req, res) => {
  try {
    await getAPIData(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
