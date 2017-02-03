var player_field = document.getElementById("player_field"); 
var player;

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
	player = JSON.parse(text);
	displayPlayer(player);
	storeJSON(player);
}

function storeJSON(JSONobject)
{
	JSONtext = JSON.stringify(JSONobject);
	localStorage.setItem("JSONtext", JSONtext);
}

function displayPlayer(player)
{
	var playerHTML;
	for (var attribute in player)
	{
		if (typeof attribute != 'undefined')
		{
			playerHTML = playerHTML + "<p>"+attribute+":"+player[attribute]+"</p><br>";
		} 
	}
	player_field.innerHTML = playerHTML;
}

/* Simple but limmited compare method */
function compare(object1, object2)
{
	if (object1.stringify() == object2.stringify())
		return true;
	else 
		return false;
}
