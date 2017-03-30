var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var commentSchema = mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	message: {
		type: String
	},
	tag: {
		type: String
	},
	time : {
		type: Number	
	}
});

var Comment = module.exports = mongoose.model('Comment', commentSchema);
const saltRounds = 10;
module.exports.createComment = function(newComment, callback){
	newComment.save(callback); 
}

module.exports.getCommentByUsername = function(username, callback){
	var query = {username: username};
	Comment.findOne(query, callback);
}

module.exports.getCommentById = function(id, callback){
	Comment.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if (err) throw err;
    	callback(null, isMatch);
	});
}
