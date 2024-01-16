//forEach()-:forEach() method is buit-in function of javascript.it helps to loops over element of array.
//and perform specific action on each element using callback function without returning new array.
//it is commonly used for manipulating array such as printing their elements,filtering,mapping,reducing element.

const myArray=[3,4,3,2,5,63,2]
myArray.forEach(element=>console.log(element+2))

//recursion-:recursion is process of calling itself.
//fuction that call itself is called recursion function.
//syntax-:
function recursiveFunction(parameters) {
  if (/* base case */ dds) {
    // return some value
  } else {
    // recursive call(s)
    recursiveFunction(modifiedParameters);
  }
}

console.log("-----------------Example Of Recursion----------------");
 function factorial(n) {
  if (n === 0) {
   return 1; // base case
   } else {
    return n * factorial(n - 1); // recursive call
   }
 } 
console.log(factorial(5));

function squre(n) {
  if(n===0){
    return 1
  }else{
 return   n * squre(n-1)
  }
}
console.log(squre(1));