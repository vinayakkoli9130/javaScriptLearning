

//Destructuring-:(Object Destructuring,Array Destructuring,)is ES6 feature makes easy to extract/pull out/remove properties from object or an element from an array. 

console.log(`============================ Object Destructuring ============================= `);
const person = {
    name: "Virat Kohli",
    age: 24,
    city: "Pune",
    pinCode: 431223,
    totalRun: 55000,
    isMarried: true
}

// let pinCodeVirat = person.pinCode;
// let totalRunVirat = person.totalRun;
// let cityVirat = person.city;
let { pinCode, totalRun,  city, isMarried, wifeName="Anushka"} = person; // Object Destructuring 
console.log(pinCode, totalRun, city, isMarried, wifeName );
console.log(`============================================================================================`);
// console.log("Array Destructuring.....");
const arrayCompanys = ["TCS", "Infy", "Google", "Twitter", "Metaverse"];
let [ companys1, companys2, mad ] = arrayCompanys; // Array Destructuring
console.log(companys1,companys2, mad);
console.log("========================Array Destructuring======================================");
const arrayCompany = ["TCS", "Infy", "Google", "Twitter"];
let [ company1, company2, company3, company4, company5="Microsoft" ] = arrayCompany; // Array Destructuring
console.log(company1,company2, company3, company4, company5)
console.log(`===============================================================`);
console.log(`==========Object Destructuring======================`);
let movie={
    name:"Ved",
    actor:"Ritesh Deshmukh",
    ladyActor:"Jeneliya",
    singer:"Ajay-Atul",
    director:"Ritesh Deshamukh"
}
let {name,actor,ladyActor,singer,director}=movie;//
console.log(name,actor,ladyActor,singer,director);
for (const key in movie) {
    if (Object.hasOwnProperty.call(movie, key)) {
        const element = movie[key];
        console.log(element);
    }
}
// for (const iterator of movie) {
//     console.log(iterator);
// }
console.log(`==========Array Destructuring======================`);
let color=["Black","White","Yellow","Green","Red","Orange","Blue"]
let [color1,color2]=color
console.log(color1,color2);
//traverce array using for in loop
for (const key in color) {
    if (Object.hasOwnProperty.call(color, key)) {
        const element = color[key];
        console.log(element);
    }
}
//traverce array using for of loop
for (const iterator of color) {
    console.log(iterator);
}