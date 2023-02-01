console.log(`-------------------------Assignment-1---------------------------------`);
console.log('1)');
var myFullName;
console.log(myFullName);
myFullName="Vinayak Koli"
console.log("Log The First Name And Last Name-: ",myFullName);
myFullName="Vinayak Somning Koli";
console.log("Update Value Of Variable-:",myFullName);

console.log('2)');

var myLove="I Love Only JS";
console.log(myLove);

console.log('3)');
var firstName="Vinayak"
var lastName="Koli";
var age=23;
var address="At Post Nandur Tal-Mangalwedha Dist-Solapur";
var pin_code=413319
var gender="Male"
var isMarried=false;
console.log(firstName,lastName,age,address,pin_code,gender,isMarried);
console.log(`-------------------------Assignment-2---------------------------------`);
console.log('1)');
var sweety="Sweety";
var cutie="Cutie";
console.log("Before Swap-:",sweety,cutie);
let temp=sweety
sweety=cutie;
cutie=temp;
console.log("After Swap-:",sweety,cutie);
console.log('2)');
var num1=100
var num2=200
var num3=300;
console.log("Before Swap-:",num1,num2,num3);
var temper=num1
num1=num2
num2=num3
num3=temper
console.log("After Swap-:",num1,num2,num3);

console.log(`-------------------------Assignment-3-Function---------------------------------`);

function personalDetails(firstName,lastName,collegeName) {
    console.log(firstName,lastName,collegeName);
}
personalDetails("Vinayak","Koli","Sangola College Sangola")
console.log(`3)`);
function  addThreeValue(val1,val2,val3) {
    return val1+val2+val3

    
}
console.log(addThreeValue(10.23,600,40));
console.log(addThreeValue("Hello","Good","Morning"));

var foo=1;
function myFun() {
    console.log(foo);
    var foo=2;
}
myFun()

console.log(`---------------------Assignment-Function Expression-------------------`);
const str=function (val) {
    console.log("Total Character-:",val.length-1);
    console.log('6th Index Character-:',val.charAt(6));
    console.log('11th index chracter-:',val.charAt(11));
    console.log("Last Character-:",val.charAt(val.length-1));
console.log(val.charAt(0));
let length=val.length;
console.log(length * length);
}
str("Js THE MOST POPULAR LANGUAGE")

console.log(`---------------------:Assignment-Function Expression In String:-------------------`);
var string=function stringHandsOn() {
    
}
string()


var strings=function () {
    var stringHands="     Hey You Are Doing Good, Keep It Up     ";
  console.log(`${stringHands}`);
  console.log(`${stringHands.length}`);
  let str=stringHands.trim()
  console.log(str);
  let leng=stringHands.length-str.length
  console.log(`${leng}`);
  console.log(`${str.charAt(0)}   ${str.charAt(str.length-1)}`);
  var word=str.split(" ")
  console.log(word.length);
  console.log(str.indexOf("Good"));
  console.log(str.substring(22));
  console.log(str.slice(22));
  console.log(str.endsWith("Up"));
  console.log(str.startsWith("Hey"));



}
strings()



function squreOf(val) {
se=val.length-1
console.log(se);
console.log(se*se);

}
squreOf("JavaScript")

let greater=function (val1,val2) {
    return val1>val2?"Value1 Is Greater Than Value-2":"Value1 Is Less Than Value-2"
}
console.log(greater(10,-10));
console.log(greater(800,900));

const evenOdd= function (val) {
    return val.length%2?"Odd Number":"Even Number"
}
console.log(evenOdd("JavaScipt"));
console.log(evenOdd("Google"));
// console.log(evenOdd(29));
// console.log(evenOdd(44));
// console.log(evenOdd(0));
// console.log(evenOdd(101));

function maleMarriageEligibility(gender,age,boyName) {
    return age>=21?`Hey ${boyName} you are eligible for marriage`:`Sorry ${boyName} you Are Not Eligible for Marriage`
}
console.log(maleMarriageEligibility("male",25,"Billgates"))
console.log(maleMarriageEligibility("Male",17,"Stew jobs"));
console.log(`------------------------------------------------------------------------------------------------`);

const eligible= function (age) {
    
    
    if (age>=18 && age<=120) {
       console.log("You Are Eligible For Voting"); 
    }
    if (age<18 && age>=1) {
        console.log("You Are Not Eligible for voting");
    }
    if (age<=0 || age >120) {
        console.log("Invalid Data");
    }  
}
eligible(45)
eligible(17)
eligible(8)
eligible(20)
eligible(-20)
eligible(200)
eligible(0)
console.log(`-------------------------------------------------------------------------------------------------`);
function gradeCalculation(mark) {
    if (mark>=90 && mark<=100) {
       console.log("A+"); 
    }
    if (mark>=75 && mark<90) {
       console.log("A"); 
    }
    if (mark>=50 && mark<75) {
      console.log("B");  
    }
    if (mark>=35&&mark<50) {
       console.log("C"); 
    }
    if (mark<35 && mark>=1) {
       console.log("Fail"); 
    }
    if (mark<=0 || mark>=100) {
     console.log("Inavalid Data");   
    }
}
gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)
console.log(`------------------------------------------------------------------------------------------------`);


