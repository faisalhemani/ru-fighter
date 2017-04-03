var facility = "Science";
var reg, special, utility, ultimate;
var hp,mp,speed;

function ai_science_hp()
{
hp = 50;
console.log(hp);
	return hp;
}
function ai_science_mp()
{
        return mp = 25;
}
function ai_science_speed()
{
        return speed = 3;
}


function aisci_attacks(){

        if(cmana >= 14)
        {
                console.log("ultimate");
              ai_ultimate_action();
        }
        else if (cmana >=6)
        {
                console.log("ulitlity");
           ai_utility_action();
        }
        else if (cmana>=3)
        {
                console.log("special");
                ai_ss_action();
        }
        else
        {
                console.log("reg");
              ai_sr_action();
        }
	incrementMana(0);
}


