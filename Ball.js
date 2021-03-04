class Ball{
    constructor(x, y, width, height) {
        var options = {
            
            'frictionAir':0.005,
            'density':5.0
        }
        this.image = loadImage("ironman.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
       // fill ("blue")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       // ellipseMode(CENTER);
        //ellipse( 0, 0, this.width, this.height);
        pop();
      }
}