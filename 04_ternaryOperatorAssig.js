var number=function (val1,val2) {
    console.log(`Values-:   Val1-->:${val1}  Val2-->:${val2}`);
//   var  num= val1 > val2 ? "Val1 Is Greater Than Val2" : "Val1 Is Less Than Val2";
    console.log(`Val1 Is Greater Than Val2-:${val1>val2}  Val1 Is Less Than Val2-:${val1<val2}`);
}
number(10,-10);
number(800,899);
console.log(`=======================================================================`);
var evenOrOdd=function (val) {
var number= val%2 ? "Odd" : "Even"
    console.log(`Givan Number ${val} Is-:${number}`);
}
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);
console.log(`=======================================================================`);

var lengthOFWord=function(val) {
    var len=val.length;
    var word=len%2 ? "odd" : "Even";
   
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

