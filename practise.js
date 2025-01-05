// console.log("1) Write A Program Find Out Even Number And Odd Number From 1 To 10");
// console.log("Even Number From 1 To 10");
// for(let i=1;i<=10;i++){
   
//     if(i%2==0){
//         console.log(i);
        
//     }
    
// }
// console.log("Odd Number From 1 To 10");
// for(let i=1;i<=10;i++){
   
//     if(i%2!==0){
//         console.log(i);
        
//     }
    
// }
// console.log("2) Write A Program Find Out Even Number And Odd Number From Given Array");
// let arr=[23,44,1,67,54,88,27,11]
// console.log("Given Array-: ",arr);
// console.log("----Find Out Even And Odd Index Array Element-----");
// console.log("Even Index Element Form Given Array");
// for (let index = 0; index < arr.length; index++) {
//     // const element = array[index];
//     if(index%2==0){

// console.log(`Index ${index} Is Element-:${arr[index]}`);

//     }
    
// }
// console.log("Odd Index Element Form Given Array");
// for(let i=0;i<=arr.length;i++){
// if(i%2!==0){
//     console.log(`Index ${i} Is Element-:${arr[i]}`);
// }
// }
// console.log("----Find Out Even Element From Given Array-----");
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if(element%2==0){
// console.log(element);
//     }
    
// }
// console.log("----Find Out Odd Element From Given Array-----");
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if(element%2!==0){
// console.log(element);
//     }
    
// }
// console.log("----Addition Of Given Array Elements-----");
// let addOfArray=arr.reduce((a,b)=>{
// return a+b
// });
// console.log("Addition Of All Array Element-:",addOfArray)


// console.log("---------------Recursion Example Of Factorial--------------------");
// function fac(n){
// if(n==0){
// return 1
// }else{
//     return n*fac(n-1)
// }
// }
// console.log("Factorial Of 5-:",fac(5));
// console.log("Factorial Of 22-:",fac(22));
// console.log("Factorial Of 7-:",fac(7));

// console.log("---------------Recursion Example Of Fibbonccis Series--------------------");
//  function fibb(n){
// if(n<=1){
// return n
// }else{
//     return fibb(n-1)+fibb(n-2)
// }
//  }
//  console.log( fibb(8));
//  console.log( fibb(24));
// //  console.log( fibb(44));
// console.log("----------------:Find Missing Number From 1 To 100 In Given Array:--------------");
// let arr1=[97,23,54,1,45,99,33]
// let missNumber=[]
// for(let i=1;i<=100;i++){
// if(arr1.indexOf(i)==-1){
// missNumber.push(i)
// }
// }
// console.log(missNumber)
// console.log("---------------------------------------------------------------------------------");
// console.log("------------:Palindrom:------------");

// function pali(value){
//     console.log("Given Value-:",value);
// value=value.toString().replace(/\W/g,"").toLowerCase()
// return value==value.split("").reverse().join("")
// }
// console.log("Is Palindrom-:",pali("jamaj"));
// console.log("Is Palindrom-:",pali(676));
// console.log("Is Palindrom-:",pali("Mahesh"));


let string="I Am Indian Citizen"
let count=0
for(let i=0;i<string.length;i++){
// const element=string.charAt(i).toLowerCase()
// // const lowerCase=element
// if(element=="a"|| element=="e"||element=="i"||element=="o"||element=="u"){
//     console.log(count+=1,element);
// }
const lowerCase=string[i].toLowerCase()
// const lowerCase=element
if(lowerCase=="a"||lowerCase=="e"||lowerCase=="i"||lowerCase=="o"||lowerCase=="u"){
console.log(count+=1,lowerCase);
}
}


