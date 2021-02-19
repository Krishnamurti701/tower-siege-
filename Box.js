class Box  {
  constructor(x, y, width, height){
  var options={
    'restitution':0.4,
    'friction':0.0,
   // isStatic=true
  }
  this.visiblity = 225;
  this.body=Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(World, this.body);
   
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<3){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();

   
    }else{
      world.remove(world, this.body);
      push();
      this.visiblity = this.visiblity-5;
      pop();
    }
  }

  score() {
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
   
  }


};
