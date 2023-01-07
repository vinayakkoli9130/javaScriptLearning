//Closure -:A closure is an inner function that has access to the outer function globle variable

let globalVariable = 100;
function outer(){ 
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log("Inner function");
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable);
    }
    return inner;
}
let returnValue = outer();
returnValue();

//outer()(); // We can invoke inner function with like this too
let value=28
 function out() {
let value2=200
let inner = function() {
   let value3=434;
   console.log(value); 
   console.log(value2);
   console.log(value3);
}
return inner
}
let result=out()
result();
// out()();