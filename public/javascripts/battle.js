function battle(user_speed, ai_speed){
        console.log("in the battle function");

        //first turn
        if( counter == 0)
        {
                if (user_speed == ai_speed)
                {
                        console.log("speed is same");
                        if (user_speed ==3)
                        {
                                console.log("the facility is science");
                                if (random == 1)
                                {
                                        console.log("user is going first");
                                        science("#0000ff"); user_counter++;
                                        dmg_txt = game.add.text(350, 300, "You Go First", {font: "40px Arial", fill: txt_color});

                                }
                                else
                                {
                                        ai_science();
                                        ai_counter++;
                                        dmg_txt = game.add.text(350, 300, "Ai Goes First", {font: "40px  Arial", fill: txt_color});

                                }
                        }
                        else
                        {
                                console.log("the facility is engineering");
                                if (random == 1)
                                {       engineering("#0000ff"); user_counter++;}
                                else
                                {       ai_engineering(); ai_counter++;}

                        }
                }
                counter++;
        }
        else
        {
                if (user_counter > ai_counter)
                {
                        console.log("user's turn");
                        if (user_speed ==3)
                        {
                                console.log("the facility is science");
                                science("#0000ff"); user_counter++;
                        }
                        else
                        {
                                console.log("the facility is engineering");
                                engineering("#0000ff"); user_counter++;

                        }
		}
 		else
                {
                        console.log("ai's turn");
                        if (user_speed ==3)
                        {
                                console.log("the facility is science");
                                ai_science(); ai_counter++;
                        }
                        else
                        {
                                console.log("the facility is engineering");
                                ai_engineering(); ai_counter++;
                        }

                }

        }

}

