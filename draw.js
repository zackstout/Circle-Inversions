
// $(document).ready(function() {
//   console.log('jquery');
// });

var radius;
var x, y;
var xCo;

var prevX = 0;
var prevY = 0;

var path = [];

function changeSliderX(n) {
  x = n;
  // x-coordinates of inverted point (colored goldenrod):
  console.log(x);

  prevX = x;
  path.push({x: x, y: prevY});
}

function changeSliderY(n) {
  y = n;
  prevY = y;
  console.log("y", y);
  path.push({x: prevX, y: y});

}

function setup() {
  xCo = 0;
  console.log('p5');
  createCanvas(700, 700);
  background(200);

  radius = width/4 - 50;

  // draw circle of inversion:
  noFill();
  ellipse(width/2, height/2, 2 * radius, 2 * radius);

  // draw center:
  ellipse(width/2, height/2, 2, 2);

  // get user input:
  // var val = $('#sub').on('click', function() {
  //   // console.log($('#xVal').val());
  //
  //   x = $('#xVal').val();
  //   y = $('#yVal').val();
  // });

  invertPoint({x: 10, y: 10});
}

function draw() {
  // console.log();

  // Ok just had to be in draw:
  // invertPoint({x: x, y: y});

  background(200);
  // invertPoint({x: 10, y: 10});

  stroke('black');
  ellipse(width/2, height/2, 2 * radius, 2 * radius);
  ellipse(width/2, height/2, 2, 2);
  invertPoint({x: x, y: y});


  // invertPoint({x: 70, y: 70});

  // invertPoint({x: -170, y: 140});
  // invertPoint({x: -120, y: 10});
  // invertPoint({x: 30, y: -170});
  for (var i=-20; i < 20; i++) {
    invertPoint({ x: i * 5, y: 42 });
    invertPoint({ x: i * 5, y: -42 });

    invertPoint({ x: 42, y: i * 5 });
    invertPoint({ x: -42, y: i * 5 });
  }

  // invertPoint({x: xCo, y: 30});

  // path.forEach(function(p) {
  //   // drawCenter({x: p.x, y: p.y});
  //
  //   push();
  //   translate(width/2, height/2);
  //   var distance = dist(p.x, p.y, 0, 0);
  //
  //   // Following the formula for inversion in a circle:
  //   var invertDistance = Math.pow(radius, 2) / distance;
  //   var ratio = invertDistance / distance;
  //   // draw inverse point:
  //   stroke('darkGreen');
  //   fill('darkGreen');
  //   ellipse(p.x * ratio, p.y * ratio, 6, 6);
  //   noFill();
  //   pop();
  // });

  // xCo = (xCo + 2.5) % 400 - 200;

}

function invertPoint(p) {
  push();
  translate(width/2, height/2);

  // draw point:
  stroke('goldenrod');
  fill('goldenrod');
  ellipse(p.x, p.y, 6, 6);

  // Ok we ended up not needing this:
  var theta = atan(p.y/p.x);
  // console.log(theta);

  var distance = dist(p.x, p.y, 0, 0);
  // console.log(distance);

  // Following the formula for inversion in a circle:
  var invertDistance = Math.pow(radius, 2) / distance;

  // console.log(invertDistance);

  var ratio = invertDistance / distance;

  // draw inverse point:
  stroke('darkGreen');
  fill('darkGreen');
  ellipse(p.x * ratio, p.y * ratio, 6, 6);

  // Ok let's not use this:
  // rotate(theta);

  var midpoint = {x: p.x*(ratio - 1)/2, y: p.y*(ratio - 1)/2};
  // console.log(midpoint);

  var newDiameter = dist(p.x, p.y, p.x * ratio, p.y * ratio);

  push();
  translate(p.x, p.y);
  stroke('blue');

  noFill();
  // ellipse(midpoint.x, midpoint.y, 5, 5);
  stroke('black');
  ellipse(midpoint.x, midpoint.y, newDiameter, newDiameter);
  pop();

  pop();
}
