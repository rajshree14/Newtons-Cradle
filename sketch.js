const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5,bob6,bob7,bob8,bob9
var thread1,thread2,thread3,thread4,thread5,thread6,thread7,thread8,thread9

let engine
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = new Bob(250,280,10)
	bob2 = new Bob(340,300,10)
	bob3 = new Bob(360,300,10)
	bob4 = new Bob(380,300,10)
	bob5 = new Bob(400,300,10)
	bob6 = new Bob(420,300,10)
	bob7 = new Bob(440,300,10)
	bob8 = new Bob(460,300,10)
	bob9 = new Bob(480,300,10)
	

	thread1 = new Cons(bob1.body,{x:320,y:100})
	thread2 = new Cons(bob2.body,{x:340,y:100})
	thread3 = new Cons(bob3.body,{x:360,y:100})
	thread4 = new Cons(bob4.body,{x:380,y:100})
	thread5 = new Cons(bob5.body,{x:400,y:100})
	thread6 = new Cons(bob6.body,{x:420,y:100})
	thread7 = new Cons(bob7.body,{x:440,y:100})
	thread8 = new Cons(bob8.body,{x:460,y:100})
	thread9 = new Cons(bob9.body,{x:480,y:100})
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()
  bob7.display()
  bob8.display()
  bob9.display()


 thread1.display()
 thread2.display()
 thread3.display()
 thread4.display()
 thread5.display()
 thread6.display()
 thread7.display()
 thread8.display()
 thread9.display()

 Engine.update(engine);

 if (keyIsDown(RIGHT_ARROW))
 {
	Body.applyForce(bob1.body,{x:0,y:0},{x:0.001,y:0})
 }

}

