//tic tac toe
//1. intro screen
//2. start a game
//3. choose x or o
//4. x turn //repeating
//5. o turn //repeating
//6. result win/lose/cats game
//8. play again?

// state 0 // would be the start or intro
//  state 1 // would be x turn
//  state 2 // would be o turn
//  state 3 // result winner/lose/tie

//  intro state //before anything happens
//  drawing state
  // inside the drawing state theres a brushmode
//  printing state

let currentkey = '1'; // brushmode
//a way of saying what mode we're in and keeps track of what key is pressed
let bgc ;
let gkcount;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
      //clears out the program
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
      //changes the brushmode
      //runs every time mouse is pressed
}

//   rect(0,0,20,20); // 4 arg


  //  function rect(lx,ly,w,h) {

   


  //   // magical rectangle

  //  }




      // wrapper function ( no parameters or arguments )
function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat teal line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
 break;
 case '7':
    console.log("7");  // erase with bg color
    steveCrazeBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
 break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(1);
  stroke(k);  //strake(color(0));
      //x1, y1, x2, y2
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function steveRanBrush(kcount, lx, ly,  px, py) {

  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  stroke(0,kcount*3,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}

function steveCrazeBrush(kcount, lx, ly,  px, py) {
  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  fill(kcount*3,random(20,255),0);
  noStroke();
  //image(b,lx,ly, 30,30);
  rect(lx, ly,30,30,kcount);
}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100

// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130
