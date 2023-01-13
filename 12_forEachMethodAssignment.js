const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
console.log("Given Array",arrayNumbers);
let positiveValue=[]

console.log(`----------------1)Element With Index Number-----------------`);
arrayNumbers.forEach((value,index)=>{
console.log("Value Is-:",value,"Index Is-:",index);
if (value>=0) {
   positiveValue.push(value) 
}
// else{   
// negativeValue.push(value)
// }
})
let negativeValue=[]
arrayNumbers.forEach((value)=>{
if(value<0){
   negativeValue.push(value)
}
})
console.log(`-------------------------------------------------------------------------------`);
console.log("2)Positive Value In Given Array-:",positiveValue);
console.log(`-------------------------------------------------------------------------------`);
console.log("3)Negative Value In Given Array-:",negativeValue);
console.log(`-------------------------------------------------------------------------------`);
let evenNumber=[]
 arrayNumbers.forEach((value)=>{
if (value%2==0) { 
 evenNumber.push(value)
  
}
 })
 console.log("4)Even Value In Given Array-:",evenNumber)
 console.log(`-------------------------------------------------------------------------------`);
 let sumOfArray=0
 arrayNumbers.forEach((value,index)=>{
sumOfArray=sumOfArray+value;
 })
 console.log("5)Sum Of All Elements In Given Array-:",sumOfArray);
 console.log(`-------------------------------------------------------------------------------`);
 var evenIndexNumber=" ";
 arrayNumbers.forEach((value,index)=>{
    if (index%2==0) {
   evenIndexNumber=evenIndexNumber.concat(" ",value)  
}
 })
 console.log("6)Even Index Position Elements-:",evenIndexNumber)
 console.log(`-------------------------------------------------------------------------------`);





















