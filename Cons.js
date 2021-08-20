class Cons
{
   
    constructor(bA,pB)
    {

      this.chain = Constraint.create({bodyA:bA,pointB:pB,stiffness:0.04,length:100})
      World.add(engine.world,this.chain) 
    
   }
    
    display()
    {push ()
      strokeWeight(4)
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
   pop () }
}