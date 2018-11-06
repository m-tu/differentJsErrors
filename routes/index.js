var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/browserdif', function(req, res, next) {
  res.render('browserdif', { title: 'Dif' });
});

router.get('/res-code-0', function(req, res, next) {
  res.render('rescode0', { title: 'Dif' });
});

router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Dif' });
});

router.get('/different-error-msg', function(req, res, next) {
  res.render('different-error-msg', { title: 'Dif' });
});

module.exports = router;
