
console.log("--------------------------------------------------");

console.log("1)");

var x = 20;
function foo() {
  console.log(x);
  var x = 10;
}
foo();
console.log(
  "--------------------------------------------------------------------"
);
// console.log("2)");

// function foo(){
//     console.log("Hello World")
//     // return 'Hello world'
// }
// let result=foo()
// console.log(result);
console.log(
  "--------------------------------------------------------------------"
);
// console.log("3)");
// console.log("Start");
// setTimeout(()=>{
// console.log("Timeout");
// },0)
// console.log("End")
console.log(
  "--------------------------------------------------------------------"
);
// console.log("4)");
// for(var i=1;i<=3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     })
// }
console.log(
  "--------------------------------------------------------------------"
);
// console.log("5)");
// {
//     let a=1
//     let b=2
//     console.log(a);
//     console.log(b)
// }
// console.log(a);
// console.log(b)
console.log(
  "--------------------------------------------------------------------"
);
// console.log("6)");
// let arr=[1,2,3]
// arr[4]=5
// console.log(arr.length);
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[30]);
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(30));
console.log(
  "--------------------------------------------------------------------"
);
// console.log("7)");
// const user1={
//     name:"john",
//     age:"26",
//     address:{
//         city:"Mumbai",
//         state:"Maharastra"
//     }
// }
// const user2=user1
// user2.name="Vinny"
// user2.address.city="Pune"
// console.log(user1);
// console.log(user2);
// console.log(user1.address);
// console.log(user2.address);

console.log("Promise");
/*
syntax: let promise=new Promise((resolve,reject)=>{
    //doSomething
    })
*/
function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        return resolve("Operation Succesfull");
      } else {
        return reject("Operation Faild");
      }
    }, 3000);
  });
}
doSomething();

// .then((result)=>{
// console.log(result);

// }).catch((error)=>{
// console.log(error)

// }).finally(()=>{
//     console.log("Process Completed");

// })
console.log("2)Example");

let isMarried = true;

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isMarried) {
      resolve("You Are Married");
    } else {
      reject("You Are Not Married");
    }
  }, 3000);
});
//  .then((result)=>{
// console.log(result);

// }).catch((error)=>{
// console.log(error);

// }).finally(()=>{
//     console.log("Process SuccessFull");

// })
console.log("----------Recursion--------");
function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5));

function fibb(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibb(n - 2) + fibb(n - 1);
  }
}
console.log(fibb(6));

function sumOfEl(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sumOfEl(n - 1);
  }
}
console.log(sumOfEl(5));
console.log("forEach");

let arr = [53, 223, 18, 32, 56, 83];
arr.forEach((el) => {
  console.log(el);
});

let arr1 = arr.forEach((el) => {
  console.log(el + 10);
});

let filtEl = [];
arr.forEach((el) => {
  if (el % 2 == 0) {
    filtEl.push(el);
  }
});
console.log(filtEl);
let adds = 0;
arr.forEach((el) => {
  adds += el;
});
console.log(adds);

console.log("Global Scope");

let globalVar = "Hello World";
function message1() {
  return globalVar;
}
function message2() {
  return message1();
}
console.log(message2());
console.log("-++++++++++++________________++++++++++++");

let globalVariable = "Hello World";
function printVariable() {
  console.log(globalVariable);
}
printVariable();

function modifyVariable() {
  globalVariable = "Hello Univerce";
}
modifyVariable();

console.log(glabalVariable);
console.log("++++++++++++_________________))))))))))))__________+++++++++}}}}}}}}}}");

console.log("Sorting");

let arr2 = ["Mahesh", "Dipak", "Anjum", "Navaj", "Kumar"];

console.log(arr2.sort());

let arr3 = [767, 345, 654, 31, 234, 76543, 123, 45, 2, 76];

// console.log(arr3.sort((a,b)=>{
// return a<b?-1:1
// }));

//sort array using for loop

for (let i = 0; i < arr3.length; i++) {
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

console.log("Filter");

let arr4 = [35, 17, 46, 93, 24, 56, 86];

console.log(
  arr4.filter((el) => {
    return el % 2 == 0;
  })
);
console.log("map");

console.log(
  arr4.map((el) => {
    return el - 10;
  })
);

console.log("closure ");

let globalVariable1 = "Global Variable";
function outerFunction() {
  let outerVariable = "Outer Variable";
  let inner = function () {
    let innerVariable = "Inner Variable";
    console.log(innerVariable);
    console.log(outerVariable);
    console.log(globalVariable1);
  };
  return inner;
}
let result = outerFunction();
result();

function outerFun() {
  let outVar = "Outer Function Variable";
  function innerFun() {
    console.log(outVar);
  }
  return innerFun;
}
let result1 = outerFun();
result1();

console.log("Function is first class citizen in js");
//function can stored in variable
function message() {
  console.log("Function Cab Stored In Variable");
}
let display = message;
display();

//function can be passed as argument to the another function

function message2() {
  console.log("I AM Learning JS");
}
function message3(show) {
  console.log("Hello World");
  show;
}
message3(message2);
//function can return another function

function displays() {
  console.log("Hello Coders");
  function inner() {
    console.log("i am learnning js");
  }
  return inner();
}
let resultss = displays;
resultss();

console.log("----------------Higher Order Function------------------");

function greet(users, greetingFunction) {
  return greetingFunction(users);
}
function show_fun(name) {
  return `Hello ${name} !`;
}
console.log(greet("alice", show_fun));
console.log("-----------------------------------------------------");

function makeMultiplayer(multiplare) {
  return function (number) {
    return number * multiplare;
  };
}
const double = makeMultiplayer(2);
console.log(double(5));
const trible = makeMultiplayer(6);
console.log(trible(5));

console.log("--------------Set------------");
let set = new Set();
//add element
set.add(12);
set.add(23);
set.add(34);
set.add(45);
set.add(56);
set.add(12);
set.add(67);

console.log(set.has(23));
console.log(set.has(55));
// set.clear()
set.delete(23);
console.log(set);
console.log(set.size);
//traversing loop

for (let element of set) {
  console.log(element);
}

let array = [43, 5, 3, 67, 77, 543, 345, 43, 5, 77];

let removeDuplicateEl = [...new Set(array)];
console.log(removeDuplicateEl);

console.log("----------Map----------");

let map=new Map()
map.set(1,"Vinayak")
map.set(2,"Mahesh")
map.set(3,"Samarth")
map.set(4,"Anjum")
map.set(5,"Navaj")
// map.clear()
map.delete(4)

console.log(map.has(3));
console.log(map.has(6));
console.log(map.get(2));


console.log(map);
console.log(map.size);

for(let key of map.keys()){
    console.log(key,map.get(key));
    
}

