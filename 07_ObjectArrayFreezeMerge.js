let personalDetails={
    name:"Vinayak Koli",
    age:23,
    town:"Mangalwedha"
}
console.log(`1st Object`);
console.log("Personal Detalils",personalDetails);
console.log(`____________________________________________________________________________________________________________`);
let collegeDetails={
collegeName:"Sangola College",
city:"Sangola",
degree:"BCS",
passOutYear:2020,
}
console.log(`2nd Object`);
console.log("Collge Detalils",personalDetails);
console.log(`===============================Merge Two Objects=======================================================`);
personalDetails=collegeDetails//Using Assignment (=) Operator
console.log(personalDetails);

let assign=Object.assign({},personalDetails,collegeDetails)//Using Object.assign({},First Object name, Second Object name) 
console.log(assign);

console.log(`____________________________________________________________________________________________________________`);
console.log(`Do Not Add New Value In Array Because Of We Are Using freeze() Method `);
let array=["Arman","Ganesh","Salman","jay","Dipak"];
console.log(array);
console.log(`Traverse String Using "for of" Loop`);
console.log(`Given Friends Name Is--->`);
for (const iterator of array) {
   console.log(`${iterator}`);
}
Object.freeze(array)
// array.push("Javed")
// console.log(array);
console.log(`____________________________________________________________________________________________________________`);
console.log(`Given a String Company="Codmind Technology"`);
let arrayString="Codmind Technology";
let counter=" ";
 for (let index =arrayString.length-1 ; index >=0 ; index--) {
  if (index==6) {
    break;
 }
     counter=counter+arrayString.charAt(index)
   }
  console.log(counter);

  console.log(`\nReverse Only Technology Word Of Given String--->Codemind`,counter);
 console.log(`____________________________________________________________________________________________________`);
