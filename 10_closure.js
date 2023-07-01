//Closure -:A closure is an inner function that has access to the outer function and globle variable.

//It Has access to it own scoped variable.

//it has access to the outer function variable.


//it has access to the globel variable.

let globalVariable = 100;//globle variable
function outer(){ 
    let outerVariable = 200;//outer function variable
    let inner = function(){
        let innerVariable = 300;//inner function variable
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
console.log(`------------------------------------------------------------------------`);
var globalVariables="Jay Shree Ram";
function outer() {
    let outerVariables="Jay Hanuman";
    function inner(){
let innerVariables="Jay Shree Krishna"
console.log(globalVariables);
console.log(outerVariables);
console.log(innerVariables);
    }
    return inner
}
let cos=outer()
// cos(); 
outer()()