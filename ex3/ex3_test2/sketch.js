// Example 2.3.2  Bounce Vector Movement Code
let speedX, speedY, loX, loY; //setting the global vars

let speedX2, speedY2, loX2, loY2;

function setup() {
    background(0);
    createCanvas(500, 500);
    // obj 1
    speedX = random(-5, 5);
    speedY = random(-5, 5);
    loX = height/2;
    loY = width/2;
    // speedX = -2;
    // speedY = -2;

    // obj 2
    speedX2 = random(-5, 5);
    speedY2 = random(-5, 5);
    loX2 = height/2;
    loY2 = width/2;
    // speedX2 = -2;
    // speedY2 = -2;
}

function draw() {
    background(0);
    fill(100);
    // rect(50, 50, width-100, height-100);

    console.log( speedX + " " + speedY);
    console.log( speedX2 + " " + speedY2);

    if (loX < 0) {
        speedX = -speedX;
    }
    if (loX > width) {
      //this is saying if speedX is 2 then it becomes -2
        speedX = -speedX;
    }
    // this is the short hand way of doing the same as the 2 'ifs' above
    // this uses or '||'
    if ((loY < 0) || (loY > height)) {
        speedY = -speedY;
    }

    if (loX2 < 0) {
      speedX2 = -speedX2;
    }
    if (loX2 > width) {
      //this is saying if speedX is 2 then it becomes -2
        speedX2 = -speedX2;
    }
    // this is the short hand way of doing the same as the 2 'ifs' above
    // this uses or '||'
    if ((loY2 < 0) || (loY2 > height)) {
        speedY2 = -speedY2;
    }

    // update the position of the ball and print to screen
    loX += speedX;
    loY += speedY;
    ball(loX,loY);

    loX2 += speedX2;
    loY2 += speedY2;
    ball(loX2,loY2);
}

function ball(lx,ly) {
  fill(120);
  ellipse(lx,ly, 25, 25);
  fill(20,150,100);
  ellipse(lx-4,ly-4, 7, 7);
}