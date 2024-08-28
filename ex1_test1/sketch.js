function setup() { 
  createCanvas(200, 200);
  background(127);
  noStroke();
  //stroke(255, 0, 0);

      //local var   test    change
  for (let i=0; i < height; i+=20) {
    //for loop repeats
    //for (initiator, test, change)
      //always has to start true and end false
    //goes through the for (init, test, change) loop 
    //then goes through "i+=20" and tests
    //stops executing when the test "i < height" fails

    fill(20,255,0);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
    //rect(start x, start y, width, canvas height)
    console.log(i);
  }
}

//fill(mouseX); changes the color w the mouse
//counter++; adds 1 to the var every time
//counter+=2; adds 2 to the var every time

//1 is gray
//2 is gray, alpha
//3 r, g, b
//4, r, g, b, a
  //color names
//fill ("red");

//rect(x, y, w, h, how rounded ea corner is);
//rect(x, y, w, h, how rounded corner 1 is, how rounded corner 2 is, how rounded corner 3 is, how rounded corner 4 is);