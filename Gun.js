class Gun
{
	constructor(x,y)
        {
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
			
			}

            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = 10;
            this.height = 10;
            this.image = loadImage("gun.png");
            World.add(world, this.body);

	}
	display()
	{
			
        push();
        translate(this.gun.position.x, this.gun.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
			
	}

}