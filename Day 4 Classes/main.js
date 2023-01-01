//https://www.hackerrank.com/challenges/js10-class/problem
class Polygon {
  constructor(len) {
    this.length = len;
    this.perimeter = function getPerimeter() {
      var perimeter = 0;
  
      for (var side of this.length) {
        perimeter += side;
      }
  
      return perimeter;
    }
  }
}

const square    = new Polygon([10, 10, 10, 10]);
const pentagon  = new Polygon([10, 20, 30, 40, 43]);
const rectangle = new Polygon([10, 20, 10, 20]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
