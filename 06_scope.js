var singerName = "Kishor Kumar";
// const PI = 3.1412;

let actorName;

console.log(actorName);

var isMarried = true;
if (isMarried) {
  let greet = "Congratulation";
  //console.log(greet);
}
//console.log(greet);

function add(num1, num2) {
  var result = num1 + num2;
  let PIN = 431202;
  console.log(`Result is : ${result}`);
  var isMarried = true;
  if (isMarried) {
    var greet = "Congratulation";
    const PI = 3.14; 
    let myName = "Mohit";
  }
  // console.log(PI);
  console.log(greet);
  console.log(`Result is : ${result}`);
  return result;
}
add(5, 5);
// console.log(`Outside Result is : ${result}`);
// console.log(PIN);

console.log(`Differnce Between var let const`);
var myName="Vinayak"
var myName="Mahesh" //Redeclaration is allowed in var keyword and you aslo change value of var;
console.log(myName);

let name="Mahesh";
 name="Vinayak"   //redeclaration is Not allowed but you chan change value of let.
console.log(name);

const frdName="Arman";
 //frdName="Arjun";//Redeclaration And Value Change Not Allowed In const.
console.log(frdName);

function fName(first,last) {

    var fullName=first+last;
 if (true) {
    var decate=`Vitthal`;
    let greet=`Ganesh`;
    const jadeja="Ravindra"
    console.log(greet);
    console.log(jadeja);
}
 //console.log(jadeja); // const is block scope they can't define outside the any block
//  console.log(greet);// let is also block scope they can't define outside the any block or loop
 console.log(decate);// var is function scope they can define any where of under funtion of block and they can define outside any loop block
 console.log(fullName);
}
fName(`Pune`,`Mumbai`)

console.log(`-------------------------------------------------------------------------`)

// program to find the factorial of a number

// take input from the user
const number =5;

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
 
const num=6;
let fact=1;
for (let index = 1; index <=num; index++) {
   fact*=index;
    
}
console.log(`The Factorial of ${num} is ${fact}`);


