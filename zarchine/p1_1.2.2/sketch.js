let value = 0;
let bc;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
    //allows u to draw a rect from a diff spot instead of the top left
  bc = color('#525056');
        //hexadecimal color
        //#RRGGBB
        //dec rrr ggg bbb
}
function draw() { //draw always draws over and over
  background(bc); 
    //bkgd color var
  fill(value);
  rect(200, 200, 50, 50);
} 

function mouseMoved() { //draws to screen when the mouse moves
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}