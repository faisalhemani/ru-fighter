var hp, mp, speed;

function ai_eng_hp()
{
hp = 50;
console.log(hp);
        return hp;
}
function ai_eng_mp(){
 mp = 25;
return mp;
}

function ai_eng_speed(){
speed = 2;
return speed;
}


function aieng_attacks(){

	if(cmana >= 14)
	{
	 	console.log("ultimate");
	      ai_eultimate_action();
	}
	else if (cmana >=6)
	{
		console.log("ulitlity");
        	ai_eutility_action();
	}
	else if (cmana>=3)
	{
		console.log("special");
	      ai_es_action();
	}
	else
	{
		console.log("reg");
		ai_er_action();
	}

}





