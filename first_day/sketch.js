//counter is a var
//vars can be put outside of function setup/draw
//put at top to make it easy to find
let counter = 0;
let counter2 = 0;

//first to run, runs only ONCE
function setup() {

  //(width, height)
  createCanvas(500,500);

  //(grayscale) 0-255
  background(25);

  //or (r, g, b)
  fill(25, 20, 100);
}

//sec to run, runs over and over
//once setup runs, draw takes over
function draw() {

  //ellipse(width/2, height/2, 50, 50);
    //(x, y, w, h)
  ellipse(counter2,30,50,50);
    //can get rid of the h to make a circle
      //ellipse(30,30,50);
      //can put a var as a coordinate to make the shape dynamic
  
  fill(random(255),random(255),random(255));
  //(x,y,w,h)
  rect(10,10,20,20);
  
  //(x,y,x1,y1,x2,y2)
  triangle(220,220,300,20,70,100);

  //a way to log the counter var in the console 
  console.log(counter);
    //this shows how many times the shapes are drawn

  counter = counter + 1;
  counter2 = counter2 + 2;
}
