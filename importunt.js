console.log("------------------------Find 3rd Smallest Number In Given Array ---------------------------");

var array=[21, 23, 25, 28,12,56,43,23,45, 30,34, 60, 45, 35, 45, 73,33,56,67,89, 45, 56]  
console.log("1)First Logic");
array.sort((a,b)=>{
return a>b?1:-1
})
 console.log(array[2]);
 console.log("---------------------------------------------------------------------------------");
 console.log("2)Second Logic");
 const numbers = [5, 9, 6, 3, 7, 5, 1, 2, 4];
numbers.sort((a,b)=>  {return a - b} );
console.log("Third smallest number: " + numbers[2]);
 
console.log("-------------------------------:Find Missing Number In Given Array 1 To 100:---------------------------------");
var array=[21, 23, 25, 28,12,56,43,23,45, 30,34, 60, 45, 35, 45, 73,33,56,67,89, 45, 56] 
console.log("1)First Logic");
var missing=[]
for (let index=1; index <=100; index++) {
if (array.indexOf(index) == -1) {
    missing.push(index)
    // console.log(index);
}    
}
console.log(missing);




console.log("---------------------------------------------------------------------------------");
console.log("2)Second Logic");
var a = [21, 23, 25,34,22,43, 28, 30,34, 60, 45, 35, 45, 73,33,56,67,89, 45, 56],
  count = 100;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);
console.log("---------------------------------------------------------------------------------");
console.log('-----------------------Find Small Number And large Number In Given Array------------------------');
var arr = [2, 3, 1, 6, 4, 7, 8, 5];

var max = arr[0];
var min = arr[0];

for ( i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);
console.log(max);

