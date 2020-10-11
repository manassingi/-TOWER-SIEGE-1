var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rock1,chain;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	rock1=new rock(100,300,50)
	//chain=new slingshort(rock1.body,{x:235,y:420})

	box1=new box(360,235,30,40)
	box2=new box(390,235,30,40)
	box3=new box(420,235,30,40)
	box4=new box(450,235,30,40)
	box5=new box(360,235,30,40)
	box6=new box(390,195,30,40)
	box7=new box(420,195,30,40)
	box8=new box(390,195,30,40)
	box9=new box(410,155,30,40)
	box10=new box(480,235,30,40)
	//chain=new slingshort(ball1.body,{x:100,y:300})
	groundSprite=createSprite(410, 270, 200, 20);
	groundSprite.shapeColor=color("white")
	Engine.run(engine);
	ground = Bodies.rectangle(410, 270, 200, 20 , {isStatic:true,restitution:1} );
	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
 rock1.display();
//chain.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 //box10.display();
 //box11.display();

}


