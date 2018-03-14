
// $(document).ready(function() {
//   console.log('jquery');
// });



var radius;
var x, y;

function setup() {
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
  var val = $('#sub').on('click', function() {
    // console.log($('#xVal').val());

    x = $('#xVal').val();
    y = $('#yVal').val();
  });

  // $('#xVal').oninput(function() {
  //   console.log('hi');
  // });



  // $("#xVal").slider();
  //
  //  var startPos = $("#xVal").slider("value");
  //  var endPos = '';
  //
  //  $("#xVal").on("slidestop", function(event, ui) {
  //      endPos = ui.value;
  //
  //      if (startPos != endPos) {
  //          // do stuff
  //      }
  //
  //      startPos = endPos;
  //  });



  invertPoint({x: 10, y: 10});

}

function draw() {
  // console.log();

  // Ok just had to be in draw:
  // invertPoint({x: x, y: y});



  background(200);
  // noFill();
  stroke('black');
  ellipse(width/2, height/2, 2 * radius, 2 * radius);
  // stroke('red');
  ellipse(width/2, height/2, 2, 2);
  // stroke('blue');

  // stroke('purple');
  invertPoint({x: x, y: y});

}

function invertPoint(p) {
  push();
  translate(width/2, height/2);

  // draw point:
  // stroke('red');
  stroke('purple');
  ellipse(p.x, p.y, 2, 2);

  var theta = atan(p.y/p.x);
  // console.log(theta);

  var distance = dist(p.x, p.y, 0, 0);
  // console.log(distance);

  var invertDistance = Math.pow(radius, 2) / distance;

  // console.log(invertDistance);

  var ratio = invertDistance / distance;

  // draw inverse point:
  stroke('darkGreen');
  ellipse(p.x * ratio, p.y * ratio, 2, 2);

  // Ok let's not use this:
  // rotate(theta);

  var midpoint = {x: p.x*(ratio - 1)/2, y: p.y*(ratio - 1)/2};
  // console.log(midpoint);

  var newDiameter = dist(p.x, p.y, p.x * ratio, p.y * ratio);

  push();
  translate(p.x, p.y);
  stroke('blue');

  ellipse(midpoint.x, midpoint.y, 5, 5);
  stroke('black');
  ellipse(midpoint.x, midpoint.y, newDiameter, newDiameter);
  pop();

  pop();
}
