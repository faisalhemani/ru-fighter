var http = require("http");

http.createServer(function (request, response)
{
	//Send HTTP header (status as 200 (ok), content type text/plain)
	response.writeHead(200, {'Content-Type':'text/plain'});
	//Send response body as "Hello world"
	response.end('Hello world\n');
	
}).listen(8081);

console.log('Server is on localhost:8081');
