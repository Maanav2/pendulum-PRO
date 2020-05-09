const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ob,chain,ob1;

function setup() {
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ob = new Ob(200,100,100,10);
    ob1 = new Ob(200,300,30,30);
    chain = new Chain(ob.body,ob1.body);

}

function draw() {
  background(145);
  Engine.update(engine); 
  ob.display();
  ob1.display();
  chain.display();
  text("press enter key to bring pendulum ball to 200 location",50,50);
  text("press space key to make ur pendulum move with your mouse",25,25);
 
  drawSprites();
}

function keyPressed (){
if(keyCode===32){
  ob1.body.position.x=mouseX;
  ob1.body.position.y=mouseY;

}
else if(keyCode===13){
  ob1.body.position.x=200;

}


}
