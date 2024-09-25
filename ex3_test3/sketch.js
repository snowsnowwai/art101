    // example 2.3.3 this introduce the transformation  function set

    // recomment the second rotation commands to see it NOT animate.
    let counter1 = 45;  //rotates 45 degrees
    let counter2 = -45; //rotates -45 degrees

    function setup() {
     createCanvas(500,500);
     background(0);
    }

    function draw() {
     background(0);

    
    
    //push();
    
    //translate(0,0);
      //wants to use the origin in the top left corner
      //moves everything in it along w it based on the origin set in the translate
    
    // rotate(radians(45)); //converts from radians to degrees (this is setting it to 45 degrees)
      //rotate by default uses radians
      //allows u to switch the frame of ref temporarily
    //says from here on let's change the origin for everything

    //rotate(radians(counter1));
      //in conjunction to the counter in pop, the obj roates continuously

     //pop();
      //want to have it at the end
      //resets the origin pt to (0,0)

      //counter1 += .5;

     fill(255);
     push();
       // orgin of  moveX, moveY
       translate(width/2-50, height/2-100);
       rotate(radians(counter1));
       //rotate(radians(45));
       scale(2);
       // the first hat
       rect(0, 0, 100, 20, 5);
       // pushing it over to the right and up
       translate(25, -100);
       rect(0, 0, 50, 100, 5);
     pop();

     fill(255,0,0);


     push();
       // orgin of moveX, moveY
       translate(width/2-50, height-100);

       rotate(radians(counter2));
       //rotate(radians(-45));
       scale(.75);

       // the second hat
       rect(0, 0, 100, 20, 5);
       // pushing it over to the right and up
       translate(25, -100);
       rect(0, 0, 50, 100, 5);
     pop();

     counter1++;
     counter2--;
    }