class Elastic{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.elastic = Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.elastic);
    }

    attach(body){
        this.elastic.bodyA = body;
    }

    fly(){
        this.elastic.bodyA = null;
    }

    display(){
        if(this.elastic.bodyA){
        var pointA = this.elastic.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(5);
        fill(73, 181, 221);
        stroke(73, 181, 221);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}