//Reduce method-:Is used to reduce an array to singal value and iterate from left to right;
//Does Not change the original array
const arrayOfNumber = [0, 2, 3, 5, 6, 8 ];
const result = arrayOfNumber.reduce( (runningTotal, value) => {
    return runningTotal + value
}); // 200 + 2} );
console.log(result);
console.log(`----------------------------------------------------------------`);
const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// Sum of all even numbers
// Even Numbers
//Sumconst
  evenNums = array.filter( value => value%2==0 );
  const finalResult = evenNums.reduce((runningTotal, value) => runningTotal + value);
  console.log(evenNums);
  console.log(finalResult);

  
  console.log("Chaining methods");
  const resultSum = array.filter( value => value%2==0)
  .reduce((runningTotal, value) => runningTotal + value);
  console.log(resultSum);

  console.log(`====================================`);
  const arrayOf=[47,34,55,66,34,87,34,22,34,]
  const sumOf= arrayOf.reduce((runningTotal,value)=>{
return runningTotal + value
  })
console.log("Given Array-:",arrayOf);
console.log("Sum Of All Array-:",sumOf);

const evenNo=arrayOf.filter(value=>value%2==0 )
console.log(evenNo);

const sum=evenNo.reduce((currentValue,value)=>{
return currentValue + value
})
console.log("Sum Of All Even Number-:",sum);

const sumOfOddNumber=arrayOf.filter(value=>value%2==1).reduce((currentValue,index)=>currentValue + index)
console.log("Sum Of All Odd Number-:",sumOfOddNumber);