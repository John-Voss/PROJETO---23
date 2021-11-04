const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var helicopter, helicopter_image;
var box, box_image, boxBody;
var ground1, ground2, ground3;

function preload(){
	helicopter_image = loadImage('helicopter.png');
	box_image = loadImage('package.png');
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	var grounds_options = {
		isStatic: true
	}

	ground1 = Bodies.rectangle(400, 690, 200, 30, grounds_options);
	World.add(world, ground1);

	ground2 = Bodies.rectangle(510, 605, 30, 200, grounds_options);
	World.add(world, ground2);

	ground3 = Bodies.rectangle(290, 605, 30, 200, grounds_options);
	World.add(world, ground3);

	var box_options = {
		isStatic: true
	}
	box = createSprite(400, 400, 50, 50);
	box.addImage('box_img', box_image);
	box.scale = 0.3;
	boxBody = Bodies.rectangle(400, 100, 50, 50, box_options);
	World.add(world, boxBody);

	helicopter = createSprite(400, 100, 50, 50);
	helicopter.addImage('helicopter_img', helicopter_image);
	helicopter.scale = 0.8;
	World.add(world, helicopter);
}


function draw() {
  background('#87CEEB');
  Engine.update(engine);
  box.x = boxBody.position.x;
  box.y = boxBody.position.y;

  if(keyDown('left')) {
	  helicopter.x += -5;
	  Matter.Body.translate(boxBody, {x:-5, y:0});
  }
  if(keyDown('right')) {
	  helicopter.x += 5;
	  Matter.Body.translate(boxBody, {x:5, y:0});
  }
  if(keyDown('down')) {
	  Matter.Body.setStatic(boxBody, false);
  }

  rectMode(CENTER);
  strokeWeight(4);
  stroke('black');
  fill('#FF6347');
  rect(ground1.position.x, ground1.position.y, 200, 30);
  rect(ground2.position.x, ground2.position.y, 30, 200);
  rect(ground3.position.x, ground3.position.y, 30, 200);
  fill('#A0522D');
  rect(boxBody.position.x, boxBody.position.y, 50, 50);
  drawSprites();
}
