let cx,cy;
let bgc;
let gridSize;
let pizza;
let pizza2;
let pineapple;
let f;
let counterG = 0;
let counterR = 0;

function preload() {
  f = loadFont('assets2/handjet.ttf')
}

function setup() {
    createCanvas(800, 800);
    background(255);
    bgc = color(20,1);
    // set up a assets folder then add an image.
    pizza = loadImage("assets/pizza.png")
    pizza2 = loadImage("assets2/pizza2.png")
    pineapple = loadImage("assets2/pineapple.png")
    ash = loadImage("assets2/ash.png")
    jade = loadImage("assets2/jade.png")
    cx = width/2; //changing by 40 every time
    cy = height/2;  //changing by 40 every time
    gridSize = 75;
    textSize(40);
}

function draw() {
    // optional fade trick
    //fill(bgc);
    //rect(9,9,width,height);
 
    // checking then triggering the keyChoice for drawing
    if( keyIsPressed) {  // true/false (boolean)
       keyChoice();
    }

  background(0, 10, 10, 20);
  // this is an example of 'and' logic
  if ( mouseIsPressed && keyIsPressed == true )  {
    textSize((counterR)/2.5);
    textAlign(CENTER);
    fill(255, 0, 0);
    textFont(f);
    text("Red is Betta ", width/2, counterR);
    counterR-=.75;
    if (counterR < -50) {
      counterR = height;
    }
    
  } else  {
    textSize((counterG+50)/3);
    textAlign(CENTER);
    fill(0, 255, 0);
    textFont(f);
    text("Green is good", width/2, counterG);

  counterG +=1.5;
    if (counterG > width) {
      counterG = -50;
    }
  }
}

function keyChoice() {
 // the 'key' maps what characters on the keyboard you can use.
 // switch statment
switch(key) {
case 'q':
  console.log("quite a quandry! quincy?") //left
  cx+= random(-gridSize,);
        //img, x, y, w, h
  image(ash, cx, cy, gridSize, gridSize);
  break;
case 'a':
  console.log("a left");  // left
  cx+= -gridSize;
  image(ash,cx,cy,gridSize,gridSize);
  break;
case 'w':
  console.log("w up");  // up
  cy+= -gridSize; 
  image(jade,cx,cy,gridSize,gridSize);
  break;
case 'd':
  console.log("d  right");  //right
  cx+= gridSize;
  image(jade,cx,cy,gridSize,gridSize);
  break;
case 's':
  console.log("s back");  // back
  cy+= gridSize;
  image(ash,cx,cy,gridSize,gridSize);
  break;
case 't':
    console.log("t text");  // text
    fill(255,0,0);
    text("Pizza!",cx,cy,200);
    break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}
key = "";  // you can empty it so, it does not double trigger

}