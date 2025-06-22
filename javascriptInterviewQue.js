// console.log("Swap Two Numbers Using a Temporary Varibale");

// let a=10
// let b=20
// console.log("Before Swapping a=",a,"b=",b)
// let temp=a
// a=b
// b=temp
// console.log("After Swapping, a=",a,"b=,",b);

// console.log("Swap Two Numbers Without Using a Temporary Varibale");

// let x=10
// let y=20
// console.log("Before Swapping x=",x,"y=",y)
// x=x+y
// y=x-y
// x=x-y
// console.log("After Swapping x=",x,"y=",y);
// console.log("-----------------Hoisting In JS----------------")
// city="Bangalore"
// console.log(city);

// var city
// console.log(city);

// let city

// console.log(city);

// const city

// hoist()
// function hoist(){
//     console.log("Hello Worlds");
    
// }

// reuslt();
// let reuslt=()=>{
//     console.log("Hello Worlds");
    
// }
// let globalVariable="I AM Globale Variable"
// function outerFunction(){
// let outerVariable="I AM Outer Function Variable"
// function innerFunction(){
// let innerVariable="I Am Inner Function Variable"
// console.log(innerVariable)
// console.log(outerVariable)
// console.log(globalVariable)

// }
// return innerFunction
// }
// let reuslt=outerFunction()
// reuslt()

// function message1(){
// console.log("Hello World")
// }

// function message2(msg){
// msg()
// console.log("Im Learinig JS")
// }
// message2(message1)

// let add=(a,b)=>{
//     console.log(a+b)
//     }
    
//     let sub=(a,b)=>{
//     console.log(a-b)
//     }
    
//     function operation(addition,substraction){
//     console.log("Addition")
//     addition(9,4)
//     console.log("Substraction")
//     substraction(9,4)
    
    
//     }
//     operation(add,sub)

//     function doSomething(){
//         return new Promise((resolve,reject)=>{
//         //simmulating asynchrouns operation
//         setTimeout(()=>{
//         let sucess=false//simmulating sucess operation
//         if(sucess){
//         resolve("Operation Successfull")
//         }else{
//         reject("Operation Failed")
//         }
        
//         },2000)
//         })
//         }
//         doSomething().then((result)=>{
//         console.log(result)
//         }).catch((error)=>{
//         console.log(error)
//         }).finally(()=>{
//         console.log("Process Complete")
//         })

// let isMarried=true
// let promise=new Promise(function(resolve,reject){
// if(isMarried){resolve("A Person Is Married")}
// else{
// reject("A Person Is Unmarried")
// }
// }).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)
// }).finally(()=>{
// console.log("Serve Is Completed")
// })

// function fact(n){
//     if(n===1||n===0){
//     return 1
//     }
//     else{
//     return n*fact(n-1)
//     }
    
//     }
//     console.log(fact(5))

//     function sumOfNumbers(n){
//         if(n<=1){
//         return n
//         }
//         else{
//         return n+sumOfNumbers(n-1)
//         }
//         }
//         console.log(sumOfNumbers(5))

//         function fibbo(n){
//             if(n<=1){
//             return n
//             }
//             else{
//             return fibbo(n-2)+fibbo(n-1)
//             }
//             }
//             console.log(fibbo(5))
            
// (function(){
//     console.log("Self-Invoking Function Expression")
//     })()

//     let result=(()=>{
//         let value=42
//         return value*2
//         })()
//         console.log(result)

// let array=[43,24,53,156,75,35]
// //printing elements of array.
// array.forEach((el)=>{
// console.log(el)
// })
// console.log("----------------------------");

//  //transfor(mapping) elemenet of array adding 2 to all elemenet      
// array.forEach((el)=>{
//     console.log(el+2)
//     }) 
//     console.log("----------------------------");
//     //filtering element of array.pring only odd numbers
//     array.forEach((el)=>{
//         if(el%2==0){
//         console.log(el)
//         }
//         })
//     //additon of all elements

// let additionOfElement=0
// array.forEach((el)=>{
// additionOfElement+=el
// })
// console.log(additionOfElement)

// let globalVariable="Globale Variable"

// function message1(){
// return globalVariable
// }

// function message2(){
//   return message1()
// }
// console.log(message2())

// let globaleVariable="Globale Variable"
// function printVariable(){

// console.log(globaleVariable)
// }
// printVariable()

// function modifyVariable(){
//     globaleVariable="Globale Scope is outer most scope in js"
//     }
//     modifyVariable()
//     console.log(globaleVariable)

let str="I Am Learning Js"
// //how to find out total number of element using length property
// console.log(str.length)//16
// //find out numeric position of charactor from given string
// console.log(str.indexOf("L"))//output:5
// //find out charactor from defined index number.
// console.log(str.charAt(5))//output:L
// //Merge strings in single index position
// console.log(str.concat(",From Code With Harry"))
// //Transform string in uppercase
// console.log(str.toUpperCase())
// //trasform string in lowercase
// console.log(str.toLowerCase())
// //change string
// console.log(str.replace("I Am","We Are"))
// //chack charactor exits or not in given string
// console.log(str.includes("L"))
// // sub string from main string
// console.log(str.slice(3,9))//m Lear
// console.log(str.substr(3,9))//m Learnin
// console.log(str.substring(3,9))//m Lear
// //Remove Extra spaces from string
// console.log(str.trim())
// //return last charactor of string
// console.log(str.charAt(str.length-1))
// //check string start with defined charactor or not
// console.log(str.startsWith("I"))//true
// console.log(str.startsWith("Y"))//false
// //check string end with defined charactor or not
// console.log(str.endsWith("s"))//true
// console.log(str.endsWith("m"))//false
// //split string into substring using specific seperator return string as array
// console.log(str.split(" ").length)
//loop over string charactor
// for(let i=0;i<str.length;i++){
//     let element=str[i]
//     console.log(element)
//     }
    //print only even index charctor element
// for(let i=0;i<str.length;i++){
//     const element=str.charAt(i)
//     if(i%2==0){
//     console.log(element)
    
//     }
//     }
// //print only odd index charactor of string
// for(let i=0;i<str.length;i++){
//     const element=str.charAt(i)
//     if(i%2==1){
//     console.log(element)
//     }
//     }
//find out total number of vowels in given string
// let totalNumberVowels=0
// for(let i=0;i<str.length;i++){
// const element=str.charAt(i)
// let char=element.toLowerCase()
// if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
// console.log(char)
// totalNumberVowels+=1

// }
// }
// console.log(totalNumberVowels)
//Reverse Given String.
// let reverseString=""
// for(let i=str.length-1;i>=0;i--){
// const element=str.charAt(i)
// reverseString+=element

// }
// console.log(reverseString)
console.log("------------------------------");
// let logestWord=str.split(" ").reduce((acc,curr)=>{
//     return curr.length>acc.length?curr:acc
// })
// console.log(logestWord)

// let str1="Javascript is open source programing langauge"
// let longestWord=str.split(' ').reduce((acc,curr)=>{
// return curr.length>acc.length?curr:acc

// })
// console.log(longestWord)
// function greet(users,greetingFunction){

//     return greetingFunction(users)
    
//     }
    
//     function show_fun(name){
    
//     return `Hello,${name}`
    
//     }
//     console.log(greet("Alice",show_fun))

//     function multiplication(multiply){
//         return function(number){
//         return number * multiply
//         }
//         }
//         let double=multiplication(3)
//         console.log(double(5))
//         let trible=multiplication(6)
//         console.log(trible(5))

//longest word in given string

// let str2="I Am Learning JavaScript"

// let longestWord=str.split(' ').reduce((acc,curr)=>{
// return curr.length>acc.length?curr:acc
// })
// console.log(longestWord)
//function is called first class citision in javascript
 //there are three main reasons
// 1)Function Can Be Stored In Variable.

// function doSomethings(){
//     console.log("Function Can Be Stored In Variable")
//     }
//     let display=doSomethings
//     display()

    // function message(){
    //     return function(){
    //     console.log("Hello World")
    //     }
    //     }
    //    let display= message()
    //    display()

//     let n=5
    
//   console.log(n++ + ++n)//5+7=12
//  console.log(n)//7
// function calc(num1,num2,operation){
//     switch(operation){
//     case 'add':
//     console.log(num1+num2) //here break is required
//     break;
//     case 'sub':
//     return num1-num2  //when you return the value then break is not required
    
//     case 'multi':
//     return num1*num2
   
//     case 'div':
//     return num1/num2
   
//     default:
//     return "Invalid Operation"
//     }
    
//     }
//     calc(5,2,'add')//7
//     console.log(calc(5,2,'sub'))//3
//     console.log(calc(5,2,'multi'))//10
//     console.log(calc(5,2,'div'))//2.5
//     console.log(calc(5,2,'mod'))//Invalid Operation

// let num1=12
// let num2=8
// let operation='multi'

// let result

// switch(operation){
// case 'add':
// result=num1+num2
// break;
// case 'sub':
// result=num1+num2
// break;
// case 'multi':
// result=num1*num2
// break
// case 'div':
// result=num1/num2
// break;
// default:
// result="Invalid Operation"
// }
// console.log(result)

//print 1 to 100 number using for loop
for(let i=0;i<=100;i++){
    console.log(i+5)
    }