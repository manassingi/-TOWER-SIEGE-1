class slingshort{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = anchor
        this.bodyA=body
        this.slingshort = Constraint.create(options);
        World.add(world, this.slingshort);
    }
     attach(body){
        this.slingshort.bodyA=body;
     }

     fly(){

        this.slingshort.bodyA=null;
     }
    
         
    display(){
        if(this.slingshort.bodyA){

        
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}