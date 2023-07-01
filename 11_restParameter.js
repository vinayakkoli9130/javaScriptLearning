//you can able to declare all value on one parameter using spread(...) operator
//rest means remaining//rest parameter is used to store remaining value if argument in one parameter
//they defined as last parameter
function show(name, age, ...details){
    console.log(name,age,details);
    }
    show("Sachin", 45, "Mumbai", 101);



function movie(val1,...moviesDetalis) {//Using sprade operator we can store remaining value in one parameter
console.log(val1,moviesDetalis);
}
movie("Jab Tak Hain Jaan","Shah-rukh-khan","katrina","Mohit Chouhan");

// Self Invoking Function or IIFE - Immediately Invoked Function Expression

console.log("Self Invoking Function or IIFE - Immediately Invoked Function Expression");

(function show(){
    console.log("Bhar bhar ke likho");
})();

(function display(val1,val2) {
    console.log(val1+val2);
})(12,12)


// (function show(){
//     console.log("Jay Shree Ram");
// })()