function loadJSON()
{
	var request = new XMLHttpRequest();
	request.open('GET', 'player.json', true);
	request.onload = function() 
	{
		if (request.status >= 200 && request.status < 400) 
		{
			// Success!
			var data = JSON.parse(request.responseText);
			parseJSON(request.responseText);
		} 
		else 
		{
			// We reached our target server, but it returned an error
		}
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