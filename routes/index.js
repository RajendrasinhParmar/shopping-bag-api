var express = require('express');
var router = express.Router();

/* Get Welcome message api. */
router.get('/', function(req, res, next) {
  res.status(200).send({ message: 'Welcome to shopping bag api' });
});

module.exports = router;
