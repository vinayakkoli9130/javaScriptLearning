// Higher Order Function - A function that accepts function as a parameters and or returns function
function anotherFunction(){
    console.log("I am inside another function....");
}
function show(myNumber){ // myNumber is an argument
    myNumber();
    let innerFunction = function(){
        console.log("Inner function.....");
     }
     return innerFunction;
}
 let inner = show(anotherFunction);
 inner();


 // function show(name, age, ...details){
//     console.log(name,age, details);
// }
// show("Sachin", 45, "Mumbai", 101)


function greet(user, greetingFunction) {
    return greetingFunction(user);
}

function sayHello(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice', sayHello)); // Logs: "Hello, Alice!"

function greet(user,greetingFunction){
return greetingFunction(user)
}

function sayHello(name){
return `Hello, ${name}!`
}
console.log(greet('maggi',sayHello));

function makeMultiplare(multiplare){
    return function (number){
return number * multiplare
    }
}
const double=makeMultiplare(2)
const triple=makeMultiplare(3)
console.log(double(5));
console.log(triple(5));
