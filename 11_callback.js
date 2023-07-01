// Given the home work
//callback-:function can be passed as argument to another function is called callback
// Anil -> Homework
function anilHomeWork(callback){
    console.log("Anil is doing homework... ");
    console.log("After some time.. Anil did homework..");
     callback();
}

// Sunil -> Homework
function sunilHomeWork(){
    console.log("I am happy Anil, you have completed homework");
    console.log("I am bit lazy and don't have time as well");
    console.log("So copying as it is your homework");
}
anilHomeWork(sunilHomeWork);
//sunilHomeWork();

console.log("Callback with arg functions");
let add = function (n1, n2){
    console.log(n1+n2);
}
let multiply = function (n1, n2){
    console.log(n1*n2);
}

function operation(callbackAdd, callbackMultiply) {
    console.log('operation');
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
} 
operation(add, multiply);
