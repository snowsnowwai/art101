function setup() {
  createCanvas(400, 400);
  background(0, 50, 100);
  noStroke();

  for (let i=0; i < height; i+=20) {
    fill(20,255,0);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
    console.log(i);
  }
}

//divide and conquer to understand the code
  //comment out pts of the code to understand ea chunk

function draw() {
  let y1 = mouseY; //feeding a var into mouseY

  if (mouseX < 250)  {  //only draws up until 250
    for (let i = 0; i < mouseX; i += 20) {
      r1 = random(255);
      fill(r1);  //color of the rect is random
      rect( i+5, y1, 10, 10 );  //spacing and size of rect
      console.log("r1 = " + r1);
     }
    //
  }

  if (mouseX > 200)  {  //only draws when >200
    let mx = mouseX; //redefines mouseX
    for (let i = 0; i < mouseX; i += 20) {
      r2 = random(50,255);
      fill(r2,30); 
        //30 makes the rect translucent
      rect(mx, i+5, 10, 10);
      console.log("r2 = " + r2);
      //creates a diagonal effect w the rect
     }

    if (mouseY < 250) { //only draws when y<250 and x>200
      fill(255,0,0,90);
      triangle(mouseX,y1,mouseX-50,y1+30,mouseX+50,y1+50);

    } else {
      
      for (let i = 0; i < mouseX; i += 20) {
        r3 = random(100);
        fill(200,100,0,r3);
        rect( i+5, y1, 10, 10 );
        console.log("r3 = " + r3);
       }

      fill(255,120,0,50);
      ellipse(mouseX+100,y1,30,30);

    }
  }
}