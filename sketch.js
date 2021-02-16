
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var wall,wallImage;
var grass,grassImage;
var chain;
var ground1;
var mango1;

function setup() {
	createCanvas(1710, 700);

  engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,400,20);
	mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1400,220,30);
	mango3 = new Mango(1300,200,30);
	mango4 = new Mango(1390,300,30);
	mango6 = new Mango(1200,300,30);
  mango7 = new Mango(1500,280,30);
  tree = new Tree(1300,680);
  ground = new Ground(0,680,4000,20);
	boy = new Boy(250,500);
  wall = new Wall(855,100);
  grass = new Grass(855,600);
	chain = new Chain(stone.body,{x:310, y:430});
  ground2 = new Ground(1380, 335,25,5);
  ground3 = new Ground(1290, 335,25,5);
  ground4 = new Ground(1190, 335,25,5);
  ground5 = new Ground(1290, 235,25,5);
  ground6 = new Ground(1490, 315,25,5);
  ground7 = new Ground(1390, 255,25,5);
  basket = new Basket(380,580);

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);


  grass.display();
  wall.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  chain.display();
  basket.display();

  stroke("green")
  fill('yellow');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 70,70);


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
