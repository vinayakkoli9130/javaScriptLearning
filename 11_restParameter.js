//you can able to declare all value on one parameter using spread(...) operator
//rest means remaining//rest parameter is used to store remaining value if argument in one parameter
function show(name, age, ...details){
    console.log(name,age, details);
    }
    show("Sachin", 45, "Mumbai", 101);



function movie(...moviesDetalis) {//Using sprade operator we can store remaining value in one parameter
console.log(moviesDetalis);
}
movie("Jab Tak Hain Jaan","Shah-rukh-khan","katrina","Mohit Chouhan");


// Self Invoking Function or IIFE - Immediately Invoked Function Expression

console.log("Self Invoking Function or IIFE - Immediately Invoked Function Expression");

(function show(){
    console.log("Bhar bhar ke likho");
})();