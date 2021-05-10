var helicopterIMG, helicopterSprite, packageSprite,packageIMG, boxSprite;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	boxSprite1 = createSprite(332, 600, 30,250);
    boxSprite1.shapeColor="red"
	boxSprite1.scale=0.4

boxSprite2 = createSprite(406,654,400,30);
boxSprite2.shapeColor="red"
boxSprite2.scale=0.4

boxSprite3 = createSprite(480,600,30,250);
boxSprite3.shapeColor="red"
boxSprite3.scale=0.4


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.isStatic=false;

Matter.Body.setStatic(packageBody,false);
}
}   
