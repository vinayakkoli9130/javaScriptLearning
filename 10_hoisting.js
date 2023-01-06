//Hoisting-:hoisting means you can acceses variable or a fuction before declaration.
//for variables only those variable will be hoisted that is declared using `var` keyword and not using the `let and `const`keyword


console.log(city);//you can accesses before declarion of variable using `var` keyword
var city = "Pune";


let state = "MH";//let can't allow hosthing
console.log(state);

show();//you can call function Before declaration.

function show(){//only allowed hoisting normal function not allowed function expression 
    console.log("Hello I am in show");
}

display();
var display = function(){//not hoisting allowed function expression 
    console.log("Hello I am in display");
}