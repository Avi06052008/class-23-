class Ground{
    constructor(x,y){
        var box={
            isStatic:true

        } 
        this.body=Bodies.rectangle(x,y, 400, 20, box)
    World.add(world,this.body)
    }
    display(){
var pos=this.body.position 
rectMode(CENTER)
rect(pos.x,pos.y,400, 20 )
    }
}