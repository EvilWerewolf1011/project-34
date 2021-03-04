class Monster{
    constructor(x, y, width, height) {
        
        var options = {
            isStatic : true
        }

        this.image = loadImage("Thanos.png");
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