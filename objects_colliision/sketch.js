var blades = []


function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 3; i++) {
    blades.push(new Beyblade(10, 10));
  }
  console.log(blades.length)
  console.log(i)


}

function draw() {

  background(0);
  checkAllAgainstAll()
  for (var i = 0; i < blades.length; i++) {
    blades[i].display()
    blades[i].update()
    blades[i].borders()
  }

}

function checkAllAgainstAll() {
  for (var i = 0; i < blades.length; i++) {

    for (var j = 0; j < blades.length; j++) {
      if (i == j) {
        continue;
      }
      if (dist(blades[i].x, blades[i].y, blades[j].x, blades[j].y) < 40) {
        blades[i].collision();
        blades[i].update();
        blades[j].collision();
        blades[j].update();
      }

    }
  }
}

class Beyblade {
  constructor() {
    this.x = (random(0, width))
    this.y = (random(0, height))
    this.d = 50
    this.xdir = random(-5, 5)
    this.ydir = random(-5, 5)

  }

  display() {
    stroke(255)
    fill(255)
    fill(255, 255, 127);
    ellipse(this.x, this.y, this.d, this.d)
  }

  update() {
    this.x = this.x + this.xdir
    this.y = this.y + this.ydir
  }

  borders() {
    if (this.x > width || this.x < 0) {
      this.xdir = -this.xdir
    }
    if (this.y > height || this.y < 0) {
      this.ydir = -this.ydir
    }
  }

  collision() {
    this.xdir = -this.xdir;
    this.ydir = -this.ydir;
    print("collison")
  }

}