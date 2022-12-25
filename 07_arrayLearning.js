let arrayName=[];// Empty Array
console.log(arrayName);

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; 
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[4]}`);

console.log(`Last Element : ${totalElements-1}`);

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);


let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 10 --> ${indexOf10}`);

console.log(`----------------------------------------------------------------------------`);
let arrayNumbers=[2,5,6,2,1,3,4,7,3,9];
console.log(arrayNumbers);
console.log(`Total Number Of Elements-:${arrayNumbers.length}`);
let typeOf=typeof arrayNumbers
console.log(`Type Of Array-:${typeOf}`);
console.log(`=== Accessing array elements===`);
let elements = arrayNumbers[0];
console.log(`Element at Zero Index : ${elements}`);
console.log(`Element at Fifth Index : ${arrayNumbers[4]}`);
console.log(`Element at Seventh Index: ${arrayNumbers[7]}`);
let index = arrayNumbers.indexOf(10);
console.log(`Index of element 10 --> ${index}`);
console.log(`Last Element In Array-->${arrayNumbers.length-1}`);
arrayNumbers[2] = 27; // Update or Modify value using index
console.log(arrayOfNumbers);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    console.log(element);
    
}




