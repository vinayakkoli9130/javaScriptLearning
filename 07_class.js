//class is blueprint of an object
//instanceOf is used to check given object is available or Not in class
class Employee{//2) Object Class
    constructor(name, id, age, city){//constructor is used to initilise object
        this.name = name;//this keyword  is used to point current object.
        this.id = id;
        this.age = age;
        this.city = city;
    } 
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");//new keyword are used to create new object
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empSmith);
console.log(empJay);
console.log(empBill);
for (const key in empBill) {//trevese keys
    if (Object.hasOwnProperty.call(empBill, key)) {
        const element = empBill[key];
console.log(key,element);        
    }
}
// let isInstance = empSmith instanceof Employee;//instanceof check given object is available or not in Employee class.
// console.log(isInstance);
// Object is an instance of class


