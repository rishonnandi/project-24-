
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	 createCanvas(1200, 500);
	 engine = Engine.create();
	 world = engine.world;
	
    
   ground = new Ground(600,height,1200,20);
   paperObject=new Paper(200,480,40);
   box1=new box(200,300,300,20);

	    
}


function draw() {
   background(0);
    Engine.update(engine);
    ground.display();
    paperObject.display();
    box1.display();

    drawSprites();
 }
 

  function keyPressed(){
     if(keyCode===UP_ARROW){
    
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-55});

     }

       }


