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

let mapEmployee= new Map();
mapEmployee.set(22,empAnil)
mapEmployee.set(33,empRadha)
mapEmployee.set(55,empRishi)
mapEmployee.set(66,empSonali)
mapEmployee.set(77,empMonika)
mapEmployee.set(88,empViny)
mapEmployee.set(99,empMahi)
console.log(`==================Traversing Map Using forEach() Loop=======================`);
mapEmployee.forEach((value)=>{
console.log(`EmpId-:${value.empId}  Employee Name-:${value.empName} Employee Department-:${value.empDept}  Employee Company-:${value.empCompany}  Employee Salary-:${value.empSalary}`);
})

