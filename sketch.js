const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gun,sling,thief;
var engine,world;

function setup() {
  createCanvas(1000,700);


  engine = Engine.create();
    world = engine.world;

  gun=new Gun(400,400);
  sling =new SlingShot (this.body,{x:90,y:30});
  thief =new Thief(500,400);
  
}

function draw() {
  background("pink");  
  Engine.update(engine);

  gun.display();
  sling.display();
  thief.display();
  }