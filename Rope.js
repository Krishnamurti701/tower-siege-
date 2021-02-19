/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
attach(body){
    this.sling.bodyA= body;
}


    display(){
       // image(this.sling1,200,20)
       // image(this.sling2,170,20)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(5);
            stroke(48,22,8)
            if(pointA.x<220){
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);  
            }
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            pop()
        }
    }
    
}*/
class Rope { 
    constructor(bodyA,pointB) { 
        var options = {
              bodyA:bodyA,
              pointB:pointB,
              stiffness:1.2,
              length:250
            
             } 
            
             this.pointB = pointB;
             // this.rope = Constraint.create(options);
              World.add(world, this.rope);
             }
            
             attach(body){
                 this.rope.bodyA = body;
             }
            fly(){
                this.rope.bodyA = null;
            }

              display(){
            if(this.rope.bodyA){
               // console.log("rope")
                var pointA = this.rope.bodyA.position
                var pointB = this.pointB
                push();
                stroke(48,22,8)
                strokeWeight(3);
                line(pointB.x, pointB.y, pointA.x, pointA.y);
                pop();
            }
               
                 }
                };