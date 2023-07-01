console.log(`======Deep Clone always performed on primitive data type=====`);
 let myName = "Anil";
 let yourName = "Sunil";
 myName = yourName; // Deep Clone always performed on primitive data type
 console.log(myName);
 console.log(yourName);

  yourName = "Jenifer";
 console.log(myName);
 console.log(yourName);
          //when a refernce variable is copid into  new refernce variable using assignment operator(=) a shallow copy of the reference object is created
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
 vinny = sunny; // Shallow cloning//vinny Object pointing sunny Object, vinny object can accusses sunny object values
 sunny.country = "India";
 console.log("Sunny: ", sunny); // 
 console.log("Vinny: ", vinny); //


// Spread Operator 
let empSumit = {
    empName : "Sumit",
    empSalary : "70K"
}
// ... Spread Operator
// console.log(empSumit);
// console.log({... empSumit});
//
let empMohit = {...empSumit}; // Deep Cloning using spread operator (...) //when we use sprade operator then 
empMohit.empName = "Mohit";
console.log(empMohit);
console.log(empSumit);


// 2. Deep clone using JSON.stringfy
//
console.log("===== Deep clone using JSON.stringfy ======");//deep cloning are normally used in nested oject in object
const empStew = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70, 
        math: 84,
        english: 87
    }
}
let empBill = JSON.parse(JSON.stringify(empStew));//
empBill.marks.science = 90;
empBill.name = "Bill Gates";
console.log(empStew);
console.log(empBill);
console.log(empStew.marks.science);
console.log(empBill.marks.science);
console.log(empBill.marks);
empBill.marks.math=97
console.log(empBill.marks);

let emloyee={
    name:"Vinayak",
    lastName:"Koli"
}
let employee1=Object.assign({},emloyee)

console.log(emloyee);
console.log(employee1.name
    ="Mahesh");
    console.log(employee1);
    console.log(emloyee);