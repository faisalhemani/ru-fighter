var position = {
	latitude : 43.65,
	longitude : -79.36
};

function geo_locate()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(store_coords);
	}
	else
	{
		alert("Location could not be found");
	}
}

function store_coords(position)
{
	this.position.latitude = position.coords.latitude;
	this.position.longitude = position.coords.longitude;
	logPosition();
}	

function log_position()
{
	log(position);
}

//Standard log for consistent notation in console
function log(tag, message)
{
	console.log("["+tag+"]"+" : "+message);
}
