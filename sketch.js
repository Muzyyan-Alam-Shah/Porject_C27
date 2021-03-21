
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1,roof;
var bobDiameter=20;

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1=new Bob(400,350,20);
	bobObject2=new Bob(359,350,20);
	bobObject3=new Bob(319,350,20);
	bobObject4=new Bob(441,350,20);
	bobObject5=new Bob(481,350,20);
    roof=new Roof(400,100,300,30);
	ground=new Roof(400,680,800,20);
	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}


