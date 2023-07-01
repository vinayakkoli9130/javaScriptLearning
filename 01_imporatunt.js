//hoising

// 'use strict'
//Variable Hoisting-:you can hoist only those variable which is declared by 'var'keyword.
//you can't hoist let and const 
hoisting=23
console.log(hoisting);
var hoisting

//you can hoist only regular function.you can't hoist function expression and any other funtion
hoistings("Vinayak Koli")
function hoistings(val) {
    console.log(val);
}



