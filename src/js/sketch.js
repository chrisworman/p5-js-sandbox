//var r,g,b;
var gravity;
var ballRestitution = 0.8;
var wallFriction = 0.9;

var balls = [];

function setup() {
  width = 800;
  height = 400;
  createCanvas(width, height);
  gravity = createVector(0.8, 0);
}

function mouseClicked() {
  balls.push(new Ball(mouseX, mouseY));
}

function draw() {
  background(155);
  balls.forEach(b => b.applyForce(gravity));
  balls.forEach(b => collide(b));
  balls.forEach(b => b.update());
  balls.forEach(b => constrainBall(b));
  balls.forEach(b => b.draw());
}

function collide(b) {

  if (b.position.y - b.radius <= 0 || b.position.y + b.radius >= height) {
    b.velocity.y *= -ballRestitution;
  }

  if (b.position.x - b.radius <= 0 || b.position.x + b.radius >= width) {
    b.velocity.x *= -ballRestitution;
  }

}

function constrainBall(b) {

  if (b.position.y + b.radius > height) {
    b.position.y = height - b.radius;
    b.velocity.x *= wallFriction;
  }

  if (b.position.y - b.radius < 0) {
    b.position.y = b.radius;
    b.velocity.x *= wallFriction;
  }

  if (b.position.x + b.radius > width) {
    b.position.x = width - b.radius;
    b.velocity.y *= wallFriction;
  }

  if (b.position.x - b.radius < 0) {
    b.position.x = b.radius;
    b.velocity.y *= wallFriction;
  }

}
