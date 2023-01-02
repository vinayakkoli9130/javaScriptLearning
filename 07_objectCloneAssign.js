const arrayNums=[20,3,4,56,90,400,49]
console.log(`Given Array--->${arrayNums}`);
let arrayNumber=arrayNums;
console.log(arrayNumber.push(55,66));
console.log(`===1)Perform Shallow Clone On Array====`);
console.log(`arrayNums-->${arrayNums}`);
console.log(`arrayNumber-->${arrayNumber}`);
console.log(`2) Perform deep clone using spread operator`);
let deepClone=[...arrayNumber,10,25]
console.log(`Original array--->${arrayNums}`);
console.log(`deep clone array--->${deepClone}`);
console.log(`3) Concat Array Using spread Operator`);
arrayEven=[2,30,14,8]
let concatArray=[...arrayNums,...arrayEven]
console.log(`"arrayNums---->",${arrayNums}`);
console.log(`arrayEven---->${arrayEven}`);
console.log(` Concat Array "arrayNum" And Array "arrayEven" Using spread Operator`);
console.log(`After Merge Arrays-->${concatArray}`);
console.log(`==========================================================================================================`);
 const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"60,0000INR"
    },
    address:{
    locality:{
        colony:"OM Vrindavan Society",
        street:"Kanch Pokli"
    },
    city:"Mumbai",
    state:"Maharashtra",
    country:"India"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
 }
 console.log(employee_info);
 console.log(`Employee Detais---->`);
 console.log("Location--:",employee_info.address.locality);
 console.log("City--:",employee_info.address.city);
 console.log("State--:",employee_info.address.state);
 console.log("Country--:",employee_info.address.country);
 console.log(`John Doe Moblie Numbers--:${employee_info.mobiles}`);

 let month = JSON.parse(JSON.stringify(employee_info));
 console.log("Before Update July Month salary---> ",month.salary);
 console.log("After Update July Month salary--->",month.salary.july_month="80k");
 console.log(month.salary);
 console.log("Before Update Country Name--:",month.address);
 console.log("After Update Country Name--->",month.address.country="United Kingdom");
 console.log(month.address);
