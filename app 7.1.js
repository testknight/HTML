var PI = Math.PI;

function Circle(radius){
    this.radius = radius;
}
Circle.prototype.circumference = function(){
    return this.radius * 2 * PI;
};
Circle.prototype.area = function(){
    return this.radius * this.radius * PI;
};

var circle10 = new Circle(10);
console.log(circle10.circumference()); // 62.83185307179586
console.log(circle10.area()); // 314.1592653589793