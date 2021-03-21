class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,restitution:0.3,friction:0.5,density:1.2,
        }
        this.radius=radius;
        this.bob=Bodies.circle(x,y,radius,options);
       
        World.add(world,this.bob);

    }
    display(){
        push();
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.bob.position.x,this.bob.position.y,this.radius,this.radius);
        pop();

    }
}