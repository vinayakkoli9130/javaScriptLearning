
function show(){
    console.log("Hello World");
}
let result=show
result()
// why we call function as First class citizen in JS
// 1. We can store function as a value in variable
let functionExpr= function(){
    console.log("Inside function expression");
}
functionExpr();

// 2. We can return function from another function //2.function can be return another function
function outer(){
   let display  = function(){
        console.log("Inside display function");
    }
    return display;  
}
let innerFun = outer();
innerFun();

// 3. We can pass function as argument to another function
// function anotherFunction(){
//     console.log("I am inside another function....");
// }

// function show(myNum){ // myNumber is an argument
    
//     console.log("Hello World");
//     myNum();
// }
// let results=show(anotherFunction);
// results()
function anotherFunction() {
    console.log("I am inside another function....");
}

function show(myNum) {
    console.log("Hello World");
    myNum();
}

show(anotherFunction);