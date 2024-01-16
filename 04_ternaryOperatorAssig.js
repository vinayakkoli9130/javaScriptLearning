var number=function (val1,val2) {
    console.log(`Values-:   Val1-->:${val1}  Val2-->:${val2}`);
//   var  num= val1 > val2 ? "Val1 Is Greater Than Val2" : "Val1 Is Less Than Val2";
    console.log(`Val1 Is Greater Than Val2-:${val1>val2}  Val1 Is Less Than Val2-:${val1<val2}`);
}
number(10,-10);
number(800,899);
console.log(`=======================================================================`);
var evenOrOdd=function (val) {
var number= val%2==0 ? "Odd" : "Even"
    console.log(`Givan Number ${val} Is-:${number}`);
}
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);
console.log(`=======================================================================`);

var lengthOFWord=function(val) {
    var len=val.length;
    var word=len%2==0 ? "odd" : "Even";
   
    console.log(`Given Word ${val} is-:${word}`);
}
lengthOFWord("JavaScript");
lengthOFWord("Developer");
lengthOFWord("Google");

function oddEven(val) {
 return val.length%2?"Odd ":"Even" 
}
console.log(oddEven("Mahesh"));
console.log(oddEven("Vinayak"));


function upperCas(val) {
   return val.length , val.trim().length-4;
}
console.log(upperCas("   vinayak      "));

const information=function (val) {

// const info=(val>=18 && val<=100)?"Invalid Data":val>=45? "Pass":"Fail"
const info=(val<=18 && val>=100)?"Invalid Data":val>=25?"Your EliGible For Marrage":"Your Not ELEGIBLE FOR MARRAGE"
   console.log(info); 
}
information(20)
information(26)
console.log("---------------------------------------------------------------------------------------------------");
console.log("Odd Or Even Number");
let oddEvens=(num)=>{
return num%2==0?"Even Number":"Odd Number"
}
console.log(oddEvens(20));
console.log(oddEvens(21));
console.log("Greater than or less than");
let lessGreater=(val1,val2)=>{
return val1==val2?"Val1 IS Equl To Val2": val1>val2?"Val1 is Greater Than Val2":"Val2 is Greater Than Val1"
}
console.log(lessGreater(12,11));
console.log(lessGreater(11,12));
console.log(lessGreater(12,12));
console.log("---------------------------------------------------------------------------------------------------");