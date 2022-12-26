let array=[12,32,43,67,43,60,11,21,33,,32,54]
console.log(`Available Element In Array-:${array}`);
console.log(`Total Numbers Of Element In Array-->${array.length}`);
console.log(`Size Of Array Index-->${array.length-1}`);
console.log(`5th Position Of Index -->${array[5]}`);
console.log(`1st Possition Of Index-->${array[1]}`);
console.log(`0th Possition Of Index-->${array[0]}`);
console.log(`Change 2nd Possition With 34 Number-->${array[2]=34}`);
array[2]=34;
console.log(`After Changing The 2nd Possition Value Array-->${array}`);
console.log(`Index  Number Of 67--->${array.indexOf(67)}`);
console.log(`Index  Number Of 11--->${array.indexOf(11)}`);
console.log(`Index Of Number Of 43--->${array.indexOf(43)}`);
console.log(`Index Of Number Of 32--->${array.indexOf(32)}`);
console.log(`***********************************************************************************`);
var arrayNumbers=[21,45,12,87,56,88,34,23,10,67]
console.log(`traverce Elements In array`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    console.log(element);
}
console.log(`-Reversing Array`);
for (let index = arrayNumbers.length-1; index >0; index--) {
    const element = arrayNumbers[index];
    console.log(element);
    
}
console.log(`=============Accessing salary of each employee========================`);
var arrayName=[200,300,100,600,450,500,650]
let counter=0;
for (let index = 0; index < arrayName.length; index++) {
    const element = arrayName[index];
    counter=counter+element;
}
console.log(counter); 
console.log(`=============Push Method===============================`);
var arrayName=[20,30,10,60,45,50,65]
console.log(arrayName);
var replace=arrayName.push(55,25)
console.log(replace);
console.log(`Pushing Element On last In Array `,arrayName);
console.log(`=================Unshift Element On First In Array==================== `);
var add=arrayName.unshift(44,70)
console.log(add);
console.log(`Pushing Element On First In Array`,arrayName);
console.log(`=================Poping Element On last In Array==================== `);
console.log(arrayName);
var arrayN=arrayName.pop()
console.log(arrayName);
console.log(arrayN);
console.log(`=================Shifting Element On last In Array==================== `);
console.log(arrayName);
var arrayN=arrayName.shift()
console.log(arrayName);
console.log(arrayN);
console.log(`===============================Slice Method===========================`);
console.log(arrayName);
var arrayN=arrayName.slice(4)
console.log(arrayN);
console.log(`===============================Slice Method===========================`);

