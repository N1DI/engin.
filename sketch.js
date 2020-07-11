var car,wall;
var speed,weight;
var wall



function setup() {
  var canvas = createCanvas(1600,400);
  car  = createSprite(50,200,50,50)
  car.velocityX=speed;
  wall = createSprite(1500,200,60,height/2)
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);
  car.display();
  drawSprites();
}