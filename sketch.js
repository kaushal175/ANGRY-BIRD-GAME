const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,350,70,70);
    box2 = new Box(1100,350,70,70);
    Pig1 = new Pig(1000,350,50,50);
    log1 = new Log(1000,300,300,30,0);
    box3 = new Box(900,250,70,70);
    box4 = new Box(1100,250,70,70);
    Pig2 = new Pig(1000,250,50,50);
    log2 = new Log(1000,200,300,30,0);
    box5 = new Box(1000,150,70,70);
    log3 = new Log(945,130,150,30,-PI/7);
    log4 = new Log(1055,130,150,30,PI/7);
    bird= new Bird(100,100,50,50);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    Pig1.display();
    log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
   ground.display();
}