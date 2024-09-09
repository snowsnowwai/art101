let value = 0; 
  //boolean true/false 0 or 1
let purpOn = false;

  function setup() { 
    createCanvas(300, 300);
  } 

  function draw() { 
    background(255-value); 
    fill(value); 
    ellipse(width/2, height/2, 100, 100);       
    
    if (mouseIsPressed && purpOn) {  // tests true or false
      console.log("show that purple");
      fill(255,0,255);
      let r = random(100,width-10);
      ellipse(width/2, height/2, r, r);
    }
  } 

  function keyPressed() { 
      console.log(key);
      //pipes == or
      //pipes r ||
    if ( key == 'b' || key == 'B' ) {
      // example of toggle logic 
      if (value == 0) { 
        value = 255;
      } else { 
        value = 0;
      }
        //creates 2 val that u bounce back and forth every time u return to them
    }

    if (  (key == 'p' || key == 'P') ) {
      purpOn = true;    
    }

    if (  (key == 'x' || key == 'X' || key == " ") ) {
      purpOn = false;    
      }
        //turns off the purpple from pressing p/P
    }