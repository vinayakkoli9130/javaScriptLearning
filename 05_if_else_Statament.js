function maleMarriageEligibility(gender,age,boyName) {
    console.log(`Personal Details : Name : ${boyName}, Gender : ${gender}, Age : ${age}`);
    var result = ((gender==="Male") && (age>=21)) ? `Hey ${boyName} you are Eligible for Marriage` : `Not Eligible for Marriage.`;

    //var result = ((gender==="Male") && (age>=21)) ? console.log(`Hey ${boyName} you are Eligible for Marriage`) : console.log("Not Eligible for Marriage. ");
    return result;
} 


  // maleMarriageEligibility("Male",25,"Billgates");
console.log( maleMarriageEligibility("Male",25,"Billgates"));
console.log( maleMarriageEligibility("Female",24,"Jemmy"));
console.log("=========================================================");
var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`Age value : ${age}, Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);
    }
    if(age<18 && age>0){
        console.log(`your age is : ${age}, You can note vote`);
    }
}
votingEligibility(20);
votingEligibility(89);
votingEligibility(1500);
votingEligibility(0)
console.log(`==============================================================================================`);
console.log(`Boomm booom`);
var isRoadBlocked = true;
if(isRoadBlocked){
    console.log(`Traveling thru express way`);
    console.log(`Travel will be short just for 2 hrs`);
    
}else{
    console.log(`Traveling thru tunnel`);
    console.log(`Travel will be long just for 5 hrs`);
}




// Write a Function expression with one arg—> age to check whether he or she is eligible for voting or not, Then accordingly display message.
// Ex. 45, 17, 8, 20, -10, 200, 0

var votingEligibility = function (age){
    if (age<=0 || age>120) {
        console.log(`Invalid data: ${age}`);
    } else {
       console.log(`Valid data:${age}`); 
       
       if (age>=18) {
        console.log(`Congratulation you can vote: ${age}`);
       }else{
        console.log(`Sorry you are not eligible for vote: ${age}`);
       }
    }
}
votingEligibility(230);
votingEligibility(-20);
votingEligibility(10);
console.log(`--------------------------------------------------------------------------------------------------`);
function isEvenOrOdd(num) {
  if (typeof num == "number") {
    console.log(`Valid number ${num}`);
    if (num % 2 === 0) {
      console.log(`Even number`);
    } else {
      console.log(`Odd Number`);
    }
  } else {
    console.log(`Invalid number ${num}`);
  }
}
isEvenOrOdd(20);
isEvenOrOdd(11);
isEvenOrOdd("30");
console.log("-------------------------------------------------------------------------");
let isMarried=true
if(isMarried){
console.log("Congratulation");
}
else{
  console.log("married As soon As Possible");
}
console.log("---------------------------------------------------------------------------");
// Write a Function expression with one arg—> age to check whether he or she is eligible for voting or not, Then accordingly display message.
// Ex. 45, 17, 8, 20, -10, 200, 0

let votingEligibilitys=(age)=>{
if(age<=0||age>=150){
console.log("Invalid Age");
}else if(age>=18 && age<=150){
console.log("You Are Eligible For Voting");
}else{
  console.log("You Are Not Eligible For Voting");
}
}
votingEligibilitys(17)
votingEligibilitys(18)
votingEligibilitys(-54)
votingEligibilitys(151)








