var position = {
	latitude : 43.65,
	longitude : -79.36
};

var news_url = 'http://35.162.14.150:3000';
var url = 'http://35.162.14.150:8080/';
var comments = 'api/comments';

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

function request_news()
{
	log('request_news', 'started');
	var request = new XMLHttpRequest();
	request.open('GET', news_url,true);
	request.onload = new function ()
	{
		if (request.status >= 200 && request.status < 400)
		{
			log('request_news', request.responseText);
		}
		else	
		{
			alert("News request denied");
		}
	};
	request.onerror = new function ()
	{
		alert("Error on request for news");
	};
	request.send();
}

function request_comments()
{
	log('request_comments','started');
	var request = new XMLHttpRequest();
	request.open('GET','http://35.162.14.150:8080/api/comments/' , true);
	log('request_comments', url+comments);
	request.onload = new function ()
	{
		log('request_comments', request.status);
		if ( request.status >= 200 & request.status < 400)
		{
			//log('request_comments', request.responseText);
			render_comments(JSON.parse(request.responseText));
		}
		else
		{
			alert('News request denied');
		}
	};
	request.onerror = new function ()
	{
		alert('Error on request for comments');
	};
	request.send();
}	

function render_comments(comments)
{
	var comments_container = document.getElementById('comments-container');
	comments_container.innnerHTML = comments.message;
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
  interval: 1000 * 3
});

// for every slide in carousel, copy the next slide's item in the slide. Do the same for the next, next item.
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
