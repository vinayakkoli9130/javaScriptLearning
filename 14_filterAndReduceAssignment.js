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
const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]
console.log(`=============1) Find Out All Employee Details Work In Wipro Company=============`);
const compony=array.filter(value=>value.empCompany=="Wipro")
// console.log(compony);
compony.forEach((value)=>{
// console.log( "Employee ID-:",value.empId,"Employee Name-:",value.empName,"Employee Department-:",value.empDept,"Employee Salary-:",value.empSalary,"Employee Company-:",value.empCompany);
console.log(value);
})
console.log(`=============2) Find Out All Employee Details "IT" Or "HR" Department=============`);
department=array.filter(value=>value.empDept=="IT" || value.empDept=="HR")
department.forEach((value)=>{
    console.log(value);
})
console.log(`=============3) Find Out All Employee Whose Employee ID Is Greater Than 50 =============`);
const id=array.filter(value=>value.empId>50)
  id.forEach(value=>{
    console.log(value);
  })
  console.log(`==============4) Find Out All Employee Whose Names Start With "A","V" Or "M"==============`);
const name=array.filter((value)=>{
    if(value.empName.startsWith("A") ||value.empName.startsWith("V") || value.empName.startsWith("M")){
        console.log(value);
    }
})  
console.log(`==============5) Find The  Average Salary Of Employee For All Department ==============`);
 const arrayLength= array.length
sum=0;
const avarege=array.filter(value=>sum=sum+value.empSalary)
// console.log(sum/arrayLength);
const sumOfSalary=avarege.reduce((Curentvalue,employee)=>{
 return sum/arrayLength;
})
console.log("              -:Average Salary Of Employees-:",sumOfSalary);
console.log(`===================6)Find The Average Salary For 'IT' Department===================`);
const deptSalary=array.filter((value)=>{
  return value.empDept=="IT"
})
// console.log(deptSalary);
const avg=deptSalary.reduce((Curentvalue,value)=>{
  return Curentvalue+ value.empSalary
},0)
console.log("               -:Average Salary Of IT Department Employee-:",avg/deptSalary.length);
