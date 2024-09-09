  // function setup(){
//   createCanvas(200, 200);
//   backgorund(127);
//   noStroke();
//   for (let i=0; i < height; i +=20) {
//     fill(20, 255, 0);
//     rect(0, i, width, 10);
//     fill(255);
//     rect(i, 0, 10, height);
//     console.log(i);
//   }
// }
// //you see it when setup is finished

let bgcounter = 0;
let counter = 0;

  function setup() {
  createCanvas(200, 200);
  background(255);
  frameRate(10);

  // let countS = 666;
  // console.log(countS);
  //if u make a var inside of setup, it happens 1 time
  //only works inside setup
  //if u do "console.log(countS)" in the draw fxn it will create an eror bc it isn't understood outside this fxn
  }

  function draw() {
  noStroke();
  fill(255,255,0,120);
  rect(0, counter, width - random(50), 10);
  fill(255,0,255,120);
  rect(counter, 0, 10, height - random(50));

  console.log(counter);

  if (counter > height) {
  background(bgcounter);
  bgcounter+=3;
  counter = 0;
  } else {
  counter+=20;
  }

// let countS = 700;
// console.log(countS);
// countS will show up in the console log twice, first being from setup then from draw
//countS is basically 2 ver of the same thing

// for(let i=0; i<100; i+=20){
//   rect(i, 20, 20, 20);
//   console.log(i)
// }
//the var i only exists within the for loop

// for(let i=0; i<100; i+=20){
//   rect(i, 100, 20, 20);
  // console.log(i)
// }
//even tho there is i in both for loops, they're separate
}

// ea frame is seen at the end of the draw loop