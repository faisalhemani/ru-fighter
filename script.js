var player = new Object();

//Basic player prototype WIP
/*
var player = {
	name,
	level,
	hp,
	maxhp,
	exp,
	ramz,
	hair,
	face,
	eyes,
	skin,
	flacility,
	wins,
	loss
};
*/

function storePlayerData()
{	
	var name_field = document.getElementById("name_field");
	//var facility = document.getElementById("facility_field");

	player.name = name_field.value;
	player.hp = 50;
	alert("Player name stored: "+player.name);	
	//player.facility = facility.value;					
}

function loadJSON()
{
	var request = new XMLHttpRequest();
	request.open('GET', 'player.json', true);
	request.onload = function()
	{
		if(ourRequest.status>=200 && ourRequest.status<400)
		{
			var ourData = JSON.parse(ourRequest.responseText);
			parseJSON(request.responseText);
		} 
		else
		{
			console.log("server error");
		}
	}
}

/*
function parseJSON()
{

}
*/

