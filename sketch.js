let bubbles =[];
let superBubble;

function setup(){
  createCanvas(600, 400);

  for(let i =0; i < 70; i++){
    let x = random(width);
    let y = random(height);
    let r = random(26, 12);
    bubbles[i] = new Bubble(x, y, r);
  }
 //superBubble = new Bubble(10, 10, 50); for testing using the mouseX
}

function draw(){
  background(0); // black background


//  superBubble.x=mouseX;
  //superBubble.y=mouseY;
  //superBubble.show();
  //superBubble.move();
  for(let b of bubbles){
    b.show();
    b.move();
    let overlapping = false;
    for(let other of bubbles){
      if(b != other && b.intersects(other)){
        overlapping=true;
      }
    }

    if(overlapping){
      b.changeColor(color(random(255),random(255), random(255)));
    }else {
      b.changeColor(0);
    }

  }
}


// for (let i =0; i < bubbles.length; i++){
//   bubbles[i].show();
//   bubbles[i].show();
// }




// Ignore-> don't change the color


// let bubbles = [];
// let unicorn;
//
// function setup() {
//   createCanvas(600, 400);
// for(let i =0; i < 60; i++){
//   bubbles[i]= new Bubble();
//   let x = random (width);
//   let y = random (height);
//   let r = random(23,12 );
//   bubbles[i]= new Bubble(x, y, r);
//   unicorn = new Bubble(400, 200, 10);
//
// }
// }
//
// function draw() {
//   background(1);
//
//   //unicorn.x=mouseX;
//   //unicorn.y=mouseY;
//   unicorn.show();
//   unicorn.move();
//
//   for(b of bubbles){
//     b.show();
//     b.move();
//     let overlapping = false;
//     for(other of bubbles){
//     if(b != other && b.intersects(other)){
//       overlapping =true;
//     }
//   }
//   if(overlapping ){
//     b.changeColor();
//   }else{
//       b.changeColor();
//     }
//   }
// }
//
//
//   // bubble1.show();
//   // bubble2.show();
//   // bubble1.move();
//   // bubble2.move();
//   // bubble1.x=mouseX;
//   // bubble2.x=mouseY;
//
//
// class Bubble {
//   constructor(x, y, r = 50) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.brightness = 0;
//     this.col= color(255);
//   }
//
//
//
//   intersects(other) {
//     let d = dist(this.x, this.y, other.x, other.y);
//     return d < this.r + other.r;
//   }
//
//   changeColor() {
//     this.col = color(random(255), random(255), random(255));
//   }
//
//   contains(px, py) {
//     let d = dist(px, py, this.x, this.y);
//     if (d < this.r) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//
//   move() {
//     this.x = this.x + random(-2, 2);
//     this.y = this.y + random(-2, 2);
//   }
//
//   show() {
//     stroke(255);
//     strokeWeight(4);
//     fill(this.color, 125);
//     ellipse(this.x, this.y, this.r * 2);
//   }
// }
