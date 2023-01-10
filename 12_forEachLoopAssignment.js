class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
    this.empId=empId;
    this.empName=empName
    this.empDept=empDept
    this.empSalary=empSalary
    this.empCompany=empCompany;
}
}
const empAnil = new Employee(22 ,"Anil","IT",50000 ,"TCS")
const empRadha = new Employee(33 ,"Radha","HR", 74000,"Wipro")
const empRishi = new Employee( 55,"Rishi","Finance",47000 ,"TCS")
const empSonali = new Employee( 66,"Sonali","Finance", 45000,"Infy")
const empMonika = new Employee( 77,"Monika","IT",40000 ,"Wipro")
const empViny = new Employee( 88,"Vinayak","IT", 75000,"TCS")
const empMahi = new Employee( 99,"Mahesh","HR",85000 ,"Infy")
console.log(`=====================1) TCS Company Employee Details=============== `);
const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]
array.forEach((value)=>{
if (value.empCompany=="TCS") {
    console.log(value);
}
})
console.log(`=====================3)  Employee Salary Greater Than Or Equal To 50000 Details=============== `);
array.forEach((value)=>{
if (value.empSalary>=50000) {
    console.log(value);
}
})
console.log(`=============================3)Sum Of All Employee Salary=====================================`);
let sumOfArray=0
array.forEach((value)=>{
sumOfArray=sumOfArray + value.empSalary
})
console.log(`Sum Of All Employee Salary-:${sumOfArray}`);
console.log(`=================4) Average Salary=====================================`);
let size=array.length
console.log("Total Numbers Of Employee-:",size);
console.log("Total Salary Of Employees-:",sumOfArray);
console.log("Average Salary-:",sumOfArray/size);
console.log(`====================5)Employee "IT" Or "HR" Department Salary  Is Greater Than Or Equal To 75000=======================================================`);
array.forEach((value)=>{
if((value.empDept=="IT"|| value.empDept=="HR") && value.empSalary>=75000){
console.log(value);
}
})