class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 280
            
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
  
 

    display(){

      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("#ffffff00");
            
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            pop();
        }
    }
    
}