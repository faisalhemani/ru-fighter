var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game_engine', function(req, res, next){
	res.render('index', {title: 'RU-Fighter'});
});

module.exports = router;
