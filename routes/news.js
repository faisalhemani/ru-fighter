var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var News = require('../models/news'); 

//Router handle sign up/register of new users and log in existing users
router.post('/news', function(req, res) {
	/*
	if (typeof req.user != 'undefined' && req.user.admin = true)
	{
		var username = req.user.username;//'Cynicalbird';//req.body.username;
		var message = req.body.message;
		var tag = req.body.tag;
		var time = 0;
	
		//validation 
		//req.checkBody('message', 'Email is Required').notEmpty();
		//req.checkBody('username', 'Username is Required').notEmpty();
		//req.checkBody('tag', 'Password is Required').notEmpty();
		//req.checkBody('time', 'Passwords do not match').notEmpty();

		//Determine if there are errors with request as specified above
		var errors = req.validationErrors();
		if (errors){
			/*
			res.render('register', {
				errors: errors
			});
			*/
		/*
		} else { 

			var newComment = new Comment({
				username: username,
				tag: tag,
				message: message,
				time: time
			});
			console.log(req.header.comments);
			Comment.createComment(newComment, function(err, user) {
				if (err){
					throw err;
					console.log(user);
				}
			}, function () {
				Comment.find()
				.then(function (doc){
					res.render('function', {comments:doc});
				});
			});	
  		}
	}
	else 
	{
		req.flash('error_msg', 'Please login to post to forum!');
		res.redirect('/users/login');
	}
	*/
});

router.get('/', function (req, res, next) {
	News.find()
	.then(function (doc){
			res.render('news', {news: doc});
	});
});

module.exports = router;
