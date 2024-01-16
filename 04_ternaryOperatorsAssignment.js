function maleMarriageEligibility(gender,age,boyName) {
    var maleAge= age>=21 ? "Eligible For Marriage" : "Not Eligible For Marriage";
    console.log(`Hey ${boyName} You Are ${maleAge}`);
}
maleMarriageEligibility("Male",25,"Billagates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`========================================================================`);
function femaleMarriageEligibility(gender,age,girlName){
var girlAge= age>=18 ? "Eligible For Marriage" : "Not Eligible For Marriage";
console.log(`Hey ${girlName} You Are ${girlAge}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log("------------------------------------------------------------------------------------");
let marriage=(name,age)=>{
return (age<=0 || age>=100)?`Invalid Data`:(age>=21)?`${name} Congrats You Are Eligible For Marriage`:`${name} Sorrry You Not Elligible for Marriage`
}
console.log(marriage("Vinnay",24));
console.log(marriage("Shambhu",1));
console.log(marriage("Sammy",-24));
console.log(marriage("Bassu",101));