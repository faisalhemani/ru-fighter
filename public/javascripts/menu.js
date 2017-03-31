var url = 'http://35.162.14.150';

var menu = {
        preload: function () {
                console.log("MENUUUU");

        console.log("calling the server");
        var request = new XMLHttpRequest();
        var port = ':8081';
        request.open('GET','http://35.162.14.150:8081',true);
        request.onload = function ()
        {
                if (request.status >= 200 && request.status < 400)

                {
                        var object = JSON.parse(request.response);
                        console.log(object);
                        storeJSON(object);
                }
                else
                {
                        log(['callingServer', 'onload'],'game server denied request');
                        alert("game server could not be reached");
                }
        };
        request.onerror = function ()
        {
                alert("error");
        }
        request.send();


	function storeJSON(JSON_object)
	{

		console.log("inside the store Json")
		console.log(player.name);
	/*
        uhp = JSON_object[0].stats.hp;
        ulevel = JSON_object[0].stats.level;
        umana = JSON_object[0].stats.mana;
        uspeed = JSON_object[0].stats.speed;

        chp = JSON_object[1].stats.hp;
        clevel = JSON_object[1].stats.level;
        cmana = JSON_object[1].stats.mana;
        cspeed = JSON_object[1].stats.speed;

        ai_info(JSON_object[1].stats, JSON_object[1].facility);
        user_info(JSON_object[0].avatar, JSON_object[0].facility,JSON_object[0].name, JSON_object[0]$
        battle(JSON_object[0].stats.speed, JSON_object[1].stats.speed);
	*/

	}




        },

        create: function () {
               // this.state.start('play');
//	if()

//		console.log("in create");
	},

	update: function (){
		loopMusic();
		//console.log("Here");
	}

};

