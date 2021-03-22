
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	, Paper1 ;
var world;


function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Paper1= new paper (200,450,70) ;
    
	
	
	Engine.run(engine);
  //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("white");
 

  groundObject.display();
  dustbinObj.display();
  Paper1.display();


}

function keyPressed (){
	if (keyCode===32){
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:100,y:-90});
	}
}