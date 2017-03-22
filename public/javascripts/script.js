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

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
