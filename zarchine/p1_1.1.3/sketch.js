//  if (true ) {
//  function();
//  }

//there are only even # of braces, parentheses, and brackets in your program
//odd # means your program is broken

//2 categories of how to play w if statements
  //sequential
    //if (true ) {
    //  function();
    //  }
    //if (true ) {
    //  function();
    //  }

  //putting them inside ea other --> nesting hierarchy
    //if (true ) {
      //if (true ) {
      //  function();
      //  }
    //  function();
    //}
    //basically a bunch of checks that the program has to do
      //if __, __, __, and __, are true

function setup() {
  createCanvas(400, 400);
  background(0, 50, 100);
  noStroke();

  //noLoop();
    //means the draw loop will only happen once
  //frameRate();
    //how many frames per sec the draw loop is occuring
}

function draw() {
  for (let i = 0; i < 400; i += 20) {
  //   initializor  test    change
  //line 34 0 --> where the squares start i+=20 is how big the spacing is
    for (let j = 0; j < 400; j += 20) {
      rand = random(255); //causes flickering effect
      fill(rand);
      rect( i+5, j+5, 10, 10 ); 
      //    spacing  w + h of square
      console.log("this has a greyscale value of" + rand);
    }
  }
}
//don't want the inside and outside for loop to use the same var
//if u use the same var for both loops u overwrite the first loop w the sec loop (redefining it)