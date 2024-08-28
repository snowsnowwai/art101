function setup() {
  createCanvas(900,500);
  background(20);
  fill(255);
  rectMode(CENTER);
}

function draw() {
  background(0);
  let r = random(30);
  let m = mouseX;
  //math 2 + 2 = 4
  //concatonation num + "string"
  //let answer = 3 + " is three";

  console.log("mouseX is " + m + " and random is " + r);
  //console log allows u to put anything u want in the console log
    //inspect -> console tab
  
    if (m < width/2)  { //true runs
    background(m);
    ellipse(m, height/2, r * 5, r * 2);
  } else { //false runs
    background(width -m );
    rect(m, height/2, r * 2, r * 5);
  }
}

  // if (mouseX < 100); {
  //   ellipse(100, 100, 200, 200);
  // }