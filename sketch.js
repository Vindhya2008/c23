



const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine,world
var rock

function setup() {
  createCanvas(400,400);
//create the engine
engine=Engine.create()
  //Add world to the engine
  world=engine.world
  
var rock_options={ 
  restitution:0.25
}


  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
ground=Bodies.rectangle(200,385,400,10,ground_options)
World.add(world,ground)


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock=Bodies.circle(250,10,40,rock_options)
  World.add(world,rock)
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  fill("white")
  ellipse(ball.position.x,ball.position.y,20);
  fill("yellow")
  rect(ground.position.x,ground.position.y,400,20)
  fill("brown")
 ellipse(rock.position.x,rock.position.y,40)


  
  
}

