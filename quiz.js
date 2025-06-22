var foo=1;
function myFun() {
 console.log(foo);   
 var foo=2;
}
myFun();

let strings="Happy New Year"
//Find Total Number Of String length
console.log(strings.length);//length of string is 14/they calculate from 1 to next.
//find which chractor on given position
console.log(strings.charAt(4));//return 4th index number charactor from given string.
//find out index of charactor
console.log(strings.indexOf("w"));//return index of w in given string
//create new string from existing string.there are multiple methods(slice(),substring(),substr())
console.log(strings.slice(0,4));//return from 0 . 1 to 4 charactor.
console.log(strings.substring(0,4));
console.log(strings.substr(0,5));
//convert string into Upper Case
console.log(strings.toUpperCase());
//convert string into Lower Case
console.log(strings.toLowerCase());
//find out charctor are available or not in string
console.log(strings.includes("z"));//return true false boolean value .if given charctor is available in string return true otherwise false
//add new string in existing string
// console.log(strings.concat("2024"));//using concat() method we can add new string in existing string
// find out string end with given charactor 
console.log(strings.endsWith("r"));//return string is end with r charctor or not.
//find out string start with given charctor
console.log(strings.startsWith("m"));
//remove extra spaces from string
console.log(strings.trim());
//Split a string into substrings using the specified separator and return them as an array.
console.log(strings.split(" "));
//replace charactor or word from given string
console.log(strings.replace("Year","Life"));
console.log(strings);//string is immutable


console.log("--------------------------------------------------------------------")
// let array=[11635,12345,11133,3353,1426,7522];
// console.log(array.sort((a,b)=>{
// return a>b?1:-1;
// }));

// console.log(array.reduce((a,b)=>{
//     return a+b
// }))
// let filtEl=array.filter((el)=>{
//     return el%2==0
// })
// console.log(filtEl);
// let mapArray=array.map((el)=>{
//     return el+1
// })
// console.log(mapArray);

// function result(){
//    return "Function Expression"
// }
// let message=result()
// console.log(message);
// let array=[11635,12345,11133,3353,1426,7522];
// let spreadArray={...array}
// console.log(spreadArray);

let person={
    id:1,
    name:"Rohit Sharma",
    age:34,
    city:"Numbai",
    runs:20000,
    isMarried:true,
    wifeName:"Ritika",
    
}
let {id,name,age,city,runs,isMarried=false,wifeName,childrens=2} = person;
console.log(id,name,age,city,runs,isMarried,wifeName,childrens);
for(const key in person){
    const element=person[key]
    console.log(key,element)
}

let array=["TCS","MICROSOFT","INFOSYS","COGNIZENT"]

let [comp1,comp2,comp3,comp4]=array
console.log(comp1="HCL",comp2,comp3,comp4,comp5="HEXAWARE");

for(const el of array){
    console.log(el);
    
}