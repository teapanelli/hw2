function setup() {
  createCanvas(400, 400);
}

x = 360
speed = 5

var ballX = 0
var ballSpeed = 5

function draw() {
  background(200, 100, 60)
  ellipse(200, x, 40, 40)
  if (x <= 20)
    speed = -5
  if (x > height - 20)
    speed = 5
  x = x - speed
  
}
