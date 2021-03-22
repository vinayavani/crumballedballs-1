class paper{
constructor(x,y,radius){
    var options={
  isStatic: false,
  restitution:0.3,
  friction:0.5,
  density:0.1
    }
  this.x=x
  this.y=y
  this.radius=radius
  this.body=Bodies.circle(this.x,this.y,this.radius,options);
  

  this.image=loadImage("paper.png");

  World.add(world,this.body);
}
display(){

  var paperpos=this.body.position
  push();
  translate(paperpos.x,paperpos.y);
  fill("red");
  imageMode(CENTER);
  image(this.image,0,0,this.radius,this.radius);
   //ellipseMode(this.radius);
  
  
   pop();
    
}
}
