class Polygon { 
  constructor(x,y,width,height,angle) { 
      var options = {
          'frictionAir': 0.005,
          'density':1
          
           } 
           this.body = Bodies.rectangle(x,y,width,height,options); 
           this.width = width;
            this.height = height;
            this.image= loadImage("images/polygon.png");
            World.add(world, this.body);
           }
            display(){
           
                var pos =this.body.position;
                var angle = this.body.angle;
                push();
                translate(pos.x,pos.y)
                rotate(angle);
                image(this.image,0,0);
                pop();
               }
              };