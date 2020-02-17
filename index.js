// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return this.diameter * Math.PI;
    }

    get area(){
        return this.radius * this.radius * Math.PI
    }

    set diameter(t){
       return  this.radius = t / 2
    }

    set circumference(tt){
        return this.radius = tt/ 6.5;
    }
}