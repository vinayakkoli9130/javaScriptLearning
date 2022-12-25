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