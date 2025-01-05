//Array Sort In Assending And Disending Using Sort Method
var array=[23,43,56,34,22,54,68,9,2,76,11]
var assending=array.sort((a,b)=>{
return a-b
})
console.log(assending);
console.log('-------------------------------------------------------------------------------');
//Addition Of Array Using Reduce() Method
let addition=array.reduce((a,b)=>{
return a+b
})
console.log("Addition Of Array-:",addition);
//Addition Of Array Using for Loop
var forAddition=0
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  forAddition= forAddition+element
  console.log(forAddition);
}
console.log('-------------------------------------------------------------------------------');


//Find Missing Number In Array 1 To 100
let arr=[25,87,12,45,33,78]
let miss=[]
for(let i=1;i<=100;i++){
  
if(arr.indexOf(i)==-1){
miss.push(i)
}
}
console.log("Missing Number In 1 To 100-:",miss);

var missing=[]
for (let index = 1; index <=100; index++) {
   if(array.indexOf(index)==-1){
    missing.push(index)
   }
}
console.log("Missing Value Into 1 To 100 In Given Array-:",missing);
console.log('-------------------------------------------------------------------------------');
//Find Even And Odd Number In Given Array
var evenNumber=[]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%2==0) {
      evenNumber.push(element)
      console.log(evenNumber); 
    }
} 
console.log('-------------------------------------------------------------------------------'); 
//Find Even And Odd Index Value In Given Array
var EvenIndexValue=[]
for (let index = 0; index < array.length; index++) {
 const element=array[index]
  if (index%2==0) {

   console.log(element);
  }
  
}

const add = ()=>{
  return 14+26
}
console.log(add());//40

const x=9;

if (true) {
  const x=5;
  
}
console.log(x);//5

console.log(0.1+0.2===0.3);//false