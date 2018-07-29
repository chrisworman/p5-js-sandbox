function Ball(x, y) {

  this.radius = random(10, 70);
  this.position = createVector(x, y);
  this.velocity = createVector(random(-20, 20), random(-20, 20));
  this.acceleration = createVector(0, 0);
  this.color = color(random(256), random(256), random(256));

  this.applyForce = function(force) {
    this.acceleration.add(force);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.draw = function() {
    fill(this.color);
    stroke(0);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  };

}
