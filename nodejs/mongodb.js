//Require mongo db drives
var mongodb = require('mongodb');

var http = require('http');

var url = require('url');

//Work with "MongoClient" interface for MonogoDB.
var MongoClient = mongodb.MongoClient;

//MongoDB server url
var server = 'mongodb://localhost:27017/test';

var query="";

//Callback
MongoClient.connect(server, function (error, db) 
{
	if (error) 
	{
		//Failed to connect
		console.log('Unable to connect to the mongoDB server. Error:', error);
	} 
	else 
	{
    		//Connected 
    		console.log('Connection established to', server);
		
		collection = db.collection('player');
		collection.find().toArray(function (error, result)
		{
			if (error)
			{
				console.log(error);
			}
		
			else
			if (result.length)
			{
				var s="";
				//response = result;
				for (var i = 0; i < result.length; i++)
				{	
					console.log(property+"*\n");
					for (var property in result[i])
					{
						console.log(property+"^\n");
						s=s+property+":"+result[i][property]+", ";
					}
				}	
				query = s;	
				console.log(s+"@");	
			}
			else
			{
				console.log("Nothing found");
			}
		});		
		
    		//Close connection
    		db.close();
  	}
});

http.createServer(function (request, response)
{
	//Send HTTP header (status as 200 (ok), content type text/plain)
	response.writeHead(200, {'Content-Type':'text/plain'});
	//Send response body as "Hello world"
	response.end(query+'Hello world\n');	
}).listen(8081);
