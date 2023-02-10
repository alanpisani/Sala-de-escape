var positionA; //A-G store value assigned to positions in sum
var positionB;
var positionC;
var positionD;
var positionE; //F doesn't exist because = is hard wired for F.
var positionG;
var choice; //Stores value of button last pressed by user
var bPlus = true; //Switch to false if user selects minus for B
var dPlus = true; //Switch to false if user selects minus for D
var sumTtotal; //Stores correct sum for comparison with final position

function checkNumber(x) { //Returns true if x is a number 0 ≥ x ≤ 9
  for (var i = 0; i < 10; i++) {
    if (x == i) {
      var y = true;
      i = 10; //To stop loop
    }
    else {
      var y = false;
    }
  }
  return y;
}

function checkSign(x) { //Returns true if x is '+' or '-'
  if (x == '+' || x == '-') {
    var y = true;
  }
  else {
    var y = false;
  }
  return y;
}

//The assignPosition functions assign the user's choice to the position's var, after checking for validity. 

function assignPositionA() { 
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionA = choice;
    document.getElementById('a').innerHTML = choice;
  }
  else {
    window.alert("Sorry, your choice is invalid!");
  }
}

function assignPositionB() {
  isChoiceValid = checkSign(choice);
  if (isChoiceValid == true) {
    positionB = choice;
    document.getElementById('b').innerHTML = choice;
    if (choice == '-') {
      bPlus = false;
      //console.log(bPlus);
    }
  }
  else {
    window.alert("Sorry, your choice is invalid!");
  }
}

function assignPositionC() {
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionC = choice;
    document.getElementById('c').innerHTML = choice;
  }
  else {
    window.alert("Sorry, your choice is invalid!");
  }
}

function assignPositionD() {
  isChoiceValid = checkSign(choice);
  if (isChoiceValid == true) {
    positionD = choice;
    document.getElementById('d').innerHTML = choice;
    if (choice == '-') {
      dPlus = false;
      //console.log(dPlus);
    }
  }
  else {
    window.alert("Sorry, your choice is invalid!");
  }
}

function assignPositionE() {
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionE = choice;
    document.getElementById('e').innerHTML = choice;
  }
  else {
    window.alert("Sorry, your choice is invalid!");
  }
}

function assignPositionG() { //Also calls calculate function
  isChoiceValid = checkNumber(choice);
  if (isChoiceValid == true) {
    positionG = choice;
    document.getElementById('g').innerHTML = choice;
    calculateSumTotal();
  }
  else {
    window.alert("Sorry, your choice is invalid!");
  }
}

function findEmptyPosition() { //Finds the first unfilled position
  if (positionA == undefined) {
    assignPositionA();
  }
  else if (positionB == undefined) {
    assignPositionB();
  }
  else if (positionC == undefined) {
    assignPositionC();
  }
  else if (positionD == undefined) {
    assignPositionD();
  }
  else if (positionE == undefined) {
    assignPositionE();
  }
  else if (positionG == undefined) {
    assignPositionG();
  }
  else {
    window.alert("Sorry, there are no more positions to fill!");
  }
}

//The clicked functions record button presses by user

function oneClicked() {
  choice = 1;
  findEmptyPosition();
}

function twoClicked() {
  choice = 2;
  findEmptyPosition();
}

function threeClicked() {
  choice = 3;
  findEmptyPosition();
}

function fourClicked() {
  choice = 4;
  findEmptyPosition();
}

function fiveClicked() {
  choice = 5;
  findEmptyPosition();
}

function sixClicked() {
  choice = 6;
  findEmptyPosition();
}

function sevenClicked() {
  choice = 7;
  findEmptyPosition();
}

function eightClicked() {
  choice = 8;
  findEmptyPosition();
}

function nineClicked() {
  choice = 9;
  findEmptyPosition();
}

function zeroClicked() {
  choice = 0;
  findEmptyPosition();
}

function plusClicked() {
  choice = '+';
  findEmptyPosition();
}

function minusClicked() {
  choice = '-';
  findEmptyPosition();
}

function calculateSumTotal() { //Calculates correct total
  if (bPlus == true && dPlus == true) {
    sumTotal = positionA + positionC + positionE;
  }
  else if (bPlus == true && dPlus == false) {
    sumTotal = positionA + positionC - positionE;
  }
  else if (bPlus == false && dPlus == true) {
    sumTotal = positionA - positionC + positionE;
  }
  else if (bPlus == false && dPlus == false) {
    sumTotal = positionA - positionC - positionE;
  }
  endGame();
}

function endGame() { //Checks whether user is correct
  if (sumTotal == positionG) {
    window.alert("You win!");
  }
  else {
    window.alert("Oh no, you're wrong!");
  }
}

//Tests for checkNumber
//var output = checkNumber(0);
//console.log(output); //true
//output = checkNumber(-1);
//console.log(output); //false
//output = checkNumber(9);
//console.log(output); //true
//output = checkNumber(10);
//console.log(output); //false
//output = checkNumber('+');
//console.log(output); //false

//Tests for checkSign:
//var output = checkSign('+');
//console.log(output); //true
//output = checkSign('-');
//console.log(output); //true
//output = checkSign(8);
//console.log(output); //false

//Tests for assignPosition functions:

//choice = 5;
//assignPositionA();
//assignPositionB(); //invalid
//assignPositionC();
//assignPositionD(); //invalid
//assignPositionE();
//assignPositionG();

//choice = '+';
//assignPositionA(); //invalid
//assignPositionB();
//assignPositionC(); //invalid
//assignPositionD();
//assignPositionE(); //invalid
//assignPositionG(); //invalid

//Tests for calculateSumTotal:
//bPlus = true;
//dPlus = true;
//positionA = 1;
//positionC = 2;
//positionE = 4;
//calculateSumTotal();
//console.log(sumTotal) //7

//bPlus = true;
//dPlus = false;
//positionA = 4;
//positionC = 2;
//positionE = 6;
//calculateSumTotal();
//console.log(sumTotal) //0

//bPlus = false;
//dPlus = true;
//positionA = 1;
//positionC = 2;
//positionE = 4;
//calculateSumTotal();
//console.log(sumTotal) //3

//bPlus = false;
//dPlus = false;
//positionA = 1;
//positionC = 1;
//positionE = 1;
//calculateSumTotal();
//console.log(sumTotal) //-1

//Tests for endGame:
//sumTotal = 9;
//positionG = 9;
//endGame(); //You win!
//sumTotal = 0;
//positionG = 9;
//endGame(); //Oh no, you're wrong!

document.getElementById('one').addEventListener('click', oneClicked, false);
document.getElementById('two').addEventListener('click', twoClicked, false);
document.getElementById('three').addEventListener('click', threeClicked, false);
document.getElementById('four').addEventListener('click', fourClicked, false);
document.getElementById('five').addEventListener('click', fiveClicked, false);
document.getElementById('six').addEventListener('click', sixClicked, false);
document.getElementById('seven').addEventListener('click', sevenClicked, false);
document.getElementById('eight').addEventListener('click', eightClicked, false);
document.getElementById('nine').addEventListener('click', nineClicked, false);
document.getElementById('zero').addEventListener('click', zeroClicked, false);
document.getElementById('plus').addEventListener('click', plusClicked, false);
document.getElementById('minus').addEventListener('click', minusClicked, false);