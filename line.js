class Chain{
    constructor(b1,b2){
        var option={
            bodyA:b1,
            bodyB:b2,
            length:150,
            stiffness:0.6
        }
        this.chain=Matter.Constraint.create(option);
        World.add(world,this.chain)
        console.log(this.chain);
    }
    display(){
        stroke("green");
        strokeWeight(2)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
        
    }
}