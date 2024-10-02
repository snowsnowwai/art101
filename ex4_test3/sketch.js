// Example 2.4.3 Adjustable Array Version

let count = 40;
//this command will make an array like [ , , , ]
  //imagine making an egg carton w slots to use
 
  let loX = new Array(count);
  let loY = new Array(count);
  let speedX = new Array(count);
  let speedY = new Array(count);
  let cirSizeh = new Array(count);
  let cirSizev = new Array(count);
  let colorsR = new Array(count);
  let colorsG = new Array(count);
  let colorsB = new Array(count);
  let shapec = new Array(count);
  
  function setup() {
    createCanvas(600, 600);
    noStroke();
  
    for (let i=0; i < loX.length; i++) {
      loX[i] = width/2;
      loY[i] = height/2;
      speedX[i] = random(-3, 3);
      speedY[i] = random(-3, 3);
      cirSizeh[i] = random(40, 90);
      cirSizev[i] = random(40, 90);
      colorsR[i] = int(random(0, 255));
      colorsG[i] = int(random(0, 255));
      colorsB[i] = int(random(0, 255));
      shapec[i]  = int(random(0, 3))
      
     
  
      console.log("hello");
      console.log(shapec);
    }
  
  }
  function draw() {
  
    background(70);
    // makes a frame
    fill(250);
    rect(40, 40, width-80, height-80);
  
    for (let i = 0; i < loX.length; i++) {
  
       //check boundaries for all balls
       // note the '40+' and '-40' are to pull in the borders to match 
       // the background rect
           // less then 0
      if (loX[i] < 40+cirSizeh[i]/2 || loX[i] > (width-40)-cirSizeh[i]/2 ) {
       // cirSize[i]+= -20;
        speedX[i] = -speedX[i];
      }
            // less then 0
      if (loY[i] < 40+cirSizev[i]/2 || loY[i] > (height-40)-cirSizev[i]/2) {
        //cirSize[i]+= -20;
        speedY[i] = -speedY[i];
      }
  
      //draw all balls
      push();
      translate(loX[i],loY[i]);
      fill(colorsR[i],colorsG[i] ,colorsB[i],50);
  
      if ( shapec[i] == 0) {
      ellipse(0,0,cirSizeh[i],cirSizev[i]);
      } else if (shapec[i] == 1) {
       rect(0,0,cirSizeh[i],cirSizev[i]);
      } else {
       triangle(0,0,cirSizeh[i] + 20 ,cirSizev[i]+ 20, cirSizeh[i]- 90,cirSizev[i]  );
      }
      pop();
  
      //update all positions
      loX[i] += speedX[i];
      loY[i] += speedY[i];
    } 
  
  }