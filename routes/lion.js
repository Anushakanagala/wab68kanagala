var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lion', { title: 'Search results Lion' });
});

module.exports = router;
