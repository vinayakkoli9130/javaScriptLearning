// Set: Allow unique elements//Set Does Not Allow Duplicate Element
//add()-:adding elements in set//size-:used find the length of set.//delete()-:delete a element in the set.
//has()-: used to check element available or not in the set.//clear()-:used to clear set.
const setNumbers = new Set(); // Creating Set using new keyword 
console.log("Adding elements in set");
setNumbers.add(0); // Adding element in set 
setNumbers.add(1);
setNumbers.add(3);
setNumbers.add(4);
setNumbers.add(1); // Adding duplicate element - 1
setNumbers.add(3); // Adding duplicate element - 3
setNumbers.add(5);
setNumbers.add(6);
console.log(setNumbers);
console.log(`Total available elements in Set`);
const totalElements = setNumbers.size;//used to find size of set
console.log(`Total elements in set : ${totalElements}`);

console.log(`After deletion`);
const isDeleted3 = setNumbers.delete(3);
const isDeleted99 = setNumbers.delete(99);
console.log(setNumbers);
console.log(`Is 3 Deleted ? ${isDeleted3}, Is 99 Deleted: ${isDeleted99}`);
console.log(`Check element is available or not using has()`);
const isAvailable4 = setNumbers.has(4);
const isAvailable77 = setNumbers.has(77);
console.log(
  `Is 4 Available - ${isAvailable4}, Is 77 available - ${isAvailable77}`
);
console.log(`Clearing set using clear() `);
// setNumbers.clear();//clear method is used to clear set
console.log(setNumbers);

console.log(`Type of set is : ${typeof setNumbers}`);

for (const element of setNumbers) {
  console.log(element);
}

console.log(`Removing duplicate elements`);
let arrayOfNumbers = [5, 6, 4, 6, 5, 5, 6];
// const mySet = new Set(arrayOfNumbers);
// console.log(mySet);
// const myArray = [...mySet];
// console.log(myArray);

const myArray = [...new Set(arrayOfNumbers)];//using spread 
console.log(myArray);

class Employee {
  constructor(empId, empName, empAge, empCity) {
    this.empId = empId;
    this.empName = empName;
    this.empAge = empAge;
    this.empCity = empCity;
  }
}
const empSup = new Employee(11, "Supriya", 23, "PUNE");
const empDhir = new Employee(22, "Dheeraj", 24, "MUMBAI");
const empSachin = new Employee(33, "Sachin", 22, "Surat");
const empGayatri = new Employee(44, "Gayatri", 21, "Bangluru");

// Collection - Collection of elements 
// Elements of Datatypes - Primitive and Non primitive (Reference)
const arrayOfEmployees = [ empSup, empDhir, empGayatri, empSachin];
for (const employee of arrayOfEmployees) {//employee information using for of loop
    console.log(`Employee details are: ${employee.empId}  ${employee.empName} ${employee.empCity}  `);
}

const setOfEmployees = new Set();
setOfEmployees.add(empSup);
setOfEmployees.add(empDhir);
setOfEmployees.add(empSachin);
setOfEmployees.add(empGayatri);


console.log(`---------------------------------------------------------------------------------------------------------------`);
let setOfElements= new Set();
 console.log(setOfElements);
setOfElements.add(1)
setOfElements.add(2)
setOfElements.add(24)
setOfElements.add(32)
setOfElements.add(29)
setOfElements.add(44)
setOfElements.add(7);
console.log(setOfElements);
console.log(setOfElements.size);
let deleteElement=setOfElements.delete(29)//delete element in set
console.log(deleteElement);
console.log(setOfElements.has(2));//available or not in set
setOfElements.clear()//used to clear all set
console.log(setOfElements);
console.log(`:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::`);
console.log(`:::::::::::::::::::::::::Removing Dublicate Elements:::::::::::::::::::::::::`);
const array=[36,34,24,5,4,7,89,24,5,4,433,4,5,6]
console.log(array);
//  let arrayNumber=new Set(array)//Remove duplicate element in array using set.
//  console.log(arrayNumber);
// const spread=[...new Set(array)]//Removing duplicate element in array using spread.
// console.log(spread);
// const object=new Set(array)
// console.log(object);