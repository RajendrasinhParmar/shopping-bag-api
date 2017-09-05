var express = require('express');
var router = express.Router();
var itemController = require('../controllers/itemController');

router.get('/', function(req, res, next) {
    itemController.getAllItems(function(data){
      res.status(200).send({
        items: data.items
      });
    })
});

module.exports = router;