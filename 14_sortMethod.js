const arrayOfNames = ["Anuja", "Sonali", "Manoj", "Yogesh", "Bharat"];
console.log("==== reverse() === ");
arrayOfNames.reverse();
console.log(arrayOfNames);
console.log("==== sort() in ascending order === ");
arrayOfNames.sort();
console.log(arrayOfNames);
console.log("==== sort() in descending order === ");
arrayOfNames.reverse();
console.log(arrayOfNames);


const arrayOfNumbers = [23, 111, 5, 99, 32];
console.log("==== sort() array of numbers=== ");
// arrayOfNumbers.sort();
console.log(arrayOfNumbers);
arrayOfNumbers.sort((a, b)=>{
   return a>b ? 1 : -1;
});
console.log(arrayOfNumbers);
// Sort the array in descending order
arrayOfNumbers.reverse();
console.log(arrayOfNumbers);


const arrayOfNums = [45, 888, 5, 99, 67]; // a = 45  b=888  a is greater 
arrayOfNums.sort((a,b)=>{
    return a>b ? -1 : 1; // 45-888 ==> -ve  ==> 99, 67  = 99-67 ==> +ve
});
console.log(arrayOfNums);

class Vehicle {
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

 const arrayOfVehicles = [ audiA3, audiQ3, mahindra, honda, hero];
 arrayOfVehicles.sort((vehicle1, vehicle2)=> {
    return vehicle1.price > vehicle2.price ? 1 : -1;
 });
 arrayOfVehicles.forEach((currentValue)=>{
    console.log(currentValue.company, currentValue.price);
 });
 let driving=arrayOfVehicles.sort((a,b)=>{
return a.drive>b.drive?1:-1;
 })
driving.forEach((value)=>{
console.log(value.model,value.drive);
})

 console.log(`===============================================================================================`);
const stringOfArray=["orange","Banana","Pinapple","Apple","Strobarry","Mango",]
console.log(stringOfArray);

stringOfArray.forEach(element => {
  
    console.log(`${element}`);
});
console.log(`Reverce Given Array-:`);
stringOfArray.reverse()
console.log(stringOfArray);
console.log(`Arrange Array In Ascending Order-:`);
stringOfArray.sort()
console.log(stringOfArray);
console.log(`Arrange Array In Descending Order-:`);
stringOfArray.reverse()
console.log(stringOfArray);
console.log(`--------------------------------------------------------------------------------------------------------------------`);
const array=[45,79,42,61,42,97,92,39,46,12,28,1,7,98,08,9,24,97,64]
console.log(array);
array.sort()
console.log(array);
array.reverse()
console.log(array);
const ascendingOrder=array.sort((a,b)=>{
    return a>b?1:-1;
})
console.log(ascendingOrder);
console.log(ascendingOrder.reverse())
const duplicate= new Set(ascendingOrder);
console.log(duplicate);
duplicate.forEach(element=>console.log(`${element}`))

console.log(`-------------------------------------------------------------------------`);
const arraysOfValue=[626,34,24,5,2,,34,565,43,,2,67,543,34,56,7,7654,]
let year=arraysOfValue.sort((a,b)=>{
return a>b?1:-1
})
console.log(year);
let a=[]
console.log(year.reverse());
year.forEach((value)=>{
console.log(value);
})
arrayOfSubject=["Java","Python","C++","Data Structure","Computer Science","Fundamental Of Computer","C language"]
console.log(arrayOfSubject.sort());
console.log(arrayOfSubject.reverse());