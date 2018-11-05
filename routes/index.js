var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/browserdif', function(req, res, next) {
  res.render('browserdif', { title: 'Dif' });
});

module.exports = router;
