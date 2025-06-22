console.log("Self Invoiking Function");
// (function(a,b){
// console.log(a+b);

// })(12,12)

(function (a, b) {
  console.log(a + b);
})(5, 6);

console.log("Immediatly invoked function");

// const result=(()=>{
//     const value=42
//     return value*2
// })()
// console.log(result);
const result = (function () {
  let value = 41;
  return value * 2;
})();
console.log(result);

console.log("------------Examples Of Promise---------------------");
console.log("Example-: 1)");

function doSomething() {
  return new Promise((resolve, reject) => {
    //Simmulating Asynchrouns Operation
    // setTimeout(()=>{
    //     const sucess=true //simmulating sucess opertion
    //     if(sucess){
    //         resolve("Operation Sucessfull")
    //     }
    //     else{
    //         reject("Operation Reject")
    //     }
    // },2000)
  });
}
doSomething()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Process End!");
  });
console.log("Example 2)");

let sucess = true;
let promise = new Promise((resolve, reject) => {
  // setTimeout(()=>{
  //     if(sucess){
  //         resolve("Operation Successfull")
  //     }
  //     else{
  //         reject("Operation Reject")
  //     }
  // },3000)
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Process Completed");
  });

console.log("---------------Recursion----------------");
/*
function recursive(){
//doSomething
recursive()
}
recursive()
*/
console.log("factorial example using recursion");
function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fact(n - 1) * n;
  }
}
console.log(fact(5));
console.log(fact(6));

console.log("Fibboncci Series Example Using Factorial");

function fibb(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibb(n - 1) + fibb(n - 2);
  }
}
console.log(fibb(6));

function add(n) {
  if (n <= 0) {
    return n;
  } else {
    return n + add(n - 1);
  }
}
console.log(add(5));
console.log(add(1));

console.log("------------forEach()----------");
let arr = [34, 23, 88, 21, 67, 73, 98];

let prtElt = arr.forEach((el) => {
  console.log(el);
});

let elFil = [];
let filterEl = arr.forEach((el) => {
  if (el % 2 == 0) {
    elFil.push(el);
  }
});
console.log(elFil);

let mapp = arr.forEach((el) => {
  console.log(el + 10);
});

let adds = 0;
let reduce = arr.forEach((el) => {
  adds += el;
});
console.log("Addition Of Array-:", adds);
console.log("--------------------------------------------------------------");

console.log("----------------------Global Scope-------------------");
console.log("1)Function Return GlobalVariable and function return function");

var glabalVariable = "Hello World";
function message1() {
  return glabalVariable;
}
function message2() {
  return message1();
}
console.log(message2());

console.log("2) print variable and modify variable in function");

var globalVar = "Hello World";
function printVariable() {
  console.log(globalVar);
}
printVariable();

function modifyVar() {
  globalVar = "Modify Variable";
}
modifyVar();
console.log(globalVar);
console.log(
  "---------------------------sorting()--------------------------------"
);

let arr1 = ["Vinayak", "Arman", "Navaj", "Dipak", "Anjum"];
let sortAlfa = arr1.sort();
console.log("Sorting Array Alfabiticaly-:", sortAlfa);

let arr2 = [43, 12, 43, 36, 78, 91, 89, 22];
let sortingArr = arr2.sort();
console.log("Sorting Array In Ascading Order-:", sortingArr);
let sortInDescending = sortingArr.reverse();
console.log(sortInDescending);

let arr3 = [333, 1314, 7654, 134235, 868453, 63738];
for (i = 0; i <= arr3.length; i++) {
  for (let j = 0; j < arr3.length - 1; j++) {
    if (arr3[j] > arr3[j + 1]) {
      //swap element
      let temp = arr3[j];
      arr3[j] = arr3[j + 1];
      arr3[j + 1] = temp;
    }
  }
}
console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    if (arr3[j] < arr3[j + 1]) {
      //swap element
      let temp = arr3[j];
      arr3[j] = arr3[j + 1];
      arr3[j + 1] = temp;
    }
  }
}
console.log(arr3);

// console.log(arr3.sort((a,b)=>{
// // a-b
// a<b?-1:1
// }));

console.log("---------------------filter() Method-------------------------");

let arr4 = [44, 24342, 7565, 24, 867, 1323, 37635];
console.log(
  arr4.filter((val) => {
    return val % 2 == 0;
  })
);
console.log(
  arr4.filter((val) => {
    return val < 2000;
  })
);
console.log("--------------------map()------------------");
let arr5 = [64, 18, 23, 83, 34, 92];
console.log(
  arr5.map((el) => {
    return el - 10;
  })
);

console.log(
  arr5.map(function (el) {
    return el % 2 == 0;
  })
);
console.log("--------------arrow function(()=>{})---------------");

let res = (a, b) => {
  return a > b;
};
console.log(res(17, 20));

console.log("-----------------function expression------------------");

let funExp = function () {
  console.log(
    "function whick act like value meaning we can initilize variable with value"
  );
};
funExp();

console.log("----------------Object.assign()----------");

/*
syntax-:Object.assign(target,....sources)
//clone object
let newObj=Object.assign({},objName)
//merge object
let mergeObj=Object.assign({},objName,newObj)
*/
let empInfo = {
  empName: "Vinny",
  empId: 2,
  empCity: "Pune",
};
empInfo.adress = {
  pinCode: 41627,
  native: "Dange Chouk",
};
console.log(empInfo);

for (let key in empInfo) {
  console.log(key, empInfo[key]);
}
//accessing object property
console.log(empInfo.empName);
console.log(empInfo["empCity"]);

//update key value
empInfo.empName = "Mahi";
console.log(empInfo);
//delete key from object

delete empInfo.empCity;
console.log(empInfo);
//add new properties in object

empInfo.empCity = "Pune";
empInfo.empCompany = "Cognizent";
console.log(empInfo);

//print all entries of object
let entries = Object.entries(empInfo);
console.log(entries);

//print key of object
console.log(Object.keys(empInfo));
//print all key value of object
console.log(Object.values(empInfo));

//Object.assign-:clone object and merge object
let empInfo1 = Object.assign({}, empInfo);

empInfo1.empName = "Arman";
empInfo.empName = "Navaj";

console.log(empInfo);
//access nested object propety
console.log(empInfo.adress);
console.log(empInfo.adress.pinCode);
empInfo.empName = "Jagan";
empInfo1.adress.pinCode = 12345;
empInfo.adress.native = "Bhumakar Chouk";
console.log("Origanal Object-:", empInfo);
console.log("Clone Object-:", empInfo1);

//Object.assign()-: Object.assign failde to nested object changes

console.log("----------------Object.freeze()--------------------");

let person = {
  name: "Vinny",
  age: 25,
  city: "pune",
  play() {
    return "I Love Playing Cricket";
  },
};
console.log("Displaying Function-:", person.play());

Object.freeze(person);
person.name = "Mahesh"; //not update
console.log(person);
delete person.city; //not delete
console.log(person);
person.pinCode = 413319; //add new property
console.log(person);

console.log("--------------Shallow Copy/cloning---------------");
let employee = {
  name: "Vinayak",
  age: 25,
  city: "Pune",
};
let employee1 = employee;
console.log(employee);
console.log(employee1);

console.log("-----------------Hoisting-----------------");
car = "Thar";
console.log(car);

var car;

display();
function display() {
  console.log("Fuction Can Invoke Before Declaration");
}
console.log("------------------------Closure----------------------");

let globalVariable = "Global Variable";
function outerFunction() {
  let outerVariable = "Outer Function Variable";
  let inner = function () {
    let innerVariable = "Inner Function Variable";
    console.log(innerVariable);
    console.log(outerVariable);
    console.log(globalVariable);
  };
  return inner;
}
let results = outerFunction();
results();

function outerFun() {
  let outerVariable = "I Am From Outer Scope";
  function innerFun() {
    console.log(outerVariable);
  }
  return innerFun;
}
let resultss = outerFun();
resultss();
console.log("------------Function Are First Class Citizen In JS------------");
console.log("function can be stored in variable as value");
function show() {
  console.log("Function Can Be Stored In Variable");
}
let message = show;
message();
console.log(
  "--------function passed as argument to the another fucntion------"
);
function message3() {
  //this function is callback function
  console.log("I Am Learning");
}

function display(show_fun) {
  console.log("Hello World");
  show_fun;
}
display(message3);
console.log("------Function Return Another Function-----");

function message4() {
  console.log("Hello World");

  function inner() {
    console.log("I Am Good Developer");
  }
  return inner();
}
message4();

console.log("---------:Higher Order Function:--------");

function greet(user, greetingFunction) {
  return greetingFunction(user);
}

function sayHello(name) {
  return `Hello, ${name}`;
}
console.log(greet("Mahii", sayHello));

function greet(user, greetingFunction) {
  return greetingFunction(user);
}
function sayHello(name) {
  return `Hello ${name}`;
}
console.log(greet("MAHU", sayHello));

console.log("--------------------------------------------");

function makeMultiplayer(multiplare) {
  return function (number) {
    return number * multiplare;
  };
}
const double = makeMultiplayer(5);
console.log(double(10));

console.log("------------:callback:------------");

console.log("--------Set--------");

let set = new Set();
set.add(11);
set.add(22);
set.add(33);
set.add(44);
set.add(55);
set.add(66);
set.add(22); //maintaine only unique element.
// set.clear()
set.delete(33);
console.log(set);
console.log(set.size);
console.log("33 Is Available Or Not", set.has(33));

//traverse set using for of loop

for (const element of set) {
  console.log(element);
}
let arr6 = [3, 2, 4, 6, 1, 3, 5, 7, 7, 4, 3];

let removeDuplicateEl = [...new Set(arr6)];
console.log(removeDuplicateEl);

console.log("-----------Map------------");

let map = new Map();
map.set(1, "Vinny");
map.set(2, "Mahi");
map.set(3, "Sammu");
map.set(4, "Armu");
map.set(5, "navaju");
map.set(6, "Mahi");
map.delete(5);
// map.clear()
console.log(map);
console.log(map.size);

console.log(map.get(4));
console.log(map.get(1));

console.log(map.has(4));
console.log(map.has(5));

for (const key of map.keys()) {
  console.log(key, map.get(key));
}
console.log("Spread Operator(...)");

let fruitsArray = ["mango", "apple", "Orange", "Graps", "banana"];
console.log(fruitsArray);
console.log(...fruitsArray);

let orgArr = [36, 27, 312, 543, 5656, 1342];
console.log(orgArr[3]);
orgArr[2] = 333;
console.log(orgArr);
console.log(orgArr.length);

//Traversing array
for (let i = 0; i < orgArr.length; i++) {
  console.log(orgArr[i]);
}
//Traversing array in reverse
for (let i = orgArr.length - 1; i > 0; i--) {
  console.log(orgArr[i]);
}
//add or remove single element

orgArr.push(84);
orgArr.push(172, 334);
orgArr.pop();

orgArr.unshift(11);
orgArr.unshift(45);
orgArr.shift();
console.log(orgArr);

console.log(orgArr.slice(2, 5));
console.log(orgArr.slice(5, 7));
console.log("---------------------------------------------------------");

//add remove selected elements

console.log(orgArr);
orgArr.splice(3, 0, 55);
console.log(orgArr);
orgArr.splice(2, 2);
console.log(orgArr);
orgArr.splice(3, 2, 544, 5757);
console.log(orgArr);

console.log(orgArr.sort());
console.log(orgArr.reverse());
console.log(orgArr.includes(36));
console.log(orgArr.includes(444));
orgArr.length = 3;
console.log(orgArr);
console.log(
  "---------------------------------------------------------------------------------"
);

let arr7 = [23, 54, 27, 8, 52, 34, 65];
let evenNo = [];
let oddNumber = [];
let oddIndexNo = [];
let evenIndexNo = [];
let sumOfEvenNo = 0;
let oddNumberSum = 0;
let oddIndexSum = 0;
let evenIndexSum = 0;
let sumOfAllArray = 0;
for (let i = 0; i < arr7.length; i++) {
  const element = arr7[i];
  sumOfAllArray = sumOfAllArray + element;
  //even number in array
  if (element % 2 == 0) {
    evenNo.push(element);
    sumOfEvenNo += element;
  }
  if (arr7[i] % 2 == 1) {
    oddNumber.push(element);
    oddNumberSum = oddNumberSum + element;
  }
  if (i % 2 == 1) {
    oddIndexNo.push(arr7[i]);
    oddIndexSum += element;
  }
  if (i % 2 == 0) {
    evenIndexNo.push(element);
    evenIndexSum += arr7[i];
  }
}
console.log(evenNo);
console.log(oddNumber);
console.log(oddIndexNo);
console.log(evenIndexNo);
console.log(sumOfEvenNo);
console.log(oddNumberSum);
console.log(oddIndexSum);
console.log(evenIndexSum);
console.log(sumOfAllArray);
console.log("Swap Without Using Third Variable");
let number1 = 35;
let number2 = 45;
console.log("Before Swap", number1, number2);
number1 = number1 + number2; //35+45//number1=80
number2 = number1 - number2; //80-45//number2=35
number1 = number1 - number2; //80-35//number1=45
console.log("After Swap", number1, number2);
console.log("Swap Using Third Variable");
let str1 = "Vinayak";
let str2 = "Mahesh";
console.log("Before Swap", str1, str2);
//swap string
let temp = str1;
str1 = str2;
str2 = temp;
console.log("After Swap", str1, str2);

console.log("Normal Function");
function add(a, b) {
  let result = a + b;
  return result;
}
console.log(add(5, 5));

console.log("Switch Statement");

let number3 = 1;

switch (number3) {
  case 1:
    console.log("Given Number IS 1");

    break;
  case 2:
    console.log("Given Number Is 2");
    break;
  case 3:
    console.log("Given Number Is 3");
    break;
  case 4:
    console.log("Given Number Is 4");
    break;
  case 5:
    console.log("Given Number Is 5");
    break;
  default:
    console.log("Number Is Not Matched");

    break;
}

console.log("Factorial Using for Loop");
let count=1
for(let i=1;i<=5;i++){
  count*=i
}
console.log(count);

console.log("Shallow Copy Of Array");
let arr8=[63,541,145,35,736,62,90,39]
//Shallow Copy Of Array using Asignment Operator(=)
let arr9=arr8
//when change in one also change in another array
arr8[3]=53
arr9[6]=26


console.log(arr8);
console.log(arr9);
let merge=arr8.concat(arr9)


let arr10=[63,541,145,35,736,62,90,39]
let arr11=[...arr10]//deep cloning using spread operator(...)

arr10[0]=36
arr11[2]=545
console.log(arr10);
console.log(arr11);
let mergeArray=[...arr10,...arr11]//merge array using spread operator
console.log(mergeArray);

console.log(merge);

// let a=15
// let b=a.toString()
// console.log(typeof(b));

// let emp={
// empId:this.empId=1,
// empName:this.empName="Vinny"
// }
// // console.log(emp);

// let emp1=emp
// // emp1.empId=2
// emp.empName="Mahi"
// console.log(emp);
// console.log(emp1);

let obje1={
    name:"Vinayak",
    age:25,
    city:"Pune"
}
console.log(obje1);
//accessing object property,using dot(.) notation or objName[]
console.log(obje1.name,obje1.age,obje1.city);
console.log(obje1["name"],obje1["age"],obje1["city"]);
//add new property in object
obje1.tal="Mangalwedha"
obje1["Dist"]="Solapur"
console.log(obje1);
//delete property form object
delete obje1.tal
console.log(obje1);
//update property Value
obje1.age=25.4
console.log(obje1);
obje1["name"]="Mahesh"
console.log(obje1);

let obj1={

}
obj1.name="Vinayak"
obj1["age"]=25
obj1.city="Pune"
console.log(obj1);

let obj2={
    name:"Vinayak",
    age:25,
    city:"Pune",
    edication:{
        master:71,
        branch:"Computer Science",
        year:2023
    },
 greet(){
console.log("I Love Playing Cricket");

    }
}
//accessing nested object
console.log(obj2.edication);
//accesing nested object property
console.log(obj2.edication.master);
//add property in nested object
obj2.edication["Skill"]="Angular"
console.log(obj2);
obj2.edication.master=71.10
console.log(obj2);
obj2.greet()
//how to get all entries of object
console.log("Object Entries-:",Object.entries(obj2));
console.log("Object Keys-:",Object.keys(obj2));
console.log("Nested Object Keys-:",Object.keys(obj2.edication));
console.log("Object Value-:",Object.values(obj2));
console.log("Nested Object Value-:",Object.values(obj2.edication));

//iterate property of object using for in loop
for(let key in obj2){
    console.log("Itearte Object-:",key,obj2[key]);
    
    }

    //iterate nested object 
for(let key in obj2.edication){
console.log("Itearte Object-:",key,obj2.edication[key]);

}
//check property exist or no
 console.log("name property exist or not-:","name" in obj2);
 console.log("marks property exist or not-:","marks" in obj2);
 
 

console.log("Deep Copy/Clonig of primitive data type");
//It Is always perform deep cloning
let str3="Mahesh"
let str4=str3
console.log(str3,str4);
str4="Vinayak"
console.log(str3,str4);
str3="Arman"
console.log(str3,str4);
console.log("shallow copy of object");
//using assignment operator
let obj3={
    name:"Vinny",
    age:25,
    city:"Pune",
    marks:{
        sci:67,
        maths:76
    }
}
// let obj4=obj3//create shallow copy of object using assignment operator(=)

// let obj4={...obj3}//its fails in nested object
// let obj4=Object.assign({},obj3)//Object.assign({},source)

let obj4=JSON.parse(JSON.stringify(obj3))//its accss nested object property
obj3.city="Mumbai"
obj3.marks["sci"]=100
obj4.marks.maths=88
console.log(obj3);
console.log(obj4);




