//==-: javaScript is automatical convert one data type to another data type as per need

//===-:javaScript Strictly follow the rule Can't change datatype.
//
//condition ? exprIfTrue : exprIfFalse

var num1 = 10;

var num2 = "10";
console.log(typeof num1);//number
console.log(typeof num2);//string
console.log(typeof '100');//string

var result = num1==num2 ? "Equal" : "Not Equal";//javaScript is automatical covert data type.== is only check value.
console.log(`num1==num2==> ${result}`);//Equal

var res = num1===num2 ? "Equal" : "Not Equal";//Strictly follow the rule Can't change datatype 
console.log(`num1===num2==> ${res}`);//Not Equal

// If SSC marks greater than equal to 35 then pass or fail

var sscMarks = 39;
var resultPassOrFail= sscMarks>=35 ? "Pass"  : "Fail";

 console.log(`Result is ${resultPassOrFail}`);//pass

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
  return (val>=100 || val<0)?"Invalid Data":val>=35? "Pass":"Fail"
 
}
console.log(sccMark(35));
console.log(sccMark(120));
console.log(sccMark(12));

//1)marks<0 or mark>100=invalid Information.2)mark>=35:pass,3)mark<35:fail

let student=(mark)=>{
var markss=(mark<0 || mark>100)?"Invalid Mark"
:(mark>=35?"PASS":"FAIL")
return markss
}
console.log(student(0));
console.log(student(-1));
console.log(student(35));
console.log(student(120));
console.log(student(24));
console.log(student(undefined));
console.log(student("ten"));


console.log(typeof(undefined));
