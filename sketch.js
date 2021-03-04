
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var ball;
var rope;
var img;
var thanos;

function preload(){

img = loadImage ("ground.PNG")

}

function setup() {
  createCanvas(1350,650);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground (400,550,1200,20) 

  box1 = new Box (600,100,70,70);
  box2 = new Box (600,100,70,70);
  box3 = new Box (600,100,70,70);
  box4 = new Box (600,100,70,70);
  box5 = new Box (600,100,70,70);
  box6 = new Box (600,100,70,70);
  box7 = new Box (600,100,70,70);
  box8 = new Box (600,100,70,70);
  //build 2
  box9 = new Box (700,100,70,70);
  box10 = new Box (700,100,70,70);
  box11 = new Box (700,100,70,70);
  box12 = new Box (700,100,70,70);
  box13 = new Box (700,100,70,70);
  box14 = new Box (700,100,70,70);
  //build 3
  box15 = new Box (800,100,70,70)
  box16 = new Box (800,100,70,70)
  box17 = new Box (800,100,70,70)
  box18 = new Box (800,100,70,70)

  ball = new Ball (300,300,400,200)

  rope = new Rope(ball.body,{x:300,y:50})

  thanos = new Monster(1000,300,300,300);
  

}

function draw() {
  background(img);  

  Engine.update(engine);

  detectCollision(box1,thanos);
  detectCollision(box2,thanos);
  detectCollision(box3,thanos);
  detectCollision(box4,thanos);
  detectCollision(box5,thanos);
  detectCollision(box5,thanos);
  detectCollision(box6,thanos);
  detectCollision(box7,thanos);
  detectCollision(box8,thanos);
  detectCollision(box9,thanos);
  detectCollision(box10,thanos);
  detectCollision(box11,thanos);
  detectCollision(box12,thanos);
  detectCollision(box13,thanos);
  detectCollision(box14,thanos);
  detectCollision(box15,thanos);
  detectCollision(box16,thanos);
  detectCollision(box17,thanos);
  detectCollision(box18,thanos);

  fill(0)
  textSize(20);
  text("Kill Thanos and get the INFINITY STONES",50,50)


  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  //build 2
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  //build 3

  box15.display();
  box16.display();
  box17.display();
  box18.display();

  ball.display();

  rope.display();

  thanos.display();
  
}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}

function detectCollision(lbox,lthanos){

	if(lbox.body.position.x- lthanos.body.position.x <lthanos.width/2 + lbox.width/2 
		&& lthanos.body.position.x - lbox.body.position.x < lthanos.width/2 + lbox.width/2 
		&&lbox.body.position.y -lthanos.body.position.y < lthanos.height/2 + lbox.height/2 
		&& lthanos.body.position.y - lbox.body.position.y < lthanos.height/2 + lbox.height/2)
		{ Matter.Body.setStatic(lthanos.body,false); }

}