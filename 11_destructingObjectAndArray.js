// Object Destructuring-:is ES feature is used to 
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
