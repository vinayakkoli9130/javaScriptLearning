
//let and const keyword
//let keyword is used declare variable with block scope or function scope.
//const keyword is used to declare constunt with block scope or function scope
let x=5
console.log(x);
x=10               //now x is 10 re-signable
console.log(x);

const y=5
console.log(y);
// y=10           // show error y is constunt and can not be reassigned
// console.log(y);

//map()-:used to transform value.Allow us to loop over array access each value and return new array.
var array=[1,2,3,4,5,6,7]
var updatedValues=array.map(a=>{return a*2})
console.log(updatedValues);

//Arrow Function-:Function Can Create Function Cleaner And Shorter Way As Compare To Regular Function
var arrays=(a,b)=>{
console.log(a+b);
}
arrays(5,5)

//filter()-:used to return new array With Only Element Which Are The Satisfies Condiation Defined in function 
//inside filter method.other element are skiped in new array.
var array=[43,52,64,14,63,35,89,56]
var filterElement=array.filter(price=>price>40)
console.log(filterElement);

//reduce()-:used reduce array in Single Value and iterate from left to right

var array=[1,2,3,4,5,6]

var reduceArray=array.reduce((a,c)=>{return a*c})
console.log(reduceArray);

var squre=array.map((currentValue)=>{
return currentValue*currentValue*currentValue
})
console.log(squre);