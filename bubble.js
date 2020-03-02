class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
    this.col=color(255);
  }



  changeColor(bright) {
    this.brightness = bright;
  //  this.col=color(random(255),random(255),random(255));
  }

  // In case of not needed to change the color
  keepColor(bright){
    this.brightness=bright;
  }

  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  contains(px, py){
    let d = dist(px, py, this.x, this.y);
    if(f < this.r){
      return true;
    }else {
      return false;
    }
  }



  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
