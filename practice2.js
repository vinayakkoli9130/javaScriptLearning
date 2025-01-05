let a=10
let b=20
console.log(a,b);

let temp=a
a=b
b=temp
console.log(a,b);

console.log("-----------------------------------------");

let m=10
let n=20
console.log(m,n);
m=m+n
n=m-n
m=m-n
console.log(m,n);

console.log("---------------------------------------");
console.log(typeof(23));
console.log(typeof("vinayak"));
console.log(typeof(true));
console.log(typeof null);
console.log(typeof "Mahi");

let result=function(){
  return  "12"
    
}
result()

console.log(typeof result);
console.log(typeof Object);//buit in function
console.log(typeof Number);
console.log("-----------------------------------------");
function info(name,age,city){
return `name ${name} age ${age} city ${city}`

}
let results=info("Vinny",24,"Bandra")
console.log(results);

function doSomething(){
    return "Hello Boy's I Am Learning js"
    
}
let data=doSomething
console.log(data());


// console.log(info("Vinny",24,"Bandra"));

let num=+true
let strNum=num.toString()
console.log(num,strNum,typeof strNum);

//hoisting
car="Ertiga"
console.log(car);
var car

display()
function display(){
  console.log("Hello World I Am Learing Js");
  
}

// console.log(vehical);

// let vehical="Honda"

// displays()
// var displays=function(){
//   console.log("Hello World");
  
// }


function msg(){
  return "Jay siyaram";
}
let message=msg()
// console.log(msg());
console.log(message);

function rajuBhaiya(paisa){//Function with arguments and return value
  console.log("Going in market", paisa);
  console.log("Purchased fresh vegetables", paisa);
  console.log("Come back");
  return "Bag of vegetables";
  
}
 var bagOfVegetables= rajuBhaiya(100);
 console.log(bagOfVegetables);

 function info(name,age,city){
return `Name-:${name}  Age-:${age}  City-:${city}`

 }
 console.log(info("vinayak",24,"Nandur"));
 
 let square=function(num1){
  return num1*num1
 }
 console.log(square(5));
 console.log(square(25));
 console.log(square(55));

 let areaOfRectangle=function(length,width){
  console.log("Area Of Reactangle Is",length*width);
  
 }

 areaOfRectangle(454,635)

//  setTimeout((val=8)=>{
//   console.log(val+val);
// },3000)

let name="ramesh"
let srName="hanamane"
let perInfo=name.concat(" Bhima ",srName)
console.log(perInfo);

let str="   Hello World   "
// console.log("Total Number Of Length Of String-:",str.length);


// let removeSpaces=str.trim()
// console.log("After Remove Extra Spaces String Length",removeSpaces.length);


// console.log("Total Number Remove Spaces",str.length-removeSpaces.length);




let totalLength=str.length
console.log(totalLength);

let totalWords=str.split(" ")
console.log(totalWords);

let lengthOfWords=totalWords.length
console.log(lengthOfWords);

console.log("After Remove Spaces-:",totalLength-lengthOfWords);

//operator
console.log("Arithmatic Operator");

function arithmatic(val1,val2){
console.log("Addition",val1+val2);
console.log("Substraction",val1-val2);
console.log("Multiplication",val1*val2);
console.log("Division",val1/val2);
console.log("Module",val1%val2);
console.log("Exponsion",val1**val2);

}
arithmatic(12,6)

console.log(2**4);//2*2*2*2//16
console.log(5**5);//5*5*5*5*5//3125
 console.log(8**3);//8*8*8//512

//increment ++ / decrement --
//post increment
let val=2
val++
console.log(val);

//post decrement
let val1=2
val1--

console.log(val1);
console.log("---------------------");

let val2=2
console.log(++val2);


console.log(val2);

let val3=2
console.log(--val3);


console.log(val3);
console.log("------------------------------");

//Assignment Operator

let number=10
let number1=number//Assignment
console.log(number);
console.log(number1);

let number2=12

// number+=number2
// console.log(number);

// number-=number2
// console.log(number);

// number*=number2
// console.log(number);

number/=number2
console.log(number);

// number%=number2
// console.log(number);

console.log("-------------------------------");

//comparision operator

let value1=10
let value2="10"


console.log(value1==value2);
console.log(value1===value2);
console.log(value1<value2);
console.log(value1>value2);
console.log(value1<=value2);
console.log(value1>=value2);
console.log(value1!=value2);
console.log(value1!==value2);

//ternory operator
console.log(value1 == value2?"true":"false");

console.log(value1 === value2?"true":"false");
//
function passOrFail(sscMarks){
  let resultPassOrFail=(sscMarks<0 || sscMarks>100?"Invalid Data":(sscMarks>=35&&sscMarks<=100)?"pass":"fail")
return resultPassOrFail
}
console.log(passOrFail(35));
console.log(passOrFail(-75));
console.log(passOrFail(100));
console.log(passOrFail(23));

//

function voting(age){
let ageOfPerson=(age<0 || age>120)?"InValid Data":(age>=18 && age<=120)?"You Are Eligibale For Voting":"You Are Not Eligible For Votting"

return ageOfPerson
}
console.log(voting(17));
console.log(voting(87));
console.log(voting(125));

function numberss(num){
let oddEven=num%2==0?"Even":"Odd"
return oddEven
}
console.log(numberss(4));
console.log(numberss(13));

//type conversion-:

//implicit  conversion to string
//numeric string used  with + operator gives string type.

let resultss="3"+ 3
console.log(resultss);//33

let result1=4+"7"
console.log(result1);//47

//implicit boolean conversion to number

//if boolean is used true is 1 ,false is 0


let result2="4"-true
console.log(typeof result2,result2);//3

result2=4+true
console.log(typeof result2,result2);//5

result2=4+false
console.log(typeof result2,result2);//4

result2=4-false
console.log(typeof result2,result2);//4

//implicit string conversion to number

//numeric string used with -,*,/ gives result number

let result3
result3="4"-"2"
console.log(typeof result3,result3);

result3="4"*2
console.log(typeof result3,result3);

result3="4"%"2"
console.log(typeof result3,result3);

result3=4%"2"
console.log(typeof result3,result3);

//Explicit conversion number string and boolean value to numbers in that case Number() function built in method we can use
//string to number

let result4
result4=Number("324")

console.log(typeof result4,result4);

result4=Number("888")
console.log(typeof result4,result4);

//boolean to number

result4=Number(true)
console.log(typeof result4,result4);

result4=Number(false)
console.log(typeof result4,result4);

result4=Number("342e-1")
console.log(typeof result4,result4);


//Explicit Conversion-:invalid string to number return result Nan- not a number

result4=Number("Hello")
console.log(typeof result4,result4);

result4=Number(undefined)
console.log(typeof result4,result4);

result4=Number(NaN)
console.log(typeof result4,result4);

//Explicit conversion-:string to number using + operator 

result4=+"100"
console.log(typeof result4,result4);

//Explicit conversion -:number to string

result4=100
let strr=result4.toString()
console.log(typeof strr,strr);














































 






