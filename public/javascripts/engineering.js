function engineering()
{

console.log("in engineering function");
//rectangle box

        var graphics = game.add.graphics(0,0);

        //set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x000000);

        //draw a rectangle
        graphics.drawRect(90,460,880,130);

        window.graphics = graphics;

//Text
        var regTxt = game.add.text(120, 570, "DMG: 5     MP Cost: 0",
                                {font: "15px Arial", fill:" #ffffff"});
       var  specialTxt = game.add.text(340, 570, "DMG: 8     MP Cost: 3", 
                                {font: "15px Arial", fill: "#ffffff"});

        var UitlityTxt = game.add.text(560, 570, "DMG: 10     MP Cost: 6", 
                                {font: "15px Arial", fill: "#ffffff"});

        var UltimateTxt = game.add.text(780, 570, "DMG: 18     MP Cost: 14", 
                                {font: "15px Arial", fill: "#ffffff"});

        var reg = game.add.sprite(100,470, 'er');
        var special = game.add.sprite(320 ,470,'es');//, ss_action, this, 2,1,0);
        var utility = game.add.sprite(540 ,470,'eut');//, utility_action, this,2,1,0);
        var ultimate = game.add.sprite(760 ,470,'eul');//, ultimate_action, this, 2,1,0);
        console.log("buttons are up");

        reg.inputEnabled = true;
        reg.events.onInputDown.add(er_action,this);
        special.inputEnabled = true;
        special.events.onInputDown.add(es_action,this);
        utility.inputEnabled = true;
        utility.events.onInputDown.add(eutility_action,this);
        ultimate.inputEnabled = true;
        ultimate.events.onInputDown.add(eultimate_action,this);



}
