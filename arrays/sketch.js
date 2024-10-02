// let lox, loy, speedx, speedy; //ball1
// let lox2, loy2, speedx2, speedy2; //ball2
// let lox3, loy3, speedx3, speedy3; //ball3

// let xlist = [30, 140, 240, 300];  //array
//array is a list of values
let numbers = [9, 6, 7, 5, 3, 0, 9];  //#s inside the brackets are a list
             //0, 1, 2, 3, 4, 5, 6... how you refer to ea # inside the bracket
//normally a collection of smth

let firstnames = ["audrey", "ash", "jade"];

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);

  console.log(numbers [0]); //refers to the first # in the array
  console.log(numbers[numbers.length -1]); //starts counting down from the last # to the first #
  console.log(firstnames[firstnames.length-1]);
  console.log(firstnames[int(random(firstnames.length))]);  //randomly gives an obj from the array
    //int makes it into a numberical val

  //getting a val
  let temep = firstnames[0];

  //setting a val
  firstnames[0] = "pablo";
}

function draw() {
 ellipse(width/2, height/2, 50, 50);
}
