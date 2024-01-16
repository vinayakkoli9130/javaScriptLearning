
// function doSomething() {
//     console.log(this);
//   }
     
//   doSomething();
console.log("-------------Swap Two Variable Number Without Using Third Variable-------------");
let a=10
let b=20
console.log("Before Swapping Variable-:",a,b);
a=a+b

b=a-b

a=a-b


console.log("After Swapping Variable-:",a,b);
console.log("--------------------------------------------------------------------------------------------------------");
var sweety="Sweety";
var cutie="Cutie";
console.log("================Assignment-1.1=================");
console.log("======Before Swap=======");
console.log(sweety,cutie);
var temp = sweety;
sweety = cutie;
cutie=temp;
console.log("======After Swap=======");
console.log(sweety,cutie);

console.log("================Assignment-1.2=================");
var num1=100;
var num2=200;
var num3=300;
console.log("======Before Swap=======");
console.log(num1,num2,num3);
var temp=num1
num1=num2;
num2=num3;
num3=temp;
console.log("======After Swap=======");
console.log(num1,num2,num3);

var val1=70
var val2=60;
var val3=50;
var val4=40;
console.log('Give Values-:',val1,val2,val3,val4);
var temp=val1
val1=val2
val2=val3;
val3=val4;
val4=temp;
console.log('After Swap-:',val1,val2,val3,val4);


// var temp = myNumber;
// myNumber=yourNumber;
// yourNumber=temp;
// console.log(myNumber,yourNumber);


var va11="Vinayak"
var va12="Vaishnavi"
var va13="Jyoti"
console.log("Before Swap-:",va11,va12,va13);
let temprary=va11
va11=va12;
va12=va13;
va13=temprary
console.log("Before Swap-:",va11,va12,va13);
console.log("================================================================================");
var number1=1
var number2=2
var number3=3
console.log("Before Swap-:",number1,number2,number3);

var tempory=number1
number1=number2
number2=number3
number3=tempory
console.log("After Swap-:",number1,number2,number3);

console.log("Swap In Function");
function swappingss(val1,val2,val3){
    console.log("Before Swapping-:",val1,val2,val3);
    var temp=val1
val1=val2
val2=val3
val3=temp

console.log("After Number Swapping-:",val1,val2,val3);
}
swappingss(1,2,3)
swappingss("Mahesh","Ganesh","Dipak")

var x="Mahesh"
var y="Vinayak"
console.log("Before Swap String-:",x,y);
var n=x
x=y
y=n
console.log("After Swapping String-:",x,y);
console.log("Create Function To Swapping Two Number Without Using Third Value");
function swap(a,b) {
    console.log("Before Swapp-:",a,b);
    a=a+b
    b=a-b
    a=a-b
    console.log("After Swapp-:",a,b);
    
}
swap(2,3)
swap(4,6)