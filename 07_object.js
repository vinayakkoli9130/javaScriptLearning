//object is instance of class/object is intity they can have data member and member function.
const person = {
  height: 6,
  weight: 70,
  age: 23,
  name: "Billgates",
  speak: function(){
    console.log(`Hey I can speak English and Hindi`);
  }

}
console.log(typeof person);
console.log(person);
console.log(`Accessing object properties using dot notation`);
const personAge = person.age;//initialise person object name
console.log(`Person age is: ${personAge}`);
// const personHeight=person.height;
console.log(`Person Height Is-->${person.height}`);//initialise person object height.
console.log(`Accessing object properties using square bracket notation`);
const personName = person["name"];//another way of initialise person name using ([])squre bracket
console.log(personName);

console.log(`=== Adding an property into an object====`);

console.log(`Salary Of Person${person.salary=500000}`);//adding new data member or property in person objrct.
console.log(person.salary);//initilise person salary
person.company = "Microsoft";
 console.log(person);


console.log(`=== Updating an property into an object====`);
person.age = 65;//Updates person age value in person object name.
console.log(person);

console.log(`=== Deleting an property into an object====`);
delete person.weight;//delete object person weight using "delete" keyword.
console.log(person);

console.log(`=== Accessing an function from an object====`);
person.speak();//accessing functin from object person

console.log(`=== Creating an empty object====`);
const mobile = {

}
mobile.company = "Micromax";//Adding key and value in empty object mobile.
mobile.camera = "20Px";
console.log(mobile);

person.walk= function(){//adding function walk in object person
    console.log(`Hey I can walk and run man`);
}
console.log(person);
console.log(`==============Nested Object=========================`);
const student = {
    name: "Stew Jobs",
    age: 50,
    marks: {
        science: 70,
        math: 90,
        english: 87,
        add: function() {
           return this.science+this.math+this.english;
        }
    },
    familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton']
}
console.log(`Accessing an Nested object property`);
const scienceMark =  student.marks.science;//initialise object student then mark and which subject mark you need.
console.log(scienceMark);

console.log(`Updating an Nested object property`);
student.marks.english = 97;

console.log(`Adding an Nested object property`);
student.marks.programming = 100;

console.log(`Deleting an Nested object property`);
// delete student.marks.english;

console.log(`Accessing an Nested object function`);
const totalMarks = student.marks.add();
console.log(`Total Marks: ${totalMarks}`);

console.log(`Accessing an array`);
console.log(student.familyMemberNames);

console.log(`Object entries`);
const billgates = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
   company: "Microsoft",
   valuation: "130B $"
}
console.log(`========== in operator ================`);
 let isAvailable = "height" in billgates;
 
 if (isAvailable) {
    delete billgates.height;
    console.log(`"height" property is deleted successfully`);
 } else{
    console.log(`"height" property not deleted as it is available inside object`);
 }



// console.log(Object.entries(billgates));
// console.log(Object.keys(billgates));
// console.log(Object.values(billgates));


