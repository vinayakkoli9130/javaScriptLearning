console.log(`1)`);
class Vehicle{
constructor( vehicleName,engine,color,price,average,){
this.vehicleName=vehicleName;
this.engine=engine;
this.color=color;
this.price=price;
this.average=average;
}
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
console.log(`============================================================================`);
console.log(`2)`);

class College{
constructor(name,address,branches,founder){
this.name=name;
this.address=address;
this.branches=branches;
this.founder=founder;

}
details(){
    console.log(this.name,this.address,this.branches,this.founder);//
}
    
}
let college=new College("Sangola College","Sangola","BA,B.Com,Bsc,Bcs,BCa,Msc,M.A","Shri.Baburao R.Gaikwad");
let college1=new College("K.B.P.M","Pandharpur","Bcs,BCA,Bsc,M.co.,M.A,Msc","Rayat Shikshan Sanstha")
let college2=new College("Shri Sant Damaji Mahavidyalaya","Mangalwedha","B.A,B.Con,Bsc,M.A,11th,12th","Shri. Ratanchand Shaha")
let college3=new College(" Fabtech College of Engineering","Sangola","Engineering,B.Pharmacy,D.Pharmacy","Hon. shri. B.A.Rupnar")
let college4=new College("Shri Vithal Education & Research Institute","Pandharpur","Engineering,B.Pharmacy,D.Pharmacy","Raghunath Shevgaonka")

college.details();
college1.details();
college2.details();
college3.details();
college4.details();
 console.log(`===============================================================================================`);
 console.log(`3)`);

 function traverseObject(val){
     for (const key in val) {
         if (Object.hasOwnProperty.call(val, key)) {
             const element = val[key];
             console.log(`${key} : ${element}`);
         }
     }
     
     }
   
 
 traverseObject(college);
  console.log(``);
  traverseObject(college1);
 console.log(``);
 traverseObject(college2);
  console.log(``);
  traverseObject(college3);
  console.log(``);
  traverseObject(college4);
 






