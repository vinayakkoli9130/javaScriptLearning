
//Function can be stored as value in variable is called function expression.
// Function Expression
var showResult = function() {//Function can be stored as value in variable is called function expression.
    console.log("show.....");
};
showResult();

// We can store a function as value in JS
var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);

var square = function(num){
console.log("Square of -: ",num*num*num);
let sum=num*num*num
console.log(sum+sum);
}
console.log("Type Of Function", typeof square);
square(5);
square(100);
square(34);

var cube=function(val){
    console.log(typeof cube);
console.log("Cube Of Number",val,"=",val * val * val);

var sum=val * val * val
console.log(sum+sum);
}
cube(3);
cube(5);



function mahesh(val1,val2) {
 var fullName =val1+val2;
 return fullName
}
var mahi=mahesh("Vinayak","Koli")
console.log(`${mahi}`);

console.log("-----------------------Function Expression-----------------------");
let multiplication=function (a,b){
return a*b
}
console.log(multiplication(3,3));

