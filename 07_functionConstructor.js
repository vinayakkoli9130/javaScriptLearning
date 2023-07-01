//function construction is blue print of an object.
//prototype is used to assign same value of all object.
//instanceOf is used to check given Object is available or not in function constructor.
function Student(name, rollNo, ...age){//when we create function constructor  use function keyword.
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 let s1 = new Student("Vinny", 111, 23);//new keyword are used to create new object.
 console.log(s1.rollNo);//log rollNo of s1 object
 let s2 = new Student("Jenny", 22, 35);
 console.log(s1);
 console.log(s2);
 console.log(s2.name);


function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
        //prototype is used to assign same value of all object.
 Student.prototype.country = "India";//Assign same value to the all object "country=india".
 let vinny = new Student("Vinny", 111, 23);
 let jenny = new Student("Jenny", 44, 45);
 let minny = new Student("Minny", 55, 23);
 let tommy = new Student("Tommy", 66, 35);
 console.log(vinny);
 console.log(jenny);
 console.log(minny);
 console.log(tommy);
 console.log(vinny.country);
 console.log(minny.country);
 console.log(jenny.country);
 console.log(tommy.country);

let availableVinny=vinny instanceof Student;//check given Object is available or not in function Student.
console.log(availableVinny);

// let availableGonny=gonny instanceof Student;
// console.log(availableGonny);

function Class(name,classs,id){
this.name=name
// this.classs=classs
// this.id=id
}