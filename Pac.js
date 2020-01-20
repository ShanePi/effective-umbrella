class Pac {
    constructor(x, y){
        this.x = x
        this.y = y
        this.speed = 1
        this.halfAngle = random(4, 45)
    }
   update(){
    this.halfAngle = this.halfAngle + this.speed   
    if(this.halfAngle > 45){
        this.speed = -1
    }
    else if(this.halfAngle < 4){
        this.speed = 1
        }
    }
   display(){
       arc(this.x, this.y, 100, 100, this.halfAngle, -this.halfAngle)
   }
}