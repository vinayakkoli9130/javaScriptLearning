//hoising

// 'use strict'
//Variable Hoisting-:you can hoist only those variable which is declared by 'var'keyword.
//you can't hoist let and const 
// hoisting=23
// console.log(hoisting);
// var hoisting

//you can hoist only regular function.you can't hoist function expression and any other funtion
// hoistings("Vinayak Koli")
// function hoistings(val) {
//     console.log(val);
// }

class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
this.empId=empId
this.empName=empName
this.empDept=empDept
this.empSalary=empSalary
this.empCompany=empCompany
    }
}
const empAnil = new Employee(11,"Anil","IT",24000,"TCS");
const empVinny = new Employee(22,"Vinny","Finance",24000,"Wipro");
const empSunny = new Employee(33,"Sunny","HR",30000,"HTC");
const empGajju = new Employee(44,"Gajju","IT",22000,"Cognizent");
const empGundu = new Employee(55,"Gundu","HR",34000,"Infy");

const empRishi = new Employee( 55,"Rishi","Finance",47000 ,"TCS")
const empSonali = new Employee( 66,"Sonali","Finance", 45000,"Infy")
const empMonika = new Employee( 77,"Monika","IT",40000 ,"Wipro")
const empViny = new Employee( 88,"Vinayak","IT", 75000,"TCS")
const empMahi = new Employee( 99,"Mahesh","HR",85000 ,"Infy")
const empRadha = new Employee(111 ,"Radha","HR", 74000,"Wipro")
// console.log(empAnil);
// console.log(empVinny);
// console.log(empSunny);
// console.log(empGajju);
// console.log(empGundu)

// var array=[empAnil,empVinny,empSunny,empGajju,empGundu,empRadha,empRishi,empSonali,empMonika,empMahi,empViny]
// count=0
// array.forEach((val)=>{
// console.log(count=count+1,val.empName,val.empSalary);
// })
// console.log("-----------------------------------------------------------------------------------");
// array.forEach((val)=>{
// if(val.empCompany=="TCS"){
//     console.log("TCS Company Employee Detailes-:",val);
// }
// })
// console.log("-----------------------------------------------------------------------------------");
// array.forEach((val)=>{
// if(val.empSalary>=50000){
//     console.log("employee salary greater than or equel to 50000-:",val);
// }
// })
// console.log("--------------------------------------------------------------------------------------------");
// sumOfAllSalary=0
// array.forEach((val)=>{
//     sumOfAllSalary=sumOfAllSalary+val.empSalary
// })
// console.log("Sum Of All Employee Salary-:",sumOfAllSalary);
// console.log("--------------------------------------------------------------------------------------------");
// var size=array.length
// console.log("Total Number Of employee-:",size);
// console.log("Total Salary  Of All employee -:",sumOfAllSalary);
// console.log("Average Salary Of All Employee-:",sumOfAllSalary/size);
// console.log("--------------------------------------------------------------------------------------------");
// array.forEach((val)=>{
// if((val.empDept=="IT" || val.empDept=="HR") && val.empSalary<=40000){
// console.log(" Employee Salary 40000 or Less-:",val);
// }
// })
let interview=false;
let result=new Promise((reslove,reject)=>{
    setTimeout(()=>{
        if(interview){
            reslove("You Are Selected")
                }
                else{
                    reject("Sorry You Are Not Selected")
                }

    },2000)

})
.then((result)=>{
console.log(result);
}).catch((error)=>{
console.log(error);
}).finally(()=>{
    console.log("your Interview process is completed");
})