var fs = require("fs");

fs.readFile('file.txt', function (error, file)
{
	if (error)
		return console.error(error);
	console.log(file.toString());
	console.log("read_file.js:end")
});

console.log("[file_read.js]:start")
