var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/rufighter';

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
	res.render('index', { title: 'RU-Fighter' });
});


router.get('/team', function(req,res,next) {
	res.render('team', { title: 'RU-Fighter - Team'});
});

router.get('/news', function(req,res,next) {
	res.render('news', { title: 'RU-Fighter - News'});
});

router.get('/get-players', function (req, res, next) {
	var results = [];
	mongo.connect(url, function (err, db) {
		assert.equal(null, err);
		var cursor = db.collection('players').find();
		cursor.forEach(function (doc, err) {
			assert.equal(null, err);	
			results.push(doc);
		}, function() {
			db.close();
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify(results));
		});
	});
});

/*
router.get('/forum', function (req, res, next) {
	var results = [];
	if (typeof req.user != 'undefined')
	{
		req.flash('error_msg', 'You are not logged in!');
		res.redirect('login');
	}
	mongo.connect(url, function (err, db) {
		assert.equal(null, err);
		var cursor = db.collection('comments').find();
		cursor.forEach(function (doc, err) {
			assert.equal(null, err);
			results.push(doc);		
		}, function () {
			db.close();
			res.render('forum', {comments: results});
		});
	});
});
*/

/*
router.get('/forum', function (req, res, next) {
	res.render('forum', { title: 'RU-Fighter - Forum'});
}); */

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login');
	}	
}

module.exports = router;
