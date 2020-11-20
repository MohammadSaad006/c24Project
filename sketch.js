 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 var myEngine,myWorld
 var Paper1
 var dastbinpart1,dastbinparet2,dastbinpart3
 var ground
 function preload()
 {
	
 } 

 function setup() {
	createCanvas(1200,400);
	myEngine= Engine.create();// world
	myWorld= myEngine.world;
   Paper1= new Paper(150,320,25);
   ground=new Ground(600,390,1200,20)
   
   dastbinpart1=new Box(850,322,20,100)
   dastbinpart3=new Box(1050,322,20,100)
   dastbinpart2=new Box(950,370,200,20)
   
  }
  
  function draw() {
	background(0); 
  
	Engine.update(myEngine)
	Paper1.display();
	ground.display();
	dastbinpart1.display();
	dastbinpart3.display();
	dastbinpart2.display();
	KeyPressed()
	
  }
 function KeyPressed(){
	 if (keyCode ===  UP_ARROW){
	 Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:5,y:-6})
	 
	 }
 }



