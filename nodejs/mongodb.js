//Require mongo db drives
var mongodb = require('mongodb');

var http = require('http');

var url = require('url');

var json = require('json');

var express = require('express');

var service = express();

var fs = require('fs');

//Work with "MongoClient" interface for MonogoDB.
var MongoClient = mongodb.MongoClient;

//MongoDB server url
var server = 'mongodb://localhost:27017/ru-fighter';

var query="";

var JSONquery = new Array();

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
		
		collection = db.collection('players');
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
						//console.log(property+"^\n");
						s=s+property+":"+result[i][property]+", ";
					}
					JSONquery.push(result[i]);
				}	
				query = s;	
				//console.log(s+"@");	
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

service.all('/response.json', function(request, response, next) 
{
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

service.get('/response.json', function(request, response)
{
	//console.log(JSON.stringify(JSONquery[0]));
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	response.json(JSONquery);
});

var server = service.listen(8081, function()
{
	var host = server.address().address;
	var port = server.address().port;
});

/*
http.createServer(function (request, response)
{
	// Request methods you wish to allow
	//response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	//Send HTTP header (status as 200 (ok), content type text/plain)
	response.writeHead(200, {'Content-Type':'application/json'});
	//Send response body as "Hello world"
	response.json(JSON.stringify(JSONquery));	
}).listen(3000);

*/
