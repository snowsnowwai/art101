let counterG = 0;
let counterR = 0;
let f; 

 /*
   You can get free font on the web.. the format that seems to work well with p5
   is .otf  format.    https://www.1001fonts.com/opentype-fonts.html
 */
   
// // optional font loading
function preload() {  //load commands only
   f = loadFont('assets/space_age.otf');
}
  //preload so it saves time when the program actually runs

function setup() {
  createCanvas(1920, 800);

  counterR = height;

  //optionally set the font for drawing
  textFont(f);

  // set color of text
  fill(0, 255, 0); 
}

function draw() {
  
  // textSize(40);
  // textAlign(CENTER);

  // text("you said pineapple pizza dip??", 30, 30, 200)
  
  background(0,15);
  // this is an example of 'and' logic
  if ( mouseIsPressed && keyIsPressed == true )  {
    textSize((counterR)/2.5);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("Red is Betta ", width/2, counterR);
    counterR-=.75;
    if (counterR < -50) {
      counterR = height;
    }
    
  } else  {
  textSize((counterG+50)/3);
  textAlign(CENTER);
  fill(0, 255, 0);
  text("Green is good", width/2, counterG);

  counterG +=1.5;
    if (counterG > width) {
      counterG = -50;
    }

  }

  
}