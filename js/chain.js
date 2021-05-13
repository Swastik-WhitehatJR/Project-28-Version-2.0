class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = bodyB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly()
    {
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.bodyB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}