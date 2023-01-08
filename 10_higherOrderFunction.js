// Higher Order Function - A function that accepts function as a parameters and or returns function
function anotherFunction(){
    console.log("I am inside another function....");
}
// function show(name, age, ...details){
//     console.log(name,age, details);
// }
// show("Sachin", 45, "Mumbai", 101);


function show(myNumber){ // myNumber is an argument
    myNumber();
    let innerFunction = function(){
        console.log("Inner function.....");
     }
     return innerFunction;
}
 let inner = show(anotherFunction);
 inner();