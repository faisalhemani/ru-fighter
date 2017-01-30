function loadPlayerData()
{
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'part2.json');
        ourRequest.onload = function(){
        if(ourRequest.status>=200 && ourRequest.status<400)	
	{
        	var ourData = JSON.parse(ourRequest.responseText);
                renderHTML(ourData);
      	} 
	else
	{
        	console.log("server error");
        }
}

