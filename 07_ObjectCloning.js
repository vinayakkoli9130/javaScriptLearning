//Variable And Variable Value Is Stored In Stack Or Static Memory.
//Object Name Is Stored In Stack But {Body Of Object } Can be Stored in Heap Or Dynamic Memory
var isMarried = true;

let name = "John";
let frdName = "Tom"
name = frdName;// name Variable Pointing FrdName Value but friend value Available As it is.
console.log(name);
console.log(frdName);
console.log(`_____________________________________________________________________________________________________`);
 //const age = 23;
 //const frdAge = 25;
 //age = frdAge;//When We Use "const" Keyword,Then It Is Not allowed const keyword to Update/Change Value 
 console.log(`_____________________________________________________________________________________________________`)

    const anil = {
        age: 23,
        name: "Anil",
        company: "Microsoft"
    }
const sunil = {
    age: 24,
    name: "Sunil",
    company: "Apple"
}
//  anil = sunil; // Not allowed
console.log(`====================================freeze()===============================================`);
// // Array freezing 
 const arrayNumbers = [2, 4, 5, 8];
 arrayNumbers.push(10);
 console.log(arrayNumbers);
//  arrayNumbers = []; /// Not allowed
// Freeze array
 Object.freeze(arrayNumbers);//When we use freeze Method Then You Can Not change,update,delete element in array.
 console.log(`=================assign(objectName1,objectName2)Method========================================`);
const anilInfo={
    name:"Anil",
    age:23,
    isMarried:true,
}
 const sunilAddress = {
     city : "Pune",
     pin: "431202"
 }
Object.assign(anilInfo,sunilAddress)
console.log(anilInfo);
console.log(sunilAddress);
// // Merging two objects
console.log(`======Deep Clone always performed on primitive data type=====`);
 let myName = "Anil";
 let yourName = "Sunil";
 myName = yourName; // Deep Clone always performed on primitive data type

 console.log(myName);
 console.log(yourName);

  yourName = "Jenifer";
 console.log(myName);
 console.log(yourName);

 console.log(`========================Shallow Cloning=================================`);
 let vinny = {
     age: 23,
     name: "Vinny",
     company: "Microsoft"
 }
 let sunny = {
     age: 26,
     name: "Sunny",
     company: "Google"
 }
 vinny = sunny; // Shallow cloning//vinny Object pointing sunny Object, vinny object can accuses sunny object values
 sunny.country = "India";
 console.log("Sunny: ", sunny); // 
 console.log("Vinny: ", vinny); //

