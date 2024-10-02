let counter1 = 0;
let lox = 0;  //location of x
let loy = 0;  //location of y
let speedx = 0; //speed and dir for x
let speedy = 0; //speed and dir for y

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255, 0, 0);
  noStroke();

  lox = width/2;
  loy = width/2;

  speedx = random(-2, 2);
  speedy = random(-2, 2);
}

function draw() {
    background(0);
  // fill(counter1, 0, 0); // 0-255
  console.log(speedx + " " + speedy);

  lox+= speedx;  //1 or -1
  loy+= speedy;  //1 or -1

  if (counter1 > 255) {
    counter1 = 0;
  }

  if (lox > width) {  //wrap back to left
    lox = 0;
  }

  if (lox < 0) {  //wrap back to  right
    lox = width;
  }

  if (loy > height) { //wrap to top
    loy = 0;
  }

  if (loy < 0) {  //wrap to bottom
    loy = height;
  }
  
  rect(lox, loy, lox, lox);
}
