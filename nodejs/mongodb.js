//Require mongo db drives
var mongodb = require('mongodb');

//Work with "MongoClient" interface for MonogoDB.
var MongoClient = mongodb.MongoClient;

//MongoDB server url
var url = 'mongodb://192.168.1.2:27017/test';

//Callback
MongoClient.connect(url, function (err, db) {
	if (err) 
	{
		//Failed to connect
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} 
	else 
	{
    		//Connected 
    		console.log('Connection established to', url);
		

    		//Close connection
    		db.close();
  	}
});
