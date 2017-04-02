function chance(){

	console.log("chance function will display who will be playing first");
	var graphics = game.add.graphics(0,0);

	//set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        graphics.drawRect(90,10,860,40);

        window.graphics = graphics;
}
