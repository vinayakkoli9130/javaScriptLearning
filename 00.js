// for(let i=0;i<=10;i++){
// console.log(i);
// }
// console.log("---------------------------------------------");
// for(let i=10;i>=0;i=i-2){
// console.log(i);
// }
// console.log("---------------------------------------------");
// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// console.log("---------------------------------------------");
// for(let i=0;i<=10;i++){
// if(i%2!==0){
//     console.log(i);
// }
// }
// console.log("---------------------------------------------");
// let sumOf=0
// for(let i=0;i<=10;i++){
// sumOf+=i
// }
// console.log("Sum Of 1 To 10-:",sumOf);
// console.log("---------------------------------------------");

// let arr=[23,54,34,6,7,18,38]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

/*
Sort Method-:sort method used to sort array in asceding order.
*/
 let arr=[23,42,12,985475,1232,45,65,10,113131,12313]
// arr.reverse()
// console.log(arr.sort((a,b)=>{
// return a<b?-1:1
// }));

// let arr1=["Warnar","Convey","Virat","Axar","Deep"]
// arr1.sort()
// console.log(arr1);

class Vehicle{
    constructor(company,model,fuel,drive,price){
this.company=company
this.model=model
this.fuel=fuel
this.drive=drive
this.price=price
    }
}
let audiA3 = new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audiQ3= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);

let arrayOfVehicles=[audiA3,audiQ3,mahindra,honda,hero]

arrayOfVehicles.sort((vehical1,vehical2)=>{
    return vehical1.price<vehical2.price?-1:1
})
arrayOfVehicles.forEach((currentValue)=>{
    console.log(currentValue.company,currentValue.price);
    
})


//----------------------------------------------------------------//
