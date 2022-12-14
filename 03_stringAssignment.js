function squareOfWordLength(val) {
   
    console.log(`      Word-:  ${val}`);
    console.log(`length of Word-:  ${val.length}`);
    console.log(`length of Word Squre-:  ${val.length * val.length}`);
    
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log("=============================================================================");
var string=function () {
   
    var sentence = "I Am Angular Developer";
var word =  sentence.split(" ");

console.log(`length of string-: ${sentence.length} Total Number Of Words In String-: ${word.length} \n String Length Divided By Total Number of Words In String-:${sentence.length / word.length}`);
console.log(`String Length Multiple By Total Number Of Words In String-:${sentence.length * word.length}`);
    
}
string();

