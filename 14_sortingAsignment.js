
const arrayRollNumber=[113,45,56,11,32,45,109,799,56,45]
console.log(`Given Array-:${arrayRollNumber}`);
console.log(`======================1) Reverse Given Array=====================`);
console.log(arrayRollNumber.reverse());
console.log(`===============2) Use Sort() Method Without Any Custom logic============`);
console.log(arrayRollNumber.sort());
console.log(`================3) Sort Array In Descending Order With Custom Logic===================`);
arrayRollNumber.sort((a,b)=>{
return a>b ?1:-1
})
console.log(arrayRollNumber);
console.log(`=================4)Find The Greater Element In Array====================`);
console.log(arrayRollNumber);
console.log(`Greatest Element In Given Array Is-799`);
console.log(`================5)Find the Smallest Element In Array==============`);
arrayRollNumber.sort((a,b)=>{
    return a>b ? -1:1;
})
console.log(arrayRollNumber);
console.log(`Smallest Element In Given Array Is-:11`);
console.log(`=============6) Remove Duplicate Element In Given Array ===========`);
const array= new Set(arrayRollNumber)
console.log(array);