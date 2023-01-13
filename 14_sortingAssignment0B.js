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
const assendingId=array.sort((a,b)=>{
return a.empId>b.empId ? 1 : -1
})
console.log(`=========1) Sort In Ascending Order Of The Employee Id====================`);
assendingId.forEach(element => {
    
    console.log("Employee ID-:",element.empId,"Employee Name-:",element.empName,"Employee Department-:",element.empDept);
});

const assendingDept=array.sort((a,b)=>{
    return a.empDept>b.empDept ? 1 : -1
    })
    console.log(`=========2) Sort In Ascending Order Of The Employee Department====================`);
    assendingDept.forEach(element => {
    
        console.log("Employee ID-:",element.empId,"Employee Department-:",element.empDept,"         Employee Company-:",element.empCompany);
    });
    const descendingSalary=array.sort((a,b)=>{
return a.empSalary>b.empSalary?-1:1
    })
    console.log(`=========3) Sort In Descending Order Of The Employee Salary====================`);
    descendingSalary.forEach((element)=>{
console.log(element.empName,element.empSalary,element.empCompany);
    })