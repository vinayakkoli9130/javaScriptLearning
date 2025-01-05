// console.log("---------------Swapping Numbers--------------------------")
let x=10
let y=20
console.log(`Before Swap x=${x} y=${y}`);
let temp=x
x=y
y=temp
console.log(`Before Swap x=${x} y=${y}`);
/*let a=10
let b=20
let c=30
console.log("Before Swapping-:",a,b,c);
let temp=a
a=b;
b=c
c=temp
console.log("After Swapping-:",a,b,c);
// console.log("Swap Three Numbers");
// let a=10;
// let b=20;
// let c=30;
// console.log("Before Swapping Number-:",a,b,c);
*/

// let temp=a;
// a=b;
// b=c;
// c=temp;
// console.log("After Swapping number-:",a,b,c);

// console.log("swap two number without using 3rd variable");

// let a=10
// let b=20
// console.log("Before Swapping Number-:",a,b);
// a=a+b
// b=a-b
// a=a-b
// console.log("After Swapping Number-:",a,b);

// let a=10
// let b=20
// console.log("Before Number Swap-: ",a,b);
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("after Number Swap",a,b);

//Function For Swapping
// function swap(a,b){
//     console.log("Before Swap-:",a,b);
// let c=a;
// a=b
// b=c
// console.log("After Swap-:",a,b);
// }
// swap(10,20)
// swap(50,100)
// swap("Anil","Sunil")
// console.log("----------------------------------------------");
// console.log("---------------typeof Operator--------------------------")
//  console.log(typeof false);
// let a=6;
// console.log(a,typeof a);

// console.log(true,typeof true);

// console.log("Vinny",typeof "Vinny");

// console.log(typeof undefined);//undefined

// console.log(typeof null)//object

// console.log(typeof NaN);//number

// console.log(typeof Object);

// console.log("------------------:Function:--------------------");

// function msg(){
//     console.log('jay shree ram')
// }
// msg()
// console.log(msg());//return undefined

// function msg(meassage){
// console.log(meassage);
// }
// msg("jay shree Ram")

// function addition(val1,val2) {
//     return val1 + val2
// }
// let result=addition(5,5)

// console.log(result);

// console.log(addition(5,"5"));

//squre
// function squre(val){
// return  val*val;
// }
// console.log(squre(2));
// console.log(squre(6));

// //Function Expression

// let add=function(val){
//     console.log(val+val)
// }
// add(4)

// console.log("---------------------string template-----------------------------");

// function str(val1,val2){
//     console.log(`${val1+val2}`);
// }
// str(5,5)
// str("vinayak","koli")
// console.log("---------------------:String:--------------------------");
//string-:String Is Sequence Of Charactor or collection of charctor.it is define in "" double quotes or single quotes ''
//every charactor have specific numeric position it is knows as index. index start from 0.
// let string="I Am Angular Developer"
// console.log("length of string-:",string.length);

// console.log("return index 2 charactor-:",string.charAt(2));

// // console.log("combine string or say set one index of two string-:\n",string.concat(" And I Have Two Years Of Experience"));

// console.log("return index possition of given charactor-:",string.indexOf('m'));
// console.log("last Charactor of given string-:",string.charAt(string.length-1));
// console.log('split string into substrings using the specified sepertor and return them as an array-:',string.split( " "));
// console.log("return piece of string -:",string.slice(3,6));//index 3 to 5 ,6 index number not include.
// console.log("return sub string from main string-:",string.substring(3,6));
// console.log("convert string in uppercase-:",string.toUpperCase());
// console.log("convert string in lowercase-:",string.toLowerCase());
// console.log('return given charactor are available or not-:',string.includes("I"),"S is available in given string-:",string.includes('S'));
// console.log("        I AM Angular Developer   ".trim());

// console.log("return given string end with with given charactor-:",string.endsWith('r'));
// console.log("return given string end with with given charactor-:",string.startsWith('I'));
// console.log("----------------------------------------------------------------------------------");
// console.log(
//   "-------------------------------Operator---------------------------------"
// );

//Arithmatic Operator

// function arithmatic(val1,val2) {
//     console.log(`Addition ${val1} + ${val2} = `,val1+val2);
//     console.log(`Substraction ${val1} - ${val2} = `,val1-val2);
//     console.log(`Multiplication ${val1} * ${val2} = `,val1*val2);
//     console.log(`Division ${val1} / ${val2} = `,val1/val2);
//     console.log(`Module ${val1} % ${val2} = `,val1%val2);
//     console.log(`Exposion  ${val1} ** ${val2}=`,val1 ** val2);//5*5*5=125
//     console.log(`Increment ${val1} , ${val2} = `,++val1,++val2);
//     console.log(`Decrement ${val1} , ${val2} = `,--val1,--val2);
//     val1++,val2++
//     console.log(`Increment postfix ${val1} , ${val2} = `,val1,val2);
//      val1--,val2--
//     console.log(`Decrement Postfix ${val1},${val2}=`,val1,val2);
// }
// arithmatic(5,3)

//Assignment Operator

//assignment
// let num1=10
// let modulusResult=num1%3
// console.log(modulusResult);

// var val1=10
// var val2=5
//     console.log(`Assignment ${val1} = ${val2} =`,val1=val2);//val1=5

    // console.log(`Compound Addition ${val1} += ${val2} =`,val1+=val2);//15

    // console.log(`Compound Substraction ${val1} -= ${val2} =`,val1-=val2);//5

    // console.log(`Compound Multiplication ${val1} *= ${val2} =`,val1*=val2);//50

    // console.log(`Compound Division ${val1} /= ${val2} =`,val1/=val2);//2

    // console.log(`Compound Module ${val1} %= ${val2}=`,val1%=val2);//0

    //  console.log(`Compound Exposion ${val1}**=${val2}=`,val1**=val2);//10*10*10*10*10=100000
    
//Comparison Operator

// function comparison(val1,val2){
// console.log(` ${val1} Is Greater Than  ${val2} =`,val1>val2);
// console.log(` ${val1} Is Less Than ${val2} =`,val1<val2);
// console.log(` ${val1} Is Equal To ${val2} =`,val1==val2);
// console.log(` ${val1} Is Strictly Equal ${val2} =`,val1===val2);
// console.log(` ${val1} Is Not Equal ${val2} =`,val1!=val2);
// console.log(` ${val1} Is Strictly Not Equal ${val2} =`,val1!==val2);
// console.log(` ${val1} Is Greater Than Or Equal To ${val2} =`,val1>=val2);
// console.log(` ${val1} Is Less Than Or Equal To ${val2} =`,val1<=val2);

// }
// comparison(10,5)
// comparison("2",2)
// console.log("------------------------------------------------------------------------");

//  console.log("Check odd or even -:" ,10%3?'odd':'even');
// console.log(36%5?'odd':"even");

// console.log("2 is greater than 5",2>5?'true':'false');
// console.log("5 is Greter Than 7-:",5>7?"true":"false");

// console.log("age 20 is applicable of voting-:",18>=20?'your not applicable':'your applicable for voting');
// console.log(18<=35?"Applicable for Voting":"Not Appliciable For Votting");
// console.log("age 10 is applicable of voting-:",18>=10?'your not applicable':'your applicable for voting');

// function resultPassOrFail(marks){
//     var result=(marks<0||marks>100)?'Invalid Data':(marks>=35)?'pass':'fail'
// console.log(result);
// }
// resultPassOrFail(71)

// console.log('----------------------------------------------------------------');

//NaN-:Nan Stands for Not A Number,typeof nan is number but it is not legal number

// let resultDivide=0/0//divide 0 by 0 its return nan
// console.log("0/0-:",resultDivide);

// let add=resultDivide+6//perform arithmatic operation on nan return NAN
// console.log(add,typeof add);

// let number= new Number ("Eight")//trying to convert invalid string to number
// console.log(number,typeof number);

// let mod=0%0
// console.log(mod);/nan

// let numString=+"one"
// console.log(numString,typeof numString);//nan,number
// console.log("-------------------------------------------------------------");
// console.log("----------------------type Conversion--------------------");

// var numStr = "100";

// console.log(numStr, typeof numStr);

// let strNum = +numStr;

// console.log(strNum, typeof strNum);

// let invalidNumString = "fifty";
// console.log(invalidNumString, typeof invalidNumString);
// let invalidStringToNumber = +invalidNumString;
// console.log(invalidStringToNumber, typeof invalidStringToNumber);

// let number=100
// console.log(number,typeof number);

// let explicitConversion=number.toString()
// console.log(explicitConversion,typeof explicitConversion);

// let str="Ten"
//  strNum=new Number(str)
//  console.log(strNum,typeof strNum);

//  console.log(true+true);

// console.log("-----------------:Control Flow Statement:-------------------");
// //Conditional Or Selection Statement
// //if
// let number =5
// if(number<10){
//   console.log("number is greater");
// }

// let number1=0
// if(number1>=0){
// console.log("Number IS Positive");
// }

// //if....else
// if (5%2==1) {
//   console.log("5 Is Odd Number");
// } else {
//   console.log("5 Is Even Number");
// }

// //if....else if.........else
// let number2=10
// if(number2>20){
// console.log("10 is greater than 20");
// }else if(number2<=10){
// console.log("10 is less than or equal to 10");
// }else{
// console.log("10 Is Not Statisfies any condtion");
// }

//switch statement
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Tue");
//     break;
//   case 3:
//     console.log("Wed");
//     break;
//   case 4:
//     console.log("Tue");
//     break;
//   case 5:
//     console.log("Fri");
//     break;
//   case 6:
//     console.log("Sat");
//     break;
//   case 7:
//     console.log("Sun");
//   default:
//     console.log("Invalid Data");
//     break;
// }
//2
// let num="Jyoti"
// switch(num){
//   case "Mahi":
//     console.log("I Am Mahi");
//     break;
//     case "jyoti":
//       console.log("I AM Jyoti");
//       break
//       case "Vinny":
//         console.log("Yes I Am Vinny");
//         break;
//         default:
//           console.log("Invalid Data");

// }

// let val=10>20
// switch(val){
// case 10===10:
//   console.log("10 is Queal to 10");
//   break;
//   case 10>20:
//     console.log("10 is greater tham 20");
//     break;
//     case 10:
//     console.log("10 is 10");
//     break;
//   default:
//     console.log("Invalid data");
// }


// //loop or iterative statement
// //for loop
// for (let index = 10; index >= 0; index=index-2) {
//  console.log(index);
// }

// //while loop
// let number3=0
// while (number3<=10) {
//   number3=number3+3
//   console.log(number3);

// }

// //do....while
// let number4=1
// do{
// console.log(number4)
// number4++
// }while(number4<=20)

// //Flow Control Or Jump Statement


// //break statement
// let num=0
// while(num<=10){
// num++
// console.log(num);
// if(num>=5){
// break
// }
// }
for(let i=1;i<=6;i++){
  if(i==4){
    break
  }
  console.log(i)

}

// //continue statement
// for(let i=1;i<=10;i=i++){

// if(i==6){
// continue;
// }
// console.log(i);
// }

//return-:return value

// function add(val1,val2) {
//   return val1+val2
// } 
// console.log(add(643,344));
// console.log(add(5,4));

// console.log('---------------------------------------------------------------------------');
// var str="Yes I Am Angular Developer"
//  var vowels=""
//  var count=0
// for (let index = 0; index < str.length; index++) {
//   if(index%2==0){
// console.log(index,str.charAt(index));
//   }
  
// var char=str.charAt(index).toLowerCase()
//   if(char=='a'||char=='e'||char=="i"||char=='o'||char=='u'){
// vowels=vowels.concat(char)
// count=count+1
//   }

// }
// console.log(count);
// console.log(vowels);


//reverce string
// let str1="Nothing is impossible in life"
// let reverceStr=""
// for(let i=str1.length;i>=0;i--){
//   var char=str1.charAt(i)
//   reverceStr=reverceStr.concat(char)
// }
// console.log(reverceStr);

// console.log('-------------------------:Array:--------------------------');
//array
// let arr=[9,42,2,43,13,14,89]
// console.log("length of array-:",arr.length);//length of array is 7
// console.log("data type of array-:",typeof arr);//object
// console.log("Accessing array element",arr[0],arr[4]);
// // let totalElements=arr.length-1
// // console.log("Last element of array",totalElements.charAt(totalElements));
// console.log("update index value",arr[1]=12,arr[4]=42,arr);
// console.log("find given element index",arr.indexOf(14),arr.indexOf(12));
// console.log("Add new element At the end of the array",arr.push(65),arr)
// console.log("Add new element at starting of the array",arr.unshift(21),arr);
// console.log("remove last element of array using pop method",arr.pop(),arr);
// console.log("remove first element of array using shift method",arr.shift(),arr);
// console.log("return sub array of main array",arr.slice(2));
// console.log("return array index 3 to 6",arr.slice(3,6))
// console.log("it delete index 3 to next elements",arr.splice(3),arr);//[43,13,14,89] remaining[9,42,2]
// console.log("it delete index 3 to next 2 value",arr.splice(3,3),arr);
// console.log("add element index number 3  of array",arr.splice(3,0,44,45),arr);
// console.log("replace element of array",arr.splice(3,1,5,6,7),arr);
// console.log("add elements ",arr.splice(3,2,23,47),arr);
// console.log("given element are available or not-:",arr.includes(5));
//Traversing Array
//using for loop

//   let arr=[9,42,2,43,13,14,89]
// // // join method
// let arrJoin=arr.join("|")
// console.log(arrJoin);
// console.log(typeof arrJoin);
// str="shsdkak"
// console.log(str.split());

//concat() method
// let arr1=[78,84,24]
// console.log(arr=arr.concat(arr1));
// for(let i=0;i<=arr.length;i++){
//   let element=arr[i]
//   console.log(i,element);
// }

//using for loop
// for(let el of arr){
//   console.log(el);
// }

//travers array reverce.

// for(let i=arr.length;i>=0;i--){
//   let element=arr[i]
// console.log(element);
// }

//sum of all array element
// let sumOfAll=0
// for(let i=0;i<arr.length;i++){
//   let element=arr[i]
// sumOfAll=sumOfAll+element

// }
// console.log(sumOfAll);
// console.log("---------------------------------------------------------------------");
//  let arr=[9,42,2,43,13,14,89]
//  let evenNum=[]
// //even Number in given array
// for(let i=0;i<arr.length;i++){
//   const element=arr[i]
//   if(element%2==0){
// evenNum.push(element)
//   }
// }
// console.log("Even Number In Given Array-:",evenNum);

// //odd number in given array
// let oddNum=[]
// for(let element of arr){
//   if(element%2!==0){
// oddNum.push(element)
//   }
// }
// console.log("Odd Number In Given Array-:",oddNum);

// //even index element of given array.
// let evenIndexEl=[]
// for(let i=0;i<arr.length;i++){
//   const element=arr[i]
//   if(i%2==0){
// evenIndexEl.push(element)
//   }
// }
// console.log("Even index element of given array-:",evenIndexEl);

// //odd index element of given array
// let oddIndexEl=[]
// for(let i=0;i<arr.length;i++){
// const element=arr[i]
// if(i%2!==0){
// oddIndexEl.push(element)
// }
// }
// console.log("Odd Index Element of given array-:",oddIndexEl);

// //sum of all element of given array
// let sumOfArray=0
// for(let element of arr){
// sumOfArray=sumOfArray+element
// }
// console.log("Sum Of All Element Of Array-:",sumOfArray);

//array Cloning
// let arr1=[23,54,11,56,82]

// let arr2=[54,33,56,76]

//Assignment operator

// 
// arr1[2]=22,
// let arr2=arr1//assignment operator for shallow cloning .but one problem change on array also change in new created array
// console.log("arr1-:",arr1);//change in array 1 index 2 value
// arr2[3]=70
// console.log("arr2-:",arr2[3]=70,arr2);           //also change in array2
// console.log(arr1);
// console.log(arr2);

//Object.assign()

// let arr2=Object.assign(arr1)
// arr1[2]=22

// console.log(arr1);
// console.log(arr2);


//deep cloning-:change in one array it can't change on another array
// let arr2=[...arr1]
// arr1[1]=55
// arr2[1]=67
// console.log(arr1);

// console.log(arr2);

//array merge
// let arr1=[23,54,11,56,82]
// let arr2=[32,45,11,65,28]

//Object.assign Not Work
//using Object.Assign()//error
// let arr3=Object.assign(arr2,arr1)
// console.log(arr3);
//using concat method
// let mergeArray=arr1.concat(arr2)
// console.log(mergeArray);

//using + plus operator//error
// let mergeArray=arr1+arr2
//  console.log([mergeArray]);

//using rest parameter
// let mergeArray=[...arr1,...arr2]
// console.log(mergeArray);
// console.log("-----------------Array Freeze--------------------------------");

// let arr=[54,65,12,34,90]

// Object.freeze(arr)//when we use Object.freeze() then we can not add,remove  element from the array
// arr.push(87)//cannot add property
// arr.pop()
// console.log(arr);


// console.log("------------------------:Object:----------------------");
// //object literal
// let employee={
//   id:1,
//   name:"VINNY",
//   age:24,
//   city:"Pune",
//   speek:function(){
//     console.log("I Can Speek English and Hindi");
//   }
// }
// console.log('id' in employee);
// console.log("Log Object-:",employee);
// console.log("Type Of Employee-:",typeof employee);
// console.log("Accessing object properties using .(dot) notation-:",employee.name,employee.age);
// console.log("Accessing object properties using [](squre brackets)-:",employee['name'],employee['age']);
// console.log("Adding New Salary Property In Object-:",employee.salary=30000,employee.company="Cognizent",employee);//adding new property
// console.log("update properties value",employee.city="Mumbai",employee.salary=40000,employee);//update property value
// console.log("Delete Properties from object -:",delete employee.salary,delete employee.company,employee);//delete properties from oject
// //accessing function from object
// employee.speek();
// //add function
// employee.skills=function(){
//   console.log("HTML,CSS,Javascript,Typescript,Angular");
// }
// console.log(employee);
// employee.skills()

// for (const key in employee) {
//   if (Object.hasOwnProperty.call(employee, key)) {
//     const element = employee[key];
//     console.log(key,element);
//   }
// }

//nested object
// console.log("----------------------:Nested Object:---------------------------");
// let student={
//   id:1,
//   name:"Vinny",
//   age:24,
//   marks:{
//     html:94,
//     css:87,
//     javascript:78,
//     add:function(){
//      return this.html+this.css+this.javascript
//     }
//   },
//   familyMembersName:["Dipak","Ganesh","Mahesh"]
// }
// console.log(student);
// console.log("Accessing Student Marks",student.marks);
// console.log("Update Student javascript Marks",student.marks.javascript=80,student);
// console.log("added nested object property of student",student.marks.typescript=77,student);
// console.log("delete nested object property of student",delete student.marks.html,student);

// let totalMarks= student.marks.add()
// console.log("Total Mark Of Student-:",totalMarks);

// console.log("Accessing Family Members Array-:",student.familyMembersName);

// console.log("Check Given Properties Are Available Or Not-:","css" in student.marks);

// console.log("It Returns All Entries Of Object-:",Object.entries(student));
// console.log("It Return All Keys Of Object-:",Object.keys(student));
// console.log("It Return All keys Value of object-:",Object.values(student));

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
    
//   }
// }

// console.log("-----------------:Object Shallow Cloning:-------------");

// let vinny={
//   id:1,
//   name:"Vinny",
//   city:"Pune",
//   marks:{
//     html:76,
//     css:87,
//     javascript:84
//   }
  
// }

// let mahi={
//   id:2,
//   name:"Mahi",
//   city:"Mumbai"
// }

//using assignment operator
// vinny=mahi
// mahi.country="India"
// console.log(vinny);
// console.log(mahi);


// console.log("-----------------:Object Deep Cloning:-------------");
//deep cloning
//1) using spread operator

// let mahi={...vinny}//it fails when access nested object
// vinny.city="Mumbai"
// mahi.name="Mahi"
// console.log(vinny);
// console.log(mahi);

// mahi.marks.css=90//change in one object also changed in shallow object.it overcome this drow back in 
//                  //JSON.parse(JSON.stringify()) 
// console.log(mahi);
// console.log(vinny);

//2)using Object.assign()
// let student1=Object.assign({},student)
// student1.marks.html=90
// student.name="Atul"
// console.log(student);
// console.log(student1);


//3)deep cloning using JSON stringfy

// let student={
//   id:1,
//   name:"Vinny",
//   city:"Pune",
//   marks:{
//     html:76,
//     css:87,
//     javascript:84
//   }
// }
// let student1=JSON.parse(JSON.stringify(student))
// student.marks.css=90//it can also access nested object keys
// console.log(student);
// console.log(student1);

// console.log("------------------Object Merge------------------");

// let student={
//   id:1,
//   name:"Vinny",
//   city:'mumbai'
// }

// let marks={
//   html:89,
//   css:78,
//   javascript:87
// }
//1)using spread operator
  
// let info={...student,...marks}
// console.log(info);

//2)using Object.assign()

// let info=Object.assign({},student,marks)
// console.log(info);

// console.log("----------------------------------------------------------");
// console.log("-----------------Object Freeze--------------------------------");

// let emp={
//   id:1,
//   name:'Vinny',
//   city:'Pune'
// }

// Object.freeze(emp)
// emp.salary=40000
// emp.city="Mumbai"
// console.log(emp);
// console.log("-------------------------------------------------------------------");
// console.log("-----------------------Class-----------------------");
// //class is blue print of object .instanceOf is used check given object is available or not

// class Employee {
// constructor(id,name,city){
//   this.id=id,
//   this.name=name,
//   this.city=city
// }
// }
// let kumar=new Employee(1,"Kumar","Nandur")
// let mahesh=new Employee(2,"Mahesh","Pune")
// let vinayak=new Employee(3,"Vinayak","Mumbai")
// let ganesh=new Employee(4,"Ganesh","Donaj")

//prototype-:prototype is used assign same key value of all objects

// Employee.prototype.country="India"
// console.log(kumar.country);
// console.log(mahesh.country,mahesh.name);

// console.log(kumar,mahesh,vinayak,ganesh);
// //travers objects from class
// for (const key in kumar) {
//   if (Object.hasOwnProperty.call(kumar, key)) {
//     const element = kumar[key];
//     console.log(key,"-",element);
//   }
// }
// for(let key in mahesh){
//   if(Object.hasOwnProperty.call(mahesh,key)){
//     const element=mahesh[key]
// console.log(key,"-",element)
//   }
// }

// //traverse objects of class using function
// function employee(emp){
// for(const key in emp){
//   if(Object.hasOwnProperty.call(emp,key)){
//     const element=emp[key]
//     let count=1
//     console.log(count,key,":-:",element);
    
    
//   }
// }
// }
// employee(kumar)
// employee(mahesh)
// employee(vinayak)
// employee(ganesh)

////instanceof-:object is available or not in class
//object is available or not in class.
// console.log(kumar instanceof Employee);
// console.log(mahesh instanceof Employee);
// console.log(vinayak instanceof Employee);
// console.log(ganesh instanceof Employee);

// console.log("-------------------:Function Constructor:-------------------");
// function Employee(id,name,city){
// this.id=id
// this.name=name,
// this.city=city
// }

// let mahi=new Employee(1,"Mahesh","Pune");

// let vinny=new Employee(2,"Vinayak","Mumbai")

// let kuma=new Employee(3,"Kumar","Chadachan")

// Employee.prototype.country="India"
// console.log(mahi.country);

// console.log(mahi,vinny,kuma);


// //traverse object
// for(const key in mahi){
//   if(Object.hasOwnProperty.call(mahi,key)){
//     const element=mahi[key]
//     console.log(key,element);
//   }
// }

//traverse all objects of function constructor using function
// function employee(empObj){
// for(const key in empObj){
//   const element=empObj[key]
//   console.log(key,element);
// }
// }
// employee(mahi)
// employee(vinny)
// employee(kuma)

// //check obj are avaiable or not
// console.log(mahi instanceof Employee);

//array of object

// class Student{
//   constructor(id,name,city,marks){
// this.id=id
// this.name=name
// this.city=city
// this.marks=marks
//   }
// }
// let std1=new Student(1,"Vinny","Pune",71)
// let std2=new Student(2,"Mahesh","Mumbai",87)
// let std3=new Student(3,"Kumar","Chadachan",78)
// let std4=new Student(4,"Pradnya","Sangli",90)

// let students=[std1,std2,std3,std4]

// // for( let student of students){
// // console.log(`Student Name-: ${student.name}  Student Marks-: ${student.marks}`);
// // }

// //find out object name "std1" using for loop
// for(let i=0;i<students.length;i++){
//   const element=students[i]
// if(element==std1){
// console.log(element);
// }

// }
// console.log("----------------------------------------------------------------");

// console.log("-------------------:Set:-----------------");
// //set -:set is collection of uniqe element.it does not allow same element.
// let set=new Set()
// set.add(6)
// set.add(56)
// set.add(76)
// set.add(45)
// set.add(84)
// set.add(56)//manage only uniqe elements
// console.log("Set-:",set);
// console.log("Set Size-:",set.size);
// console.log("Delete 76 From Set-:",set.delete(76),set);

// console.log("check given element 6 is available or not in set-:",set.has(6));
// console.log("check given element 76 is available or not in set-:",set.has(76));
// console.log("Data Type Of Set -:",typeof set);

// // set.clear()
// // console.log(set);

// //travarse set using for of loop
// for(let element of set){
//   console.log(element);
// }

//remove duplicate element from array using set
// let arr=[23,54,92,34,23,78,54]

// let set=new Set(arr)

// console.log(set);

//remove duplicate element from array using spread operator.

// let removeDuplicateEl=[...new Set(arr)]
// console.log("Remove Duplicate Element From Array-:",removeDuplicateEl);

//
// class Employee {
//   constructor(empId, empName, empAge, empCity) {
//     this.empId = empId;
//     this.empName = empName;
//     this.empAge = empAge;
//     this.empCity = empCity;
//   }
// }
// const empSup = new Employee(11, "Supriya", 23, "PUNE");
// const empDhir = new Employee(22, "Dheeraj", 24, "MUMBAI");
// const empSachin = new Employee(33, "Sachin", 22, "Surat");
// const empGayatri = new Employee(44, "Gayatri", 21, "Bangluru");

// let employee=new Set()
// employee.add(empSup)
// employee.add(empDhir)
// employee.add(empSachin)
// employee.add(empGayatri)

// // console.log(employee);

// //treaverse set 
// for(let element of employee){
//   console.log(element.empId,element.empName,element.empAge,element.empCity);
// }

// console.log("--------------------:Map:---------------------");
// let map=new Map()
// map.set(1,"Vinayak")
// map.set(2,"Mahesh")
// map.set(3,"Radha")
// map.set(4,"Swara")
// map.set(5,"Shambhu")
// map.set(1,"Mahi")//overide new value of key 
// console.log("Map-:",map);
// console.log("Size Of Map-:",map.size);
// console.log("Get Value from key Using get()-:",map.get(3));
// console.log("Get Value from key Using get()-:",map.get(1));
// console.log("Delete key from map Using delete()-:",map.delete(4),map);

// console.log("Check Given Key 2 Is Available Or Not Using Has Method-:",map.has(1));
// console.log("Check Given Key 4 Is Available Or Not Using Has Method-:",map.has(4));

//traversing Map using for of loop

// for(let key of  map.keys()){
//   console.log(key,map.get(key));
// }

// class Employee{
//   constructor(id,name,city){
// this.id=id,this.name=name,this.city=city
//   }
// }
// let emp1=new Employee(1,"Vinny","Pune")
// let emp2=new Employee(2,"Mahi","Mumbai")
// let emp3=new Employee(3,"Mahesh","Bengloru")
// let emp4=new Employee(4,"Vinayak","Nagpur")

// let empMap=new Map()

// empMap.set(1,emp1)
// empMap.set(2,emp2)
// empMap.set(3,emp3)
// empMap.set(4,emp4)

// console.log(empMap);

// //traversing map of objects
// for(let obj of empMap.keys()){
//   const element=empMap.get(obj)
// console.log(element.id,element.name,element.city);
// }
// console.log("----------------------------------------------------------------");
// console.log("-------Function With Default Argument Value--------");
// function add(n1,n2=29){
// console.log("Addition-:",n1+n2);
// }
// add(10,10)
// add(1)
// add(6)

// console.log("Self Invoking Function IIFE--Immidiate Invoked Function Expression");
//1
// (function show(){
//   console.log("Function Can Exicute Immidiatly After Creation");
// })()

//2
// ((val1,val2)=>{
// console.log("Additon-:",val1+val2);
// })(4,6)

// console.log("-----------------setTimeout()---------------------------");

// setTimeout(()=>{//Exicute After 3 Second
// console.log("I Am Learning JS");
// },3000)

// setInterval(()=>{//Exicute in loop After 4 repeatedly
//   console.log("I AM Learning Js");
// },4000)

// console.log("----------------Rest Parameter--------------");

// function info(id,name,...details) {
//   console.log(id,name,details);

// }
// info(1,"Vinny","Sangola College Sangola","Sangola")
// info(2,"Mahi",87)

// console.log("--------------Distructuring------------");
// //Destruturing is ES6 Feature makes easy to extract properties from object and element from array.

// //object-:
// const employee={
//   id:1,name:"Vinayak",collegeName:"Sangola College Sangola",city:"Sangola"
// }
// let {id,name,collegeName,city,salary=70000}=employee

// console.log(id,name,collegeName,city,salary);

// //array-:
// let arr=["TCS","WIPRO","INFOSYS","COGNIZENT"]

// let [ cmp1,cmp2,cmp3,cmp4,cmp5="CAPJIMINI" ]=arr
// console.log(cmp1,cmp2,cmp3,cmp4,cmp5);

// console.log("------------:Arrow Function:-----------");
// let add=(a,b)=>{
//   return a+b
// }
// console.log(add(4,5));
// console.log(add(6,4));

// console.log("------------:-Hoisting-:-----------");

//variable-:only those variable you can that is declared by var keyword.

// console.log(a);//indefined
// a=20
// var a

// x=10
// console.log(x);
// let x

//function
// console.log(add(25,36));//you can hoisted only regular function
// function add(a,b){
//   return a+b
// }

// console.log("---------------------------------------------------");

// console.log("--------------:Closure:-------------");
//1)

// let globalVariable="Globel Variable"

// function outer(){
// let outerVariable="Outer Function"
//   let inner=function() {
//     let innerVariable = "Inner Function";
//     console.log(globalVariable);
//     console.log(outerVariable);
//     console.log(innerVariable);
//   }
//   return inner
// }
// outer()()
// // let returnValue=outer()
// // returnValue()

//2)

// let firstVariable=100
// function outers(){
//   let secondVariable=200
//   let inners=()=>{
//     let thirdVariable=300
//     console.log("Global Variable-:",firstVariable);
//     console.log("Inner Function Variable-:",secondVariable);
//     console.log("Outer Function Variable-:",thirdVariable);
//   }
//   return inners
// }
// // outers()()
// let result=outers()
// result()

// console.log("------------Function First Class Citizen-------------");
//1)function can be stored in variable as value
// let fun=function(){
//   console.log("1) function can be stored in variable");

// }
// fun()

//2)function can be return another function.

// function outer(){
//   let display=()=>{
//     console.log("Hello World!");
//   }
//   return display
// }
// // outer()()
// let innerFun=outer()
// innerFun()

//function can be passed in another function as argument
//1
// function anotherFunction(){
//   console.log("I Am Inside Another Function");
// }

// function show(myNum){
//   console.log("Hello World!");
//   myNum()
// }
// show(anotherFunction)

//2
// function passFunction(){
//   console.log("I Am Inside Another Function");
// }

// function show(anotherFun) {
//   console.log("Hello World !");anotherFun()
  
// }
 // show(passFunction)
// console.log("-------------------------------------------------");
// console.log("-----------:Higher Order Function:----------");
//function that accept another function as argument and or return function.
//1)
// function anotherFunction(){
//   console.log("i am inside another function");
// } 

// function show(myFun){
//   myFun()
//   let inner=()=>{
// console.log("inner Function.........");

//   }
//   return inner
// }
// let result=show(anotherFunction)
// result()

//2)
// function passFun(){
//   console.log("ready to use in another function");
// }

// function show(myFun){
//   myFun()
//   let inner=()=>{
// console.log("Inner Function........");
//   }
//   return inner
// }
// // show(passFun)()

// let result=show(passFun)
// result()
// console.log("--------------------------------------------------------------");

// console.log("---------------:forEach() Method:-----------------------");
// let arr=[32,45,92,220,54]
// let arrr=arr.forEach((currentValue,index,array)=>{
// console.log(currentValue);
// console.log(index);
// console.log(array);
// })
// let evenNum=arr.forEach((currentValue)=>{
// if(currentValue%2==0){
//   console.log("Even Number-:",currentValue);
// }
// })

// let oddNum=arr.forEach((currentValue)=>{
// if (currentValue%2!==0) {
//   console.log("Odd Number-:",currentValue);
// }
// })

// let add=0
// let addOfArray=arr.forEach((currentValue)=>{
// add+=currentValue
// })
// console.log("Addition Of Array-:",add);

// let evenIndexEl=arr.forEach((value,index)=>{
// if(index%2==0){
// console.log("Even Index Elemenet-:",value);
// }
// })

//negative Number
// let arr=[-2,3,-89,43,-90]
// arr.forEach((val)=>{
// if(val<0){
// console.log("negative Number-:",val);
// }
// })

// class Employee{
//   constructor(empId,empName,empDept,empSalary,empCompany){
//   this.empId=empId;
//   this.empName=empName
//   this.empDept=empDept
//   this.empSalary=empSalary
//   this.empCompany=empCompany;
// }
// }
// const empAnil = new Employee(22 ,"Anil","IT",50000 ,"TCS")
// const empRadha = new Employee(33 ,"Radha","HR", 74000,"Wipro")
// const empRishi = new Employee( 55,"Rishi","Finance",47000 ,"TCS")
// const empSonali = new Employee( 66,"Sonali","Finance", 45000,"Infy")
// const empMonika = new Employee( 77,"Monika","IT",40000 ,"Wipro")
// const empViny = new Employee( 88,"Vinayak","IT", 75000,"TCS")
// const empMahi = new Employee( 99,"Mahesh","HR",85000 ,"Infy")

// const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]

//print tcs employee info
// array.forEach((currentValue)=>{
// if(currentValue.empCompany=='TCS'){
//   console.log(currentValue);
// }
// })

//print 50000 gerater than salary 
// array.forEach((value)=>{
// if(value.empSalary>=50000){
// console.log(value);
// }
// })

// //Sum Of All Emp Salary
// let addOfSalary=0
// array.forEach((currentValue)=>{
// addOfSalary+=currentValue.empSalary
// })
// console.log("Addition Of All Employee Salary-:",addOfSalary);

// //Average Of Salary
// let size=array.length
// console.log("Avarage Of Salary-:",addOfSalary/size);

//Employee "IT" Or "HR" Department Salary  Is Greater Than Or Equal To 75000
// array.forEach((currentValue)=>{
// if((currentValue.empDept=='HR'||'IT')&&currentValue.empSalary>=75000){
// console.log(currentValue);
// }
// })

//
// class Vehicle {
//   constructor(company,model,fuel,drive,price){
//       this.company=company;
//       this.model=model;
//       this.fuel=fuel;
//       this.drive=drive;
//       this.price=price;
//   }
// }
// let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
// let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
// let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
// let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
// let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

// const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];

// arrayOfVehicles.forEach((val)=>{
// if(val.price<=150000){
//   console.log(`Company Name ${val.company} ,Model-:${val.model},price-:${val.price}`);
// }
// })

// console.log("-----------Set Of Vehical-------------");
// let vehical=new Set()
// vehical.add(audiA3)
// vehical.add(audiQ3)
// vehical.add(mahindra)
// vehical.add(hero)
// vehical.add(honda)
 
// vehical.forEach((val)=>{
// console.log("Vehical Model-:",val.model);
// })

// console.log("-----------Map Of Vehical-------------");
// let mapOfVehicles=new Map()
// mapOfVehicles.set(1,audiA3)
// mapOfVehicles.set(2,audiQ3)
// mapOfVehicles.set(3,mahindra)
// mapOfVehicles.set(4,hero)
// mapOfVehicles.set(5,honda)

// mapOfVehicles.forEach((vehical,regNo)=>{
// console.log(vehical.company,regNo);
// })
// 
// console.log("-----------------------------------------------------------------------------");
// console.log("---------------------:Callback Function:-----------------------");
// //1)
// // function doSomething(callback){
// //   //perform some operation.......
// //   console.log("Doing Something.....");
// // callback()
// // }

// // function callbackFunction(){
// //   console.log("Call Back Function Exicute");
// // }

// // doSomething(callbackFunction)

// //2)
// let add= function (n1,n2){
// console.log(n1+n2);
// }
// let sub=function(n1,n2){
// console.log(n1-n2);
// }

// function arithamaticOperation(addition,substraction){
// addition(8,4)
// substraction(8,4)
// }
// arithamaticOperation(add,sub)
// console.log("-----------------------------------------------------");

console.log("-----------------:Promise:-------------------");
// let isMarried=false
// let promise=new Promise((resolve,reject)=>{
//   if(isMarried){
//     resolve("You Are Married")
//   }
//   else{
//     reject("You Are Not Married")
//   }
// })
// promise.then(function resolve(fulfilled){
// console.log(fulfilled);
// }).catch(function reject(notFullFilled){
//   console.log(notFullFilled);
// }).finally(()=>{
//   console.log("Comperation Is SuccessFully Complited");
// })

//2
// function doSomething(){
//   return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   var isMarried=true
//   if(isMarried){
//     resolve('You are Married')
//   }else{
//     reject('You Are Not Married')
//   }
// },3000)
//   })
// }
// doSomething().then((success)=>{
// console.log(success);
// }).catch((failed)=>{
// console.log(failed);
// }).finally(()=>{
//   console.log("process Is complited");
// })

//3)

// let isPassed=false

// let promise=new Promise((resolve,reject)=>{
// if(isPassed){
//   resolve("Result Pass!")
// }else{
//   reject("Result Fail")
// }
// })
// promise.then((result)=>{
// console.log(result);
// }).catch((failed)=>{
// console.log(failed);
// }).finally(()=>{
//   console.log("Result Are Declared");
// })

//4)
// function doSomething(){
//   return new Promise((resolve,reject)=>{
// setTimeout(() => {
//   let isPassed=true
//   if(isPassed){
// resolve("Result Is Passed")
//   }else{
//     reject("Result Is Failed")
//   }
// },3000);
//   })
 
// }
// doSomething().then((pass)=>{
//   console.log(pass);
//     }).catch((fail)=>{
//   console.log(fail);
//     }).finally(()=>{
//       console.log("Result Is Declared!");
//     })
// console.log("---------------------------------------------------------------");
// console.log("---------------:filter Method:-------------");
// // let arr=[43,54,12,67,98,34,23,87]
// let value=arr.filter((val)=>{
// return val<=50
// })
// console.log("Element Less Than Equal to 50 Given Array-:",value);

//2
// class Vehicle 
//  {constructor(company,model,fuel,drive,price)
//     {
//         this.company=company;
//         this.model=model;
//         this.fuel=fuel;
//         this.drive=drive;
//         this.price=price;
//     }
// }
//     let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
//     let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
//     let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
//     let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
//     let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

//     let arrOfVehicals=[audiA3,audiQ3,mahindra,honda,hero]

//     let price=arrOfVehicals.filter(vehical=>
//  vehical.price>=200000
//     )
//     price.forEach((element)=>{
// console.log(element.company,element.price);
//     })
//3
// class Employee{
//   constructor(empId,empName,empDept,empSalary,empCompany){
//   this.empId=empId;
//   this.empName=empName
//   this.empDept=empDept
//   this.empSalary=empSalary
//   this.empCompany=empCompany;
// }
// }
// const empAnil = new Employee(22 ,"Anil","IT",50000 ,"TCS")
// const empRadha = new Employee(33 ,"Radha","HR", 74000,"Wipro")
// const empRishi = new Employee( 55,"Rishi","Finance",47000 ,"TCS")
// const empSonali = new Employee( 66,"Sonali","Finance", 45000,"Infy")
// const empMonika = new Employee( 77,"Monika","IT",40000 ,"Wipro")
// const empViny = new Employee( 88,"Vinayak","IT", 75000,"TCS")
// const empMahi = new Employee( 99,"Mahesh","HR",85000 ,"Infy")

// const employee=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]
// let company=employee.filter((company)=>{
//   return company.empCompany=='TCS'
// })
// company.forEach((company)=>{
//   console.log(company.empCompany,company.empName);
// })
// console.log("---------------------------------------")
// let salary=employee.filter((element)=>{
// return element.empSalary<=50000
// })
// salary.forEach((el)=>{
// console.log(` Company -:${el.empCompany}, Employee Name-: ${el.empName}, Employee Salary-:${el.empSalary}`);
// })
// console.log("--------------------------------------------------");

// console.log("-------------------reduce Method-----------------");
// let arr=[34,54,343,98,12,93,43,56]
// let sumOfArray=arr.reduce((privEl,currEl)=>{
// return privEl+currEl
// })
// console.log(sumOfArray);

// let evenNumber=arr.filter(el=>el%2==0)
// console.log("Even Number From Given Array-:",evenNumber);
// let sumOfEvenNumber=evenNumber.reduce((prev,currEl)=>{
// return prev+currEl
// })
// console.log("Sum Of Array-:",sumOfEvenNumber);

// let evenNumberSum =arr.filter(val=>val%2==0).reduce((prev,curr)=>prev+curr)
// console.log(evenNumberSum);
// console.log("-------------------------------------------------------------");
// console.log("--------------:Map Method:------------");
// let arr=[1,2,3,4,5,6,7,8,9]
// let add=arr.map(val=>val+1)

// console.log(add);

// let mul=arr.map(val=>val*val)
// console.log(mul);

// let addOfIdx=arr.map((val,idx)=>{
// return val+idx
// })
// console.log(addOfIdx);

// class Vehicle {
//   constructor(company,model,fuel,drive,price){
//       this.company=company;
//       this.model=model;
//       this.fuel=fuel;
//       this.drive=drive;
//       this.price=price;
//   }
// }
// let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
// let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
// let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
// let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
// let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

// let vehical=[audiA3,audiQ3,mahindra,honda,hero]
// //minus 10000 from salary of employee.
// let price=vehical.map((val)=>{
//  val.price= val.price-10000
//  return val
// }
  
// )
// console.log(price);
// price.forEach((val)=>{
// console.log("COmpany Name-:",val.company,"Vehical Price-:",val.price);
// })
// // console.log("-------------------------------------------------------------------");
// console.log("------------------:Sort Method:---------------");
//1
// const arrayOfNames=["Vinny","Sunny","Minny","Danny","Gonny"]
// arrayOfNames.reverse()
// console.log("Reverse Array-:",arrayOfNames);
// arrayOfNames.sort()
// console.log("Ascading-:",arrayOfNames);
// arrayOfNames.reverse()
// console.log("Descading-:",arrayOfNames);

//2
// const arrayOfNumbers=[43,2,65,15,43,,65,887,456,39,46,28]
// arrayOfNumbers.reverse()
// console.log(arrayOfNumbers);
//(1)
// arrayOfNumbers.sort((a,b)=>{
// return a-b
// })
// console.log(arrayOfNumbers);

//(2)
// arrayOfNumbers.sort((a,b)=>{
// return a>b?1:-1
// })
// console.log(arrayOfNumbers);

//remove DUPLICATE element
// arrayOfNumbers.sort((a,b)=>{
// return a>b?1:-1
// })
// let sets=new Set(arrayOfNumbers)
// console.log(sets);

//3)
// class Vehicle {
//   constructor(company,model,fuel,drive,price){
//       this.company=company;
//       this.model=model;
//       this.fuel=fuel;
//       this.drive=drive;
//       this.price=price;
//   }
// }
// let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
// let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
// let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
// let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
// let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",885000);

// let arrOfVehicals=[audiA3,audiQ3,mahindra,honda,hero]

// let vehical=arrOfVehicals.sort((vehical1,vehical2)=>{
// return vehical1.price>vehical2.price?1:-1
// })
// vehical.forEach((vehical)=>{
// console.log(vehical.company,vehical.price);
// })

// let drive=arrOfVehicals.sort((drive1,drive2)=>{
// return drive1.drive>drive2.drive?1:-1
// })
// drive.forEach((el)=>{
// console.log(el.company,el.drive);
// })
// console.log("------------------------------------------------------------");
// console.log("----------------:Find Missing Numbers:----------------");
// let arr=[23,57,81,44,98,1]
// let missingNumber=[]
// for(let i=1;i<=100;i++){
//   if(arr.indexOf(i)==-1){
// missingNumber.push(i)
//   }
// }
// console.log(missingNumber);
// console.log("--------------------------------------------------------------");
//How Many a Is String
// function str(str) {
//   let counter=0
 
//  for(let i=0;i<=str.length;i++){

//  let char=str.charAt(i)
//  let charCopy=char.toLowerCase()
//  if(charCopy=='a')
// counter=counter+1

//  } 
//  console.log("a In String-:",counter);
 
// }
// str("Mahestwtwaaaeteha")

//fibbonacci
// function fibbo(n){
// if(n<=1){
//   return n
// }else{
//   return fibbo(n-1) + fibbo(n-2)
// }

// }
// console.log(fibbo(6));

//3rd Smallest Element in Given Array
// let arr=[54,2,387,79,6788,132,9]
// arr.sort((a,b)=>{
// return a>b?1:-1
// })
// console.log(arr[2]);

//find smallest number and biggest number
//  let arr=[54,2,387,79,6788,132,9]
// max=arr[0]
// min=arr[0]
// for(let i=0;i<arr.length;i++){
//   if(max<arr[i]){
//     max=arr[i]
//   }
//   if (min>arr[i]) {
//     min=arr[i]
//   }
// }

// console.log(max);
// console.log(min);

//Example Of Recursion 
// function fac(n){
// if(n<=1){
//   return 1
// }else{
//   return n*fac(n-1)
// }
// }
// console.log(fac(5));

function fact(n){
if(n===0){
  return 1
}else{
  return n*fact(n-1)
}
}
console.log(fact(5));