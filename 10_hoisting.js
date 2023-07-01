//Hoisting-:hoisting means you/we can acceses variable or a fuction before declaration.
//for variables only those variable will be hoisted that is declared using `var` keyword and not using the `let and `const`keyword
//for function only hoisted Regular  function

console.log(city);//you can accesses before declarion of variable using `var` keyword
var city = "Pune";


let state = "MH";//let can't allow hosthing
console.log(state);
//hosting can perform only normal function
show();//you can call function Before declaration.

function show(){//only allowed hoisting normal function not allowed function expression 
    console.log("Hello I am in show");
}

// display();
// var display = function(){//not hoisting allowed function expression 
//     console.log("Hello I am in display");
// }
console.log(`===================================================================================================`);



console.log(college);//when we can access variable before declaration is called as hoisthing.hoisting can perform when you declare "var "keyword
var college="Sangola";

movie()//you can able to call function before declaration is called hoisting.they can perform only on normal function
function movie() {
    console.log(`Jab Tak Hain Jaan`);
}