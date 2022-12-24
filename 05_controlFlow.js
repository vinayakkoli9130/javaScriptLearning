console.log(`1)`);
var sentence = "I am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
        // console.log(char);
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is -: ${sentence} = ${counter}`);
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`2)`);
function sum_Of_Cubes(n) {
  let sumn = 0;

  for (let i = 1; i <= n; i++) {
  sumn= i ** 3;
  }
  return sumn;
}

console.log(sum_Of_Cubes(1));
console.log(sum_Of_Cubes(2));
console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));
console.log(sum_Of_Cubes(5));
console.log(`--------------------------------------------------------------------------------------------------`);
// console.log(`3`);
// function oddPositionedChars(val) {
// var number=val.split(" ")
// var mahi= number.length;
// console.log(val.indexOf(mahi.charAt(1)));
// }

// oddPositionedChars(`Hard Work Always Pays Back`);

