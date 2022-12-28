let array=[12,32,43,67,43,60,11,21,33,,32,54]
console.log(`Available Element In Array-:${array}`);
console.log(`Total Numbers Of Element In Array-->${array.length}`);
console.log(`Size Of Array Index-->${array.length-1}`);
console.log(`5th Position Of Index -->${array[5]}`);//Which Value Of index 5
console.log(`1st Possition Of Index-->${array[1]}`);//Which Value Of index 1
console.log(`0th Possition Of Index-->${array[0]}`);//Which Value Of index 0
console.log(`Change 2nd Possition With 34 Number-->${array[2]=34}`);//Replace Values
array[2]=34;
console.log(`After Changing The 2nd Possition Value Array-->${array}`);
console.log(`Index  Number Of 67--->${array.indexOf(67)}`);//Index Number Of 67
console.log(`Index  Number Of 11--->${array.indexOf(11)}`);//Index Number Of 11
console.log(`Index Of Number Of 43--->${array.indexOf(43)}`);//Index Number Of 43
console.log(`Index Of Number Of 32--->${array.indexOf(32)}`);//Index Number Of 32
console.log(`***********************************************************************************`);
var arrayNumbers=[21,45,12,87,56,88,34,23,10,67]
console.log(`traverce Elements In array`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    console.log(element);
}
console.log(`-Reversing Array`);//Reverce Array
for (let index = arrayNumbers.length-1; index >0; index--) {
    const element = arrayNumbers[index];
    console.log(element);
    
}
console.log(`=============Accessing salary of each employee========================`);
var arrayName=[200,300,100,600,450,500,650]
let counter=0;
for (let index = 0; index < arrayName.length; index++) {
    const element = arrayName[index];
    counter=counter+element;//Addition Of All Values
}
console.log(counter); 
console.log(`=============Push Method===============================`);
var arrayName=[20,30,10,60,45,50,65]
console.log(arrayName);
var replace=arrayName.push(55,25)//Value Added In last Possitions of Index
console.log(replace);
console.log(`Pushing Element On last In Array `,arrayName);
console.log(`=================Unshift Element On First In Array==================== `);
var add=arrayName.unshift(44,70)//Values Added In First In Index
console.log(add);
console.log(`Pushing Element On First In Array`,arrayName);
console.log(`=================Poping Element On last In Array==================== `);
console.log(arrayName);
var arrayN=arrayName.pop()//Removing Last Index Value
console.log(arrayName);
console.log(arrayN);
console.log(`=================Shifting Element On last In Array==================== `);
console.log(arrayName);
var arrayN=arrayName.shift()//Removing First Index Value
console.log(arrayName);
console.log(arrayN);
console.log(`===============================Slice Method===========================`);
console.log(arrayName);
var arrayN=arrayName.slice(4)//print 4 to next all index
console.log(arrayN);
console.log(`===============================Splice Method===========================`);
 let arraySting=[46,39,22,65,45,88,12,19,39]
console.log(arraySting);
arraySting.splice(2,0,72)//Adding Element OF before index Number 2
console.log(arraySting);
arraySting.splice(4,1,32)//Replace Index Number 4 Value With 32
console.log(arraySting);
arraySting.splice(5,1)//Deleting Index Value
console.log(arraySting);
// arraySting.splice(2)//Print Before Index Number 2 Values
// console.log(arraySting);
arraySting.splice(3,3)//Deleting 3 Number Index To Next 3 value
console.log(arraySting);
arraySting.splice(2,3,5)//Index Number 2 to next two value delete and Index Value Replaced By 5
console.log(arraySting);
console.log(`===============================for of Method===========================`);
let string=[21,52,87,68,24,11,93,36]
console.log(string);
for (const iterator of string) {
    console.log(iterator);
}
console.log(`===============================include Method===========================`);
let str=[34,66,34,7,55,11,22,33,44,98]
console.log(str);
let inclu=str.includes(11)//Given Value Is Available Or Not In Array
console.log(inclu);
console.log(str.includes(84));//Given Value Is Not Available In Array
console.log(`===============================join Method===========================`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let joinResult=arrayOfNum.join("::")
console.log(joinResult);
console.log(typeof joinResult);
console.log(`======== concat() ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Moni", "Jenny", "Shenny", "Tomy"];
let arrayOfCities = ["Pune", "Mumbai", "Banglore"];
const concatArray=arrayOfNum.concat(arrayOfNames,arrayOfCities)
console.log(concatArray);
console.log(`======== Resize an array ==========`);
var arrayOfNum = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNum);
console.log(arrayOfNum.length);
arrayOfNum.length=4
console.log(arrayOfNum);
console.log(arrayOfNum.length);
