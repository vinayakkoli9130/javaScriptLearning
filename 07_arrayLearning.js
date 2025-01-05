//Array -:Array is Non Refernce or Non-Primitive Data Type Which Can Store Multiple Values.array can define using squre bracket ([]).

let arrayName=[];// Empty Array
console.log(arrayName);

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 6]; 
console.log(arrayOfNumbers);

console.log(`===== Total number of elements available in array ====`);
let totalElements = arrayOfNumbers.length;//length-:Using Length Property we can find Total Number Of Elements
console.log(`Total Elements in arrayOfNumbers --> ${totalElements}`);

let typeOfArray =typeof arrayOfNumbers;//typeOf Array Is object
console.log(`Type of array - arrayOfNumbers --> ${typeOfArray}`);

console.log(`=== Accessing array elements===`);
let elementAtZeroIndex = arrayOfNumbers[0];//0th index element
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Fifth Index : ${arrayOfNumbers[5]}`);

console.log(`Last Element : ${totalElements-1}`);//last element of array

console.log(`When provided value is greater than length : ${arrayOfNumbers[9]}`);

arrayOfNumbers[2] = 100; // Update or Modify value using index
console.log(arrayOfNumbers);


let indexOf10 = arrayOfNumbers.indexOf(10);//find the element index
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
console.log(`-----------------:Traversing A Array:----------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    console.log(element);
    
}

console.log(`Traversing array using for loop in Reverse order`);

let lastIndex = arrayOfNumbers.length-1;
      // initialization   condition  update 
for (let index = lastIndex; index > 0; index--) {
    const element = arrayOfNumbers[index];
    // console.log(element); 
}


// Array of salaries
console.log(`----------Accessing salary of each employee-----------`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;// 30000
for (let index = 0; index < arrayOfSalaries.length; index++) {
    const element = arrayOfSalaries[index];// 10000 20000 30000
    sumOfSal = sumOfSal+element;
}
console.log(`Total Salary of all employee is : ${sumOfSal}`);


console.log(`======== push() methods=========`);//Using push() Method you can add element In 'Last Index'
let arrayOfNu = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNu);
arrayOfNu.push(3);
console.log(arrayOfNu);

console.log(`======== unshift() methods=========`);//Using unshift() Method you can add element In 'first  Index'
var arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.unshift(77);
// arrayOfNum.unshift(99, 111, 333);
console.log(arrayOfNum)

console.log(`======== pop() methods=========`);//Using pop() Method you can remove element In 'Last Index'
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNum.pop();
console.log(popResult);
console.log(arrayOfNum)

console.log(`======== shift() methods=========`);//Using push() Method you can remove element In 'first Index'
var arrayOfNum = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNum.shift();//remove first element 4
console.log(shiftResult);
console.log(arrayOfNum)

console.log(`======== slice() methods=========`);//Using slice() method you can access bite of array
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNum.slice(3);//available only index number 3 to next index element
let sliceRes = arrayOfNum.slice(2, 5);
console.log(arrayOfNum);//
console.log(sliceResult);//
console.log(sliceRes);

console.log(`======== splice() methods=========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceResult = arrayOfNum.splice(3);
console.log(`After using splice(3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceResult);
console.log(`-----------------------------------------------------------------`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
let spliceRes = arrayOfNum.splice(2, 3);
console.log(`After using splice(2, 3) method `);
console.log("Array after deleting elements ", arrayOfNum);
console.log("Total deleted elements: ", spliceRes);

console.log("====== Inserting element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(2, 0, 88);//adding element in array index 2 element 88  
console.log(arrayOfNum);
arrayOfNum.splice(1, 0, 55, 99, 22);
console.log(arrayOfNum);

console.log("====== Replacing element in the array =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
arrayOfNum.splice(3, 1, 22);//replace element using (1)
console.log(arrayOfNum);
console.log("====== Replacing element in the array when splice(2, 3, 99, 77 ) =======");
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
arrayOfNum.splice(2, 3, 77, 99 );
console.log(arrayOfNum);

console.log(`======== for of loop ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
for (const element of arrayOfNum) {//In Array we can for of loop for traversing
    console.log(element);
}

console.log("==========include() ========");//element is available or Not In array check using include() method
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let isAvailable =  arrayOfNum.includes(9);
console.log(isAvailable);

console.log(`======== join() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNum.join(" , ");//recreate seprate new array and seperate elements
console.log(joinResult);
console.log(typeof joinResult);

console.log(`======== concat() ==========`);//by using concat method you can concat your multiple array in one array
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray = arrayOfNum.concat(arrayOfNames, arrayOfCities);//all array concat in arrayOfNum
console.log(concatArray);

console.log(`======== Resize an array ==========`);//you can resize your array . they can remove last index elements
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
console.log("Length Of Array-:",arrayOfNum.length);
arrayOfNum.length = 5;
console.log(arrayOfNum);
console.log(arrayOfNum.length);





