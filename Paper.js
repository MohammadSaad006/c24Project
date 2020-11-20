 class Paper {
    constructor(x,y,radius){
 var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.5
     
    }
    
    this.body= Bodies.circle(x,y,radius,options);
    World.add(myWorld,this.body)
    
    }
    display(){
    var paperpos = this.body.position;
    
    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER);
    noStroke();
    fill("pink")
    ellipse(0,0,this.radius*2,this.radius*2);
    pop()
}

}