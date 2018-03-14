
var radius;

function setup() {
  createCanvas(700, 700);
  background(200);

  radius = width/4 - 50;
  noFill();
  ellipse(width/2, height/2, 2 * radius, 2 * radius);

  ellipse(width/2, height/2, 2, 2);

  invertPoint({x: 90, y: 60});
}

function draw() {

}

function invertPoint(p) {
  push();
  translate(width/2, height/2);

  // draw point:
  ellipse(p.x, p.y, 2, 2);

  var theta = atan(p.y/p.x);
  // console.log(theta);

  var distance = dist(p.x, p.y, 0, 0);
  // console.log(distance);

  var invertDistance = Math.pow(radius, 2) / distance;

  // console.log(invertDistance);

  var ratio = invertDistance / distance;

  // draw inverse point:
  ellipse(p.x * ratio, p.y * ratio, 2, 2);

  // Ok let's not use this:
  // rotate(theta);

  var midpoint = {x: p.x*(ratio - 1)/2, y: p.y*(ratio - 1)/2};
  console.log(midpoint);

  var newDiameter = dist(p.x, p.y, p.x * ratio, p.y * ratio);

  push();
  translate(p.x, p.y);
  ellipse(midpoint.x, midpoint.y, newDiameter, newDiameter);
  pop();

  pop();
}
