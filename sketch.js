
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background;


function preload(){
  background=loadImage("background.png.jng");
}



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);
  Engine.update(engine);
  
}

