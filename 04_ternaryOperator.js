//==-: javaScript is automatical convert one data type to another data type as per need
//===-:javaScript Strictly follow the rule Can't change datatype.

var num1 = 10;
var num2 = "10";
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof '100');

var result = num1==num2 ? "Equal" : "Not Equal";//javaScript is automatical covert data type.== is only check value.
console.log(`num1==num2==> ${result}`);

var res = num1===num2 ? "Equal" : "Not Equal";//Strictly follow the rule Can't change datatype 
console.log(`num1===num2==> ${res}`);

// If SSC marks greater than equal to 35 then pass or fail

var sscMarks = 39;
var resultPassOrFail= sscMarks>=35 ? "Pass"  : "Fail";

 console.log(`Result is ${resultPassOrFail}`);

 var sscResult = function(sscMarks){ 
    // var resultPassOrFail= (sscMarks>=35 && !(sscMarks>100)) ? "Pass"  : "Fail";
    // var resultPassOrFail= (sscMarks>=35 && sscMarks<100) ? "Pass"  : "Fail";
    var resultPassOrFail= (sscMarks < 0 || sscMarks > 100 ) 
        ? "In valid Data" 
        : (sscMarks>35 ? "Pass" : "Fail"); 
    return resultPassOrFail;
 }

console.log(`Result is 23  ${sscResult(23)}`);// Valid Value
console.log(`Result is 45  ${sscResult(45)}`);// Valid Value
console.log(`Result is 65  ${sscResult(65)}`);// Valid Value

console.log(`Result is 1200 ${sscResult(1200)}`); // Invalid value
console.log(`Result is "Ten" ${sscResult("Ten")}`); // Invalid value
console.log(`Result is -10 ${sscResult(-10)}`); // Invalid value
console.log(`Result is null ${sscResult(null)}`); // Invalid value
console.log(`Result is undefined ${sscResult(undefined)}`); // Invalid value

console.log(`=======================================================================`)
var marriage=function (val) {
    var ageLimit= (val < 0 || val > 100 ) 
    ? "In Valid Data"
     :(val>=21 && val<=25) ? " Marriage Age":" not Marriage Age" ;
    console.log(`your age is ${ageLimit}`);
    
}
marriage(18);
marriage(21);
marriage(20.9);
marriage(25);
marriage(26);



// If SSC marks greater than equal to 35 then pass or fail

function sccMark(val) {
  return (val>=100 || val<0)?"Invalid Data": val>=35? "Pass":"Fail"
}

console.log(sccMark(35));
console.log(sccMark(120));
console.log(sccMark(12));



