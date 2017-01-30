

function initializeGame()
{
	alert("Game started");
	var playerdata = '{ name: "alex", level: "0" }';
	alert(playerdata);
	var player = JSON.parse(playerdata);
	alert(player);
	alert("Game ended");		
}
