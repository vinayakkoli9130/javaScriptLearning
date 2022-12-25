console.log(`1)`);
var sentence = "I am very good IT Developer";
// Print the vowels only aeiou or AEIOU
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy=char.toLocaleLowerCase();
    if (charCopy=='a' || charCopy=='e' || charCopy=='i' || charCopy=='o' || charCopy=='u') {
        counter = counter +1;
    }   
}
console.log(`Total vowels in string is -: ${sentence} = ${counter}`);
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`2)`);
function sumeOfCube() {
  var sum=0;
  for (let index = 1; index <=5; index++) {
  sum=sum + cube;
    
  }
 console.log(`The Sum Of Cube Of Numbers From 1 To 5 Is-:${sum}`); 
}
sumeOfCube();