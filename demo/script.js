function loadJSON()
{
	//HTTP request to server
	var request = new XMLHttpRequest();
	request.open('GET', 'player.json', true);
	
	request.onload = function() 
	{
		//Successfull request
		if (request.status >= 200 && request.status < 400) 
		{
			parseJSON(request.responseText);
		} 
		//Unsuccessfull request
		else {}
	};

	request.onerror = function() 
	{
	// There was a connection error of some sort
	};

	request.send();
}

function parseJSON(text)
{
	alert(text);
}