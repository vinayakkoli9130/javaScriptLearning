function Vehicle(vehicleName,engine,color,price,average) {
this.vehicleName=vehicleName;
this.engine=engine;
this.color=color;
this.price=price;
this.average=average;
}
let vehicle1= new Vehicle ("Royal Enfield Bullet","350 cc","Black","1.60 Lakh" ,50)
let vehicle2= new Vehicle ("Yamaha MT 15 V2","155 cc","Pink","1.66 Lakh",55)
let vehicle3= new Vehicle ("Hero Glamour","124 cc","Blue","80000",80)
let vehicle4= new Vehicle ("TVS Sport","125 cc","Yellow And Black Combination",82000,85)
let vehicle5= new Vehicle ("Bajaj Platina 110","115.45 cc","Navy Blue",69,216,70)
let vehicle6= new Vehicle ("TVS Star City Plis","109.7 cc","Red And Silver Combination",72,305,68)
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log(vehicle4);
console.log(vehicle5);
let addCountry=Vehicle.prototype.country="India";
console.log(addCountry);
let veh1=vehicle1.country;
console.log(veh1);