const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var a;
var engine, world;
var circles=[];
var launch, polygon;

var block;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;

var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;

var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;
var block27;


var land1;
var land2;
var land3;
var ground;

function setup() {
  createCanvas(800,800);
  fill("blue");
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,200,200,200);
  polygon = new Bird(100,200,200,200);
  launch = new SlingShot(polygon.body,{x:100, y:200});

  block = new Log(330,235,30,40);
  block2 = new Log(360,235,30,40);
  block3 = new Log(390,235,30,40);
  block4 = new Log(420,235,30,40);
  block5 = new Log(450,235,30,40);
  
  block6 = new Log(360,195,30,40);
  block7 = new Log(390,195,30,40);
  block8 = new Log(420,195,30,40);

  block9 = new Log(390,155,30,40);


  block10 = new Log(330,435,30,40);
  block11 = new Log(360,435,30,40);
  block12 = new Log(390,435,30,40);
  block13 = new Log(420,435,30,40);
  block14 = new Log(450,435,30,40);
  
  block15 = new Log(360,395,30,40);
  block16 = new Log(390,395,30,40);
  block17 = new Log(420,395,30,40);

  block18 = new Log(390,355,30,40);


  block19 = new Log(330,635,30,40);
  block20 = new Log(360,635,30,40);
  block21 = new Log(390,635,30,40);
  block22 = new Log(420,635,30,40);
  block23 = new Log(450,635,30,40);
  
  block24 = new Log(360,595,30,40);
  block25 = new Log(390,595,30,40);
  block26 = new Log(420,595,30,40);

  block27 = new Log(390,555,30,40);

  land1 = new Ground(385,335,200,20);
  land2 = new Ground(385,535,200,20);
  land3 = new Ground(385,735,200,20);

  

  //camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  
  
}

function draw() {

    

    background("lightyellow");
    polygon.display();
    launch.display();
    
    ground.display();
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();


    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();


    land1.display();
    land2.display();
    land3.display();

    fill("black");
    text("Easy",375,200);
    text("Harder",370,400);
    text("Practically Impossible",330,600);
   


    Engine.update(engine);
  
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launch.fly();
}

function keyPressed ()
{
    if(keyCode === 32)
    {
        Matter.Body.setPosition(polygon.body, {x: 200, y: 200});
     launch.attach(polygon.body);
    }
} 