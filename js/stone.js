class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.1,
            friction : 1,
            density : 0.5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("images/stone.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image, 0, 0, this.radius*3, this.radius*3);
        pop();
    }
}